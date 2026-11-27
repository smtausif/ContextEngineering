import assert from 'node:assert/strict';
import { test, before, after } from 'node:test';
import { mkdtempSync, readFileSync, existsSync, readdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { ParquetFileReader } from '../../src/ParquetFileReader.ts';
import { prepareData } from '../../src/loadData.ts';
import { logger } from '../../src/logger.ts';
import { evaluateResult, evaluateAnswer } from '../../src/evaluation.ts';
import { compare } from '../context-noise/report.ts';
import { SETTINGS, hash as pilotHash } from '../context-noise/pilot.ts';
import { ROOT, STRATEGIES, CONDITIONS, hash, fileHash, evidence, replay, configure, Journal, durableCreate, requestKey, json, strategy } from './core.ts';
import { loadPlan, execute, aggregate, validateCohort } from './execute.ts';
import { newFixtures, validateFixture, validateReviewPolicy } from './fixtures.ts';
const oldFetch=globalThis.fetch, oldKey=process.env.OPENROUTER_API_KEY, oldModel=process.env.OPENROUTER_MODEL, oldProvider=process.env.OPENROUTER_PROVIDER;
let network=0;
before(()=>{logger.level='silent';configure();process.env.OPENROUTER_API_KEY='offline-placeholder';globalThis.fetch=async()=>{network++;throw new Error('TEST DENIES NETWORK');};});
after(()=>{assert.equal(network,0);globalThis.fetch=oldFetch;for(const [k,v]of Object.entries({OPENROUTER_API_KEY:oldKey,OPENROUTER_MODEL:oldModel,OPENROUTER_PROVIDER:oldProvider})){if(v===undefined)delete process.env[k];else process.env[k]=v;}});
const plan=loadPlan(), saved=evidence();
const rows=await new ParquetFileReader({filePath:plan.manifest.dataset}).read();

test('200 eligible unique questions, same IDs and full inputs across all five unchanged strategies',()=>{
  for(const name of STRATEGIES){const tasks=plan.tasks.filter((t:any)=>t.group==='benchmark'&&t.strategy===name);assert.equal(tasks.length,200);assert.deepEqual(tasks.map((t:any)=>t.questionId),plan.manifest.benchmarkQuestionIds);assert.equal(new Set(tasks.map((t:any)=>t.questionId)).size,200);for(const t of tasks){prepareData([rows[t.rowIndex]]);assert.deepEqual(t.input,{question:rows[t.rowIndex].question,context:rows[t.rowIndex].context});}}
  assert.equal(new Set(plan.tasks.map((t:any)=>t.id)).size,1600);
});
test('200 deterministic fixtures and identical ordered cohort across every noise condition; original pilot separate and byte-identical',()=>{
  assert.equal(hash(newFixtures(rows)),hash(plan.fixtures));
  assert.equal(hash(json(ROOT+'/../context-noise/fixtures.json').fixtures),plan.manifest.separatePilot.originalFixturesHash);
  assert.equal(fileHash(ROOT+'/evidence/noise-pilot-runs.jsonl'),fileHash(ROOT+'/../context-noise/results/'+saved.source.noiseRunId+'/runs.jsonl'));
  const excluded=new Set([...saved.origin,...saved.noise].map(r=>r.questionId));
  assert.equal(excluded.size,100);
  assert.ok(plan.manifest.benchmarkQuestionIds.every((id:string)=>!excluded.has(id)));
  assert.deepEqual(plan.manifest.benchmarkQuestionIds,plan.manifest.noiseQuestionIds);
  assert.deepEqual(json(ROOT+'/prepared/selected-question-ids.json'),plan.manifest.benchmarkQuestionIds);
  assert.deepEqual(readFileSync(ROOT+'/prepared/selected-question-ids.txt','utf8').trim().split('\n'),plan.manifest.benchmarkQuestionIds);
  for(const c of CONDITIONS){const tasks=plan.tasks.filter((t:any)=>t.group==='noise'&&t.condition===c);assert.equal(tasks.length,200);assert.equal(new Set(tasks.map((t:any)=>t.questionId)).size,200);assert.deepEqual(tasks.map((t:any)=>t.questionId),plan.manifest.benchmarkQuestionIds);assert.equal(tasks.filter((t:any)=>t.reuse).length,0);}
});
test('execution guard rejects superseded manifests, duplicates, historical IDs and reordered strategy or condition tasks',()=>{
  assert.throws(()=>validateCohort({...plan.manifest,version:1},plan.tasks),/Superseded/);
  assert.throws(()=>validateCohort({...plan.manifest,version:2},plan.tasks),/Superseded/);
  const duplicate=structuredClone(plan.tasks);duplicate[1]=duplicate[0];assert.throws(()=>validateCohort(plan.manifest,duplicate),/Duplicate/);
  const historical=structuredClone(plan.manifest);historical.benchmarkQuestionIds[0]=saved.origin[0].questionId;historical.noiseQuestionIds=[...historical.benchmarkQuestionIds];assert.throws(()=>validateCohort(historical,plan.tasks),/Previously tested/);
  const reordered=structuredClone(plan.tasks);[reordered[0],reordered[1]]=[reordered[1],reordered[0]];assert.throws(()=>validateCohort(plan.manifest,reordered),/Benchmark order/);
  const noiseReordered=structuredClone(plan.tasks),indices=noiseReordered.flatMap((t:any,i:number)=>t.group==='noise'&&t.condition==='clean'?[i]:[]);[noiseReordered[indices[0]],noiseReordered[indices[1]]]=[noiseReordered[indices[1]],noiseReordered[indices[0]]];assert.throws(()=>validateCohort(plan.manifest,noiseReordered),/Noise order/);
});
test('all 600 contexts preserve supporting passages and sentence indices, with distinct unrelated passages and answer-scoped contradictions',()=>{
  assert.equal(new Set(plan.fixtures.map((f:any)=>f.irrelevant.title)).size,200);
  assert.equal(new Set(plan.fixtures.map((f:any)=>hash(f.irrelevant.sentences))).size,200);
  for(const f of plan.fixtures){const row=rows[f.rowIndex],ctx=validateFixture(row,f);for(const c of CONDITIONS){const task=plan.tasks.find((t:any)=>t.group==='noise'&&t.condition===c&&t.questionId===row.id);assert.deepEqual(task.input,{question:row.question,context:ctx[c]});for(let j=0;j<row.supporting_facts.title.length;j++){const title=row.supporting_facts.title[j];assert.deepEqual(ctx[c].sentences[ctx[c].title.indexOf(title)],row.context.sentences[row.context.title.indexOf(title)]);}}}
});
test('historical responses calibrate cost only; all selected scores and prompts replay offline without entering new results',async()=>{
  const calibration=json(ROOT+'/evidence/cost-calibration.json').samples;
  assert.equal(calibration.length,560);
  for(const c of calibration){const record=(c.source==='origin'?saved.origin:saved.noise)[c.line-1];assert.equal(hash(record),c.recordHash);const row=rows.find(r=>r.id===c.questionId)!;assert.deepEqual(evaluateResult(record.output,row),record.scores);}
  const c=calibration.find((c:any)=>c.strategy==='full_context'&&c.group==='benchmark'),record=saved.origin[c.line-1],row=rows.find(r=>r.id===c.questionId)!;
  assert.ok(await replay('full_context',row,record));const changed=structuredClone(record);changed.modelCalls[0].request.temperature=0;assert.equal(await replay('full_context',row,changed),false);
  assert.ok(plan.tasks.every((t:any)=>t.reuse===null));assert.deepEqual(json(ROOT+'/prepared/reusable.json'),[]);
});
test('exact 2800 new model requests, preserved configurations and zero historical coverage for the new cohort',()=>{
  assert.deepEqual(plan.manifest.count,{logicalResults:1600,reusedResults:0,reusedModelRequests:0,missingResults:1600,newModelRequests:2800});
  assert.equal(plan.tasks.filter((t:any)=>t.group==='benchmark').reduce((n:number,t:any)=>n+t.expectedModelRequests,0),2200);
  assert.equal(plan.tasks.filter((t:any)=>t.group==='noise').reduce((n:number,t:any)=>n+t.expectedModelRequests,0),600);
  assert.deepEqual(plan.manifest.settings.noise,SETTINGS);
  assert.ok(plan.manifest.costs.every((c:any)=>c.estimatedInputTokens>0&&c.estimatedOutputTokens>0&&c.reusedResults===0));
  const report=aggregate(plan.tasks,saved,join(tmpdir(),'absent-expansion-'+process.pid));assert.equal(report.complete,false);assert.equal(report.pending.length,1600);assert.equal(report.records.length,0);assert.equal(report.accounting.newUsage.cost,0);assert.equal(report.accounting.historical.cost,0);
  for(const g of report.groups){assert.equal(g.target,200);assert.equal(g.completed,0);assert.equal(g.missing,200);assert.equal(g.failed,0);assert.equal(g.scores.exactMatch,null);}
});
test('new noise comparison has 200 empty paired rows while the 20-question pilot remains independently available',()=>{
  const report=aggregate(plan.tasks,saved,join(tmpdir(),'absent-expansion-'+process.pid));
  assert.equal(report.separatePilot.completedResponses,60);assert.equal(report.separatePilot.includedInNewCohort,false);
  const original=compare(saved.noise,plan.manifest.separatePilot.questionIds,1);assert.equal(original.perQuestion.length,20);assert.ok(original.perQuestion.every(q=>q.pairedChanges.every(p=>p.completedPairs===1)));
  assert.equal(report.noiseComparison.perQuestion.length,200);assert.ok(report.noiseComparison.perQuestion.every(q=>q.pairedChanges.every(p=>p.completedPairs===0&&p.accuracyDelta===null)));
});
test('crash-safe intent blocks potentially billed transport; completed raw response replays without duplicate sending',async()=>{
  const dir=mkdtempSync(join(tmpdir(),'expansion-journal-')),j=new Journal(dir),task={id:'unit/task',questionId:'id',group:'noise'},p={model:'mock',messages:[]};let sent=0;
  const send=async()=>{sent++;return new Response(JSON.stringify({choices:[],usage:{cost:.01}}));};
  assert.equal((await j.request(task,0,p,send)).status,200);assert.equal((await j.request(task,0,p,send)).status,200);assert.equal(sent,1);
  const id=requestKey(task,1,p);durableCreate(dir+'/'+id+'.intent.json',{id});await assert.rejects(()=>j.request(task,1,p,send),/potentially billed/);assert.equal(sent,1);
  await assert.rejects(()=>j.request(task,2,p,async()=>{sent++;throw new Error('connection lost');}));await assert.rejects(()=>j.request(task,2,p,send),/potentially billed/);assert.equal(sent,2);
  assert.ok(existsSync(dir+'/'+requestKey(task,2,p)+'.error.json'));assert.equal(readdirSync(dir).filter(f=>f.endsWith('.response.json')).length,1);
});
test('partial summarization resumes first response and blocks uncertain second call through original implementation',async()=>{
  const calibration=json(ROOT+'/evidence/cost-calibration.json').samples.find((c:any)=>c.group==='benchmark'&&c.strategy==='summarization');
  const record=saved.origin[calibration.line-1],row=rows.find(r=>r.id===calibration.questionId)!;
  const task={id:'offline-calibration/summarization',strategy:'summarization',input:{question:row.question,context:row.context}};
  const journal=new Journal(mkdtempSync(join(tmpdir(),'expansion-summary-')));let sent=0;const guard=globalThis.fetch;
  const attempt=async()=>{let index=0;globalThis.fetch=async(_url,init)=>{const payload=JSON.parse(String(init?.body)),i=index++;return journal.request(task,i,payload,async()=>{sent++;if(i===1)throw new Error('lost after billing');return new Response(JSON.stringify(record.modelCalls[i].rawResponse),{headers:{'Content-Type':'application/json'}});});};try{return await strategy(task.strategy,task.input);}finally{globalThis.fetch=guard;}};
  assert.equal((await attempt()).status,'failed');assert.equal(sent,2);assert.equal((await attempt()).status,'failed');assert.equal(sent,2);
});
test('exclusive durable writes prevent competing intent; malformed or HTTP failure never causes new send',async()=>{
  const dir=mkdtempSync(join(tmpdir(),'expansion-exclusive-')),j=new Journal(dir),task={id:'exclusive'},p={x:1};let sent=0;
  durableCreate(dir+'/exclusive.json',{x:1});assert.throws(()=>durableCreate(dir+'/exclusive.json',{x:2}),/EEXIST/);
  const send=async()=>{sent++;return new Response('invalid',{status:429});};assert.equal((await j.request(task,0,p,send)).status,429);assert.equal((await j.request(task,0,p,send)).status,429);assert.equal(sent,1);
});
test('live requires both exact approval digests, default status never creates runtime or network',async()=>{
  const prior=existsSync(ROOT+'/runtime');const report=await execute(['--status']);assert.equal(report.records.length,0);assert.equal(existsSync(ROOT+'/runtime'),prior);
  await assert.rejects(()=>execute(['--live','--approved-manifest','wrong']),/approved manifest/);
  await assert.rejects(()=>execute(['--live','--approved-manifest',plan.manifest.manifestHash]),/fixtures digest/);
});

test('all fourteen adjudicated semantic failures are excluded and cannot reappear',()=>{
  const policy=validateReviewPolicy(rows,plan.fixtures);
  assert.equal(policy.replacements.length,14);
  assert.equal(policy.replacements.filter((r:any)=>r.category==='invalid').length,7);
  assert.equal(policy.replacements.filter((r:any)=>r.category==='ambiguous').length,5);
  assert.equal(policy.replacements.filter((r:any)=>r.category==='unsupported-gold').length,2);
  const baseline=json(ROOT+'/superseded/'+policy.supersededManifest+'/fixtures.json');
  for(const r of policy.replacements){
    assert.ok(!plan.manifest.benchmarkQuestionIds.includes(r.removedId));assert.ok(plan.manifest.benchmarkQuestionIds.includes(r.replacementId));
    const changed=structuredClone(plan.fixtures);changed[0]=baseline.find((f:any)=>f.questionId===r.removedId);
    assert.throws(()=>validateReviewPolicy(rows,changed),/Removed semantic failure/);
  }
});
test('replacement evidence and gold remain original; changing the requested contradiction fact fails the review gate',()=>{
  const policy=validateReviewPolicy(rows,plan.fixtures),replacement=policy.replacements[0];
  const changed=structuredClone(plan.fixtures),f=changed.find((f:any)=>f.questionId===replacement.replacementId);
  f.sentences[0]='The birth date is 1900. It is not '+f.goldAnswer+'.';
  assert.throws(()=>validateReviewPolicy(rows,changed),/Wrong requested-fact contradiction/);
  const changedGold=structuredClone(plan.fixtures);changedGold.find((f:any)=>f.questionId===replacement.replacementId).goldAnswer='invented';
  assert.throws(()=>validateReviewPolicy(rows,changedGold),/Original question\/gold edited/);
});
test('all eight scoring limitations are adjudicated without changing original exact-match/F1 behavior',()=>{
  const policy=json(ROOT+'/review-policy.json');
  assert.equal(fileHash('src/evaluation.ts'),policy.scorerSHA256);
  assert.equal(policy.scoringDecisions.filter((d:any)=>d.decision==='retain').length,6);
  assert.equal(policy.scoringDecisions.filter((d:any)=>d.decision==='replace').length,2);
  for(const d of policy.scoringDecisions){
    assert.equal(evaluateAnswer(d.sourceCorrectAlternative,d.storedGold).exactMatch,0);
    if(d.decision==='retain')assert.equal(plan.fixtures.find((f:any)=>f.questionId===d.questionId).goldAnswer,d.storedGold);
    else assert.ok(!plan.fixtures.some((f:any)=>f.questionId===d.questionId));
  }
});
