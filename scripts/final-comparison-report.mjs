/** Saved-evidence audit and offline report. Never loads .env or sends a request. */
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { performance } from 'node:perf_hooks';
// Install a deny-by-default transport before importing the existing parsing/strategy code.
globalThis.fetch = async () => { throw new Error('Network forbidden in saved-evidence audit'); };
process.env.OPENROUTER_API_KEY = 'offline-saved-evidence-only';
process.env.OPENROUTER_MODEL = 'google/gemini-3.1-flash-lite';
process.env.OPENROUTER_PROVIDER = 'google-ai-studio';
const { hash, fileHash, strategy, configure, requestKey } = await import('../experiments/expansion/core.ts');
const { evaluateResult } = await import('../src/evaluation.ts');
const { logger } = await import('../src/logger.ts');
logger.level = 'silent'; configure();
const base = 'experiments/expansion';
const read = p => JSON.parse(fs.readFileSync(p, 'utf8'));
const manifest = read(base+'/prepared/manifest.json');
const { manifestHash, ...manifestBody } = manifest;
assert.equal(hash(manifestBody),manifestHash);
const runtime = base+'/runtime/'+manifestHash;
assert.equal(read(base+'/runtime/manifest.json').manifestHash,manifestHash);
const tasks = read(base+'/prepared/tasks.json');
const fixtures = read(base+'/prepared/fixtures.json');
assert.equal(hash(tasks),manifest.tasksHash); assert.equal(hash(fixtures),manifest.fixturesHash);
for (const [p,h] of Object.entries({...manifest.implementation,...manifest.evidenceHashes,[manifest.dataset]:manifest.datasetHash})) assert.equal(fileHash(p),h,p);
const outputDir='reports/final-comparison-evidence';
const outputs=['reports/final-comparison-report.html','reports/final-comparison-report.md','reports/final-comparison-results.csv',outputDir];
for(const p of outputs) assert.ok(!fs.existsSync(p),'Refusing to overwrite existing report: '+p);
function walk(p){return fs.readdirSync(p,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(p+'/'+e.name):[p+'/'+e.name]);}
const protectedFiles=[...walk('experiments'),...walk('reports'),...walk('results'),...walk('src'),manifest.dataset];
const inventory=protectedFiles.map(p=>({path:p,bytes:fs.statSync(p).size,sha256:fileHash(p)}));
assert.ok(!fs.existsSync(base+'/runtime/execution.lock'),'Live executor lock still exists');
const reqdir=runtime+'/requests'; const resultdir=runtime+'/results';
const requestFiles=fs.readdirSync(reqdir), resultFiles=fs.readdirSync(resultdir);
const intents=requestFiles.filter(f=>f.endsWith('.intent.json')).map(f=>read(reqdir+'/'+f));
const receipts=requestFiles.filter(f=>f.endsWith('.response.json')).map(f=>read(reqdir+'/'+f));
assert.equal(requestFiles.length,5600);assert.equal(intents.length,2800);assert.equal(receipts.length,2800);assert.equal(resultFiles.length,1600);
const receiptById=new Map(receipts.map(r=>[r.id,r]));
const intentById=new Map(intents.map(r=>[r.id,r]));
assert.equal(receiptById.size,2800);assert.equal(intentById.size,2800);
assert.equal(new Set(tasks.map(t=>t.id)).size,1600);
const taskById=new Map(tasks.map(t=>[t.id,t]));
const providerIDs=new Set(), slots=new Set();
for(const i of intents){
 const t=taskById.get(i.taskId);assert.ok(t);assert.equal(i.questionId,t.questionId);assert.equal(i.group,t.group);
 assert.equal(i.id,requestKey(t,i.requestIndex,i.request));assert.equal(i.requestHash,hash(i.request));
 assert.ok(i.requestIndex>=0&&i.requestIndex<t.expectedModelRequests);
 const slot=i.taskId+'/'+i.requestIndex;assert.ok(!slots.has(slot));slots.add(slot);
 const r=receiptById.get(i.id);assert.ok(r);assert.equal(r.requestHash,i.requestHash);assert.equal(r.status,200);
 const raw=JSON.parse(r.body);r.raw=raw;
 assert.ok(raw.id&&!providerIDs.has(raw.id),'Duplicate provider generation ID');providerIDs.add(raw.id);
 assert.equal(raw.model,'google/gemini-3.1-flash-lite');assert.equal(raw.provider,'Google AI Studio');assert.ok(!raw.error);
 assert.equal(hash(r.usage),hash(raw.usage));
 for(const k of ['prompt_tokens','completion_tokens','total_tokens','cost']) assert.ok(typeof raw.usage[k]==='number'&&Number.isFinite(raw.usage[k])&&raw.usage[k]>=0);
 assert.equal(raw.usage.total_tokens,raw.usage.prompt_tokens+raw.usage.completion_tokens);
 assert.equal(i.request.model,raw.model);
 assert.equal(hash(i.request.provider),hash({only:['google-ai-studio'],allow_fallbacks:false,require_parameters:true}));
 if(t.group==='noise'){assert.equal(i.request.temperature,0);assert.equal(i.request.max_tokens,1024);}else{assert.equal(i.request.temperature,undefined);assert.equal(i.request.max_tokens,undefined);}
 r.transportMs=Date.parse(r.receivedAt)-Date.parse(i.startedAt);assert.ok(Number.isFinite(r.transportMs)&&r.transportMs>=0);
}
// Independent implementation cross-checks the unchanged repository scorer.
function independentScores(output,reference){
 const norm=s=>s.toLowerCase().replace(/[\u0021-\u002f\u003a-\u0040\u005b-\u0060\u007b-\u007e]/g,'').replace(/(?<![\p{L}\p{N}_])(?:a|an|the)(?![\p{L}\p{N}_])/gu,' ').replace(/\s+/g,' ').trim();
 const a=norm(output.answer),b=norm(reference.answer),em=Number(a===b);let f1=0;
 if(a===b||!['yes','no','noanswer'].some(s=>a===s||b===s)){
  const x=a?a.split(' '):[],y=b?b.split(' '):[];
  const counts=v=>v.reduce((m,s)=>(m.set(s,(m.get(s)||0)+1),m),new Map());const xc=counts(x),yc=counts(y);
  let common=0;for(const [s,n] of xc)common+=Math.min(n,yc.get(s)||0);
  f1=common?2*common/(x.length+y.length):0;
 }
 const pred=new Set(output.supporting_facts.map(f=>JSON.stringify([f.title,f.sentence_id])));
 const gold=new Set(reference.supporting_facts.title.map((t,j)=>JSON.stringify([t,reference.supporting_facts.sent_id[j]])));
 const overlap=[...pred].filter(k=>gold.has(k)).length,p=pred.size?overlap/pred.size:0,r=gold.size?overlap/gold.size:0;
 return {answerCorrectness:em?'Y':'N',exactMatch:em,tokenF1:f1,citationPrecision:p,citationRecall:r,citationF1:p+r?2*p*r/(p+r):0};
}
const keys=['exactMatch','tokenF1','citationPrecision','citationRecall','citationF1'];
const equalScores=(a,b)=>{assert.equal(a.answerCorrectness,b.answerCorrectness);for(const k of keys)assert.ok(Math.abs(a[k]-b[k])<1e-12,k);};
const selected=manifest.benchmarkQuestionIds;
assert.equal(selected.length,200);assert.equal(new Set(selected).size,200);assert.equal(hash(selected),hash(manifest.noiseQuestionIds));
const excluded=new Set([...manifest.selection.excludedHistoricalQuestionIds,...manifest.separatePilot.questionIds]);assert.ok(selected.every(q=>!excluded.has(q)));
const semantic=read(base+'/prepared/semantic-review-decisions.json');assert.equal(semantic.status,'PASS');assert.equal(semantic.manifestHash,manifestHash);assert.equal(semantic.fixturesHash,manifest.fixturesHash);
const labels={full_context:'Full Context',rag_tool:'RAG',summarization:'Summarization',hybrid:'Hybrid',caching:'Prompt Caching',clean:'Clean',irrelevant:'Irrelevant',conflicting:'Conflicting'};
const conditionKeys=['benchmark/full_context','benchmark/rag_tool','benchmark/summarization','benchmark/hybrid','benchmark/caching','noise/clean','noise/irrelevant','noise/conflicting'];
const rows=[],referenced=new Set();let reconstructed=0;
const started=performance.now();
for(const task of tasks){
 assert.equal(task.reuse,null);
 const resultPath=resultdir+'/'+hash(task.id)+'.json', record=read(resultPath);
 assert.equal(record.taskId,task.id);assert.equal(record.taskHash,hash(task));assert.equal(record.manifestHash,manifestHash);assert.equal(record.source,'live');
 assert.equal(record.status,'completed');assert.equal(record.error,null);
 assert.equal(record.provenance.datasetHash,manifest.datasetHash);assert.equal(record.provenance.inputHash,hash(task.input));assert.equal(record.provenance.implementationHash,hash(manifest.implementation));
 assert.equal(record.requestIds.length,task.expectedModelRequests);assert.equal(record.modelCalls.length,task.expectedModelRequests);
 const calls=record.requestIds.map((id,index)=>{
  assert.ok(!referenced.has(id));referenced.add(id);
  const i=intentById.get(id),r=receiptById.get(id);assert.equal(i.taskId,task.id);assert.equal(i.requestIndex,index);
  const c=record.modelCalls[index];const wire=structuredClone(c.request);
  if(task.group==='noise')Object.assign(wire,{temperature:0,max_tokens:1024});
  assert.equal(hash(wire),i.requestHash);assert.equal(hash(c.rawResponse),hash(r.raw));assert.equal(hash(c.usage),hash(r.usage));assert.equal(c.error,null);
  assert.ok(typeof c.latencyMs==='number'&&c.latencyMs>=0);return {intent:i,receipt:r,call:c};
 });
 const finalRaw=calls.at(-1).receipt.raw;
 assert.equal(hash(JSON.parse(finalRaw.choices[0].message.content)),hash(record.output));
 const scores=evaluateResult(record.output,task.reference);equalScores(scores,record.scores);equalScores(scores,independentScores(record.output,task.reference));
 const usage=Object.fromEntries(['prompt_tokens','completion_tokens','total_tokens','cost'].map(k=>[k,calls.reduce((s,c)=>s+c.receipt.raw.usage[k],0)]));
 for(const k of Object.keys(usage))assert.ok(Math.abs(usage[k]-record.usage[k])<1e-9,'usage mismatch '+k);
 // Reconstruct the original adaptive prompts, tools, summaries and output using only saved bodies.
 let cursor=0,mismatch=null;
 globalThis.fetch=async(url,init)=>{
  try{
   assert.equal(String(url),'https://openrouter.ai/api/v1/chat/completions');
   const payload=JSON.parse(String(init?.body));if(task.group==='noise')Object.assign(payload,{temperature:0,max_tokens:1024});
   const saved=calls[cursor++];assert.ok(saved);assert.equal(hash(payload),saved.intent.requestHash);
   return new Response(saved.receipt.body,{status:200,headers:{'Content-Type':'application/json'}});
  }catch(e){mismatch=e;throw e;}
 };
 const reconstructedResult=await strategy(task.strategy,task.input);
 if(mismatch)throw mismatch;
 assert.equal(cursor,calls.length);assert.equal(reconstructedResult.status,'completed');assert.equal(hash(reconstructedResult.output),hash(record.output));
 assert.equal(hash(reconstructedResult.summary),hash(record.summary));assert.equal(hash(reconstructedResult.selectedTitles),hash(record.selectedTitles));
 reconstructed++;
 globalThis.fetch=async()=>{throw new Error('Network forbidden');};
 const cached=calls.map(c=>c.receipt.raw.usage.prompt_tokens_details?.cached_tokens);
 const writes=calls.map(c=>c.receipt.raw.usage.prompt_tokens_details?.cache_write_tokens);
 const allKnown=v=>v.every(n=>typeof n==='number'&&Number.isFinite(n)&&n>=0);
 if(allKnown(cached))calls.forEach((c,j)=>assert.ok(cached[j]<=c.receipt.raw.usage.prompt_tokens));
 assert.ok(Number.isFinite(record.latencyMs)&&record.latencyMs>=0);
 const variant=task.condition??task.strategy;
 rows.push({cohort:'new_200_v3',group:task.group,variant,label:labels[variant],questionIndex:task.selectionIndex,questionId:task.questionId,question:task.input.question,goldAnswer:task.reference.answer,answer:record.output.answer,...scores,requests:calls.length,inputTokens:usage.prompt_tokens,outputTokens:usage.completion_tokens,totalTokens:usage.total_tokens,costUSD:usage.cost,latencyMs:record.latencyMs,transportMs:calls.reduce((s,c)=>s+c.receipt.transportMs,0),cachedTokens:allKnown(cached)?cached.reduce((a,b)=>a+b,0):null,cacheWriteTokens:allKnown(writes)?writes.reduce((a,b)=>a+b,0):null,cacheKnownRequests:cached.filter(n=>typeof n==='number').length,cacheHitRequests:cached.filter(n=>typeof n==='number'&&n>0).length,resultPath,requestIds:record.requestIds,firstRequestAt:calls[0].intent.startedAt,lastResponseAt:calls.at(-1).receipt.receivedAt});
 if(reconstructed%200===0)console.log('Locally reconstructed and verified',reconstructed,'/1600');
}
assert.equal(referenced.size,2800);assert.equal(slots.size,2800);
assert.equal(hash(resultFiles.sort()),hash(tasks.map(t=>hash(t.id)+'.json').sort()));
const mean=a=>a.reduce((s,n)=>s+n,0)/a.length;
const quantile=(a,p)=>{const v=[...a].sort((x,y)=>x-y);const i=(v.length-1)*p,j=Math.floor(i);return v[j]+(v[Math.ceil(i)]-v[j])*(i-j);};
const groups=conditionKeys.map(key=>{
 const rr=rows.filter(r=>r.group+'/'+r.variant===key);assert.equal(rr.length,200);assert.equal(hash(rr.map(r=>r.questionId)),hash(selected));
 const sum=k=>rr.every(r=>r[k]!==null)?rr.reduce((s,r)=>s+r[k],0):null;
 const requestCount=sum('requests');return {key,label:rr[0].label,group:rr[0].group,n:200,requests:requestCount,correct:sum('exactMatch'),...Object.fromEntries(keys.map(k=>[k,mean(rr.map(r=>r[k]))])),latencyMs:mean(rr.map(r=>r.latencyMs)),latencyMedianMs:quantile(rr.map(r=>r.latencyMs),.5),latencyP95Ms:quantile(rr.map(r=>r.latencyMs),.95),transportMs:mean(rr.map(r=>r.transportMs)),inputTokens:sum('inputTokens'),outputTokens:sum('outputTokens'),totalTokens:sum('totalTokens'),costUSD:sum('costUSD'),cachedTokens:sum('cachedTokens'),cacheWriteTokens:sum('cacheWriteTokens'),cacheKnownRequests:sum('cacheKnownRequests'),cacheHitRequests:sum('cacheHitRequests'),cacheHitRate:sum('cacheKnownRequests')?sum('cacheHitRequests')/sum('cacheKnownRequests'):null,cacheReadFraction:sum('cachedTokens')===null?null:sum('cachedTokens')/sum('inputTokens')};
});
// Paired exploratory comparisons; deterministic paired bootstrap, no scorer changes.
let randomState=0x83b0271;
const random=()=>{randomState^=randomState<<13;randomState^=randomState>>>17;randomState^=randomState<<5;return (randomState>>>0)/4294967296;};
function bootstrapCI(diffs){const means=[];for(let b=0;b<5000;b++){let s=0;for(let j=0;j<200;j++)s+=diffs[Math.floor(random()*200)];means.push(s/200);}return [quantile(means,.025),quantile(means,.975)];}
function mcnemar(w,l){const n=w+l;if(!n)return 1;let term=2**(-n),tail=term;for(let j=1;j<=Math.min(w,l);j++){term*= (n-j+1)/j;tail+=term;}return Math.min(1,2*tail);}
const pairs=[];
for(const family of ['benchmark','noise']){
 const keysFor=conditionKeys.filter(k=>k.startsWith(family+'/'));
 for(let a=0;a<keysFor.length;a++)for(let b=a+1;b<keysFor.length;b++){
  const left=rows.filter(r=>r.group+'/'+r.variant===keysFor[a]),right=rows.filter(r=>r.group+'/'+r.variant===keysFor[b]);
  const differences=k=>left.map((r,j)=>right[j][k]-r[k]);
  const wins=left.filter((r,j)=>right[j].exactMatch>r.exactMatch).length,losses=left.filter((r,j)=>right[j].exactMatch<r.exactMatch).length;
  pairs.push({family,left:keysFor[a],right:keysFor[b],n:200,wins,losses,ties:200-wins-losses,accuracyDelta:mean(differences('exactMatch')),accuracyCI95:bootstrapCI(differences('exactMatch')),answerF1Delta:mean(differences('tokenF1')),answerF1CI95:bootstrapCI(differences('tokenF1')),citationF1Delta:mean(differences('citationF1')),latencyMsDelta:mean(differences('latencyMs')),inputTokensDelta:mean(differences('inputTokens')),outputTokensDelta:mean(differences('outputTokens')),costUSDDelta:mean(differences('costUSD')),mcnemarExactP:mcnemar(wins,losses)});
 }
}
const total=k=>rows.reduce((s,r)=>s+r[k],0);
const originalPilot='experiments/context-noise/results/'+manifest.source.noiseRunId+'/runs.jsonl';
const pilotSnapshot=base+'/evidence/noise-pilot-runs.jsonl';
assert.equal(fileHash(originalPilot),fileHash(pilotSnapshot));
const verification={status:'PASS',manifestHash,fixturesHash:manifest.fixturesHash,tasksHash:manifest.tasksHash,datasetSHA256:manifest.datasetHash,verifiedAt:new Date().toISOString(),responseCount:2800,uniqueProviderGenerationIDs:providerIDs.size,completedEvaluations:1600,conditions:8,questionsPerCondition:200,sameOrderedQuestionIDs:true,failedResults:0,missingResults:0,duplicateRequestSlots:0,duplicateProviderGenerationIDs:0,unknownBilling:0,missingUsageMeasurements:0,historicalResultsReused:0,networkRequestsMade:0,locallyReconstructedEvaluations:reconstructed,scoreRecomputations:1600,independentScoreCrossChecks:1600,immutableInputFiles:inventory.length,pilotResponses:60,pilotByteIdentical:true,originalStrategiesAndScorerHashVerified:true,method:'Verified manifest, source/evidence/dataset hashes; request-key and task/call correspondence; raw response identity and final parsed output; exact local reconstruction of every adaptive request using saved bodies only; original and independent scores; raw usage and accounting; existing inputs hashed before/after.',billingScope:'Zero unresolved request intents and complete provider-reported costs. Offline receipts cannot independently reconcile an external billing statement.',latencyScope:'Original saved strategy latency includes client, retrieval, summary and answer time; may include checkpoint replay. Durable intent/receipt deltas shown separately; these contain transport/body time, not server-only time.',auditSeconds:performance.now()-started};
const firstAt=rows.map(r=>r.firstRequestAt).sort()[0],lastAt=rows.map(r=>r.lastResponseAt).sort().at(-1);
const summary={cohort:'new_200_v3',manifestHash,fixturesHash:manifest.fixturesHash,questionIds:selected,firstRequestAt:firstAt,lastResponseAt:lastAt,totals:{evaluations:1600,requests:2800,inputTokens:total('inputTokens'),outputTokens:total('outputTokens'),totalTokens:total('totalTokens'),costUSD:total('costUSD')},groups,pairs,verification};
console.log(JSON.stringify({verification,totals:summary.totals,groups},null,2));
// Rendering and immutable outputs are below.
const combined=read(runtime+'/combined.json');
assert.equal(combined.manifestHash,manifestHash);assert.equal(combined.complete,true);assert.equal(combined.records.length,1600);assert.equal(combined.pending.length,0);assert.equal(combined.errors.length,0);
assert.equal(combined.accounting.unknownBilling.length,0);assert.equal(combined.accounting.newHTTPResponses,2800);
for(const k of ['prompt_tokens','completion_tokens','total_tokens','cost'])assert.ok(Math.abs(combined.accounting.newUsage[k]-receipts.reduce((s,r)=>s+r.usage[k],0))<1e-8);
for(const g of groups){const saved=combined.groups.find(s=>s.group===g.key);assert.ok(saved);assert.equal(saved.completed,200);assert.equal(saved.failed,0);assert.equal(saved.missing,0);for(const k of keys)assert.ok(Math.abs(saved.scores[k]-g[k])<1e-12);}
for(const r of combined.records){const row=rows.find(x=>x.group+'/'+x.variant+'/'+x.questionId===r.taskId);assert.ok(row);equalScores(row,r.scores);assert.equal(row.answer,r.output.answer);}
verification.savedCombinedAggregateVerified=true;
const sumKnown=receipts.reduce((s,r)=>s+(r.usage.prompt_tokens_details?.cached_tokens??0),0);
const bench=groups.filter(g=>g.group==='benchmark'),noise=groups.filter(g=>g.group==='noise');
const ranked=[...bench].sort((a,b)=>b.exactMatch-a.exactMatch),cheapest=[...bench].sort((a,b)=>a.costUSD-b.costUSD),fastest=[...bench].sort((a,b)=>a.latencyMs-b.latencyMs);
const pct=v=>(100*v).toFixed(2)+'%';const num=v=>Number(v).toLocaleString('en-US',{maximumFractionDigits:2});const dollars=v=>'$'+v.toFixed(6);const seconds=v=>(v/1000).toFixed(3);
const delta=v=>(v>=0?'+':'')+(100*v).toFixed(2)+' pp';
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const format=v=>v===null?'Not reported':typeof v==='number'?num(v):String(v);
function table(headers,body,html=false){
 if(html)return '<div class="table-wrap"><table><thead><tr>'+headers.map(h=>'<th>'+escape(h)+'</th>').join('')+'</tr></thead><tbody>'+body.map(r=>'<tr>'+r.map(c=>'<td>'+escape(c)+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>';
 return '| '+headers.join(' | ')+' |\n|'+headers.map(()=>'---').join('|')+'|\n'+body.map(r=>'| '+r.map(c=>String(c).replace(/\|/g,'\\|').replace(/\n/g,' ')).join(' | ')+' |').join('\n');
}
const qualityHeaders=['Condition','N','Correct','Accuracy / EM','Answer F1','Citation precision','Citation recall','Citation F1'];
const qualityRows=groups.map(g=>[g.label,g.n,g.correct,pct(g.exactMatch),pct(g.tokenF1),pct(g.citationPrecision),pct(g.citationRecall),pct(g.citationF1)]);
const resourceHeaders=['Condition','API calls','Mean latency (s)','Median (s)','P95 (s)','Input tokens','Output tokens','Total tokens','Reported cost USD'];
const resourceRows=groups.map(g=>[g.label,g.requests,seconds(g.latencyMs),seconds(g.latencyMedianMs),seconds(g.latencyP95Ms),num(g.inputTokens),num(g.outputTokens),num(g.totalTokens),dollars(g.costUSD)]);
const cacheHeaders=['Condition','Cache-read coverage','Requests with reads','Request hit rate','Read tokens','Read-token fraction','Write tokens'];
const cacheRows=groups.map(g=>[g.label,g.cacheKnownRequests+'/'+g.requests,g.cacheHitRequests,g.cacheHitRate===null?'Not reported':pct(g.cacheHitRate),format(g.cachedTokens),g.cacheReadFraction===null?'Not reported':pct(g.cacheReadFraction),format(g.cacheWriteTokens)]);
const pairHeaders=['Left → right (right − left)','N','Wins / losses / ties','Δ accuracy','95% paired CI (pp)','Δ answer F1','Δ citation F1','Δ mean latency (s)','Δ mean cost USD','Exact McNemar p'];
const shortLabel=key=>labels[key.split('/')[1]];
const pairRows=pairs.map(p=>[shortLabel(p.left)+' → '+shortLabel(p.right),p.n,p.wins+' / '+p.losses+' / '+p.ties,delta(p.accuracyDelta),p.accuracyCI95.map(v=>(100*v).toFixed(2)).join(' to '),delta(p.answerF1Delta),delta(p.citationF1Delta),seconds(p.latencyMsDelta),dollars(p.costUSDDelta),p.mcnemarExactP.toPrecision(4)]);
const strategyRows=[
 ['Full Context','One structured answer call over all ten supplied distractor passages.'],
 ['RAG','Two tool-search/planning calls and one structured answer call using retrieved passages. Search is local to each question’s supplied context.'],
 ['Summarization','One question-independent source-summary call, then one answer call. Original source and sentence identifiers are retained.'],
 ['Hybrid','Two tool-search calls, one summary call over retrieved passages, then one answer call.'],
 ['Prompt Caching','Same full-context source blocks and question as Full Context, with an explicit ephemeral cache breakpoint on the source block; one call per question.'],
 ['Clean','Full Context with complete gold-supporting passages only.'],
 ['Irrelevant','Clean context plus one distinct, reviewed unrelated original passage.'],
 ['Conflicting','Clean context plus a reviewed synthetic passage that asserts an alternative for the exact requested fact and explicitly excludes the gold answer.']
];
const sourceRows=[
 ['Approved cohort, model settings and code hashes',base+'/prepared/manifest.json'],
 ['Exact inputs, references, order and expected call counts',base+'/prepared/tasks.json'],
 ['All 200 question IDs',base+'/prepared/selected-question-ids.txt'],
 ['Noise fixtures and complete semantic review',base+'/prepared/noise-review.md'],
 ['Frozen semantic review decisions',base+'/prepared/semantic-review-decisions.json'],
 ['Documented strict scoring limitations',base+'/prepared/scoring-limitations.md'],
 ['Raw request intents and durable HTTP response bodies',reqdir+'/'],
 ['Immutable evaluation outputs, intermediate calls and scores',resultdir+'/'],
 ['Original executor’s combined aggregation',runtime+'/combined.json'],
 ['Historical benchmark evidence (excluded)',base+'/evidence/'+manifest.source.originResults],
 ['Earlier historical CSV experiments (excluded)','results/'],
 ['Original 20-question / 60-response pilot (excluded)',originalPilot],
 ['Frozen copy of original pilot',pilotSnapshot],
 ['Prior superseded preparations (excluded)',base+'/superseded/'],
 ['Existing historical research report (excluded)','reports/context-engineering-complete-research-report.html'],
 ['Reproducible saved-evidence auditor','scripts/final-comparison-report.mjs']
];
const findings=[
 `The highest observed five-strategy accuracy is ${pct(ranked[0].exactMatch)} (${ranked[0].correct}/200), achieved by ${ranked.filter(g=>g.exactMatch===ranked[0].exactMatch).map(g=>g.label).join(' and ')}. This describes this cohort and one observation per condition.`,
 `${cheapest[0].label} has the lowest reported strategy cost (${dollars(cheapest[0].costUSD)} for 200 questions); ${fastest[0].label} has the lowest saved mean strategy latency (${seconds(fastest[0].latencyMs)} seconds).`,
 `Clean accuracy is ${pct(noise[0].exactMatch)}; Irrelevant is ${pct(noise[1].exactMatch)} (${delta(noise[1].exactMatch-noise[0].exactMatch)} versus Clean); Conflicting is ${pct(noise[2].exactMatch)} (${delta(noise[2].exactMatch-noise[0].exactMatch)} versus Clean). These comparisons use the same questions and the same noise-run settings.`,
 `Provider receipts report ${num(sumKnown)} cached input tokens across all 2,800 calls. Requested cache metadata alone is not evidence of a cache hit; the table uses reported cached_tokens.`,
 `Actual provider-reported cost is ${dollars(summary.totals.costUSD)}, versus the pre-run heuristic estimate of ${dollars(manifest.estimates.usd)}. All multi-stage requests are included in the measured totals.`
];
const methodology=[
 `This study evaluates answer quality, evidence citation, latency, token use and reported cost for five unchanged context-engineering implementations, and separately tests robustness to irrelevant and conflicting additions. The eight cells are two related experiments, not a five-strategy-by-three-noise factorial design.`,
 `The final revision-3 cohort contains 200 new, purposively selected HotpotQA distractor-validation questions in ascending dataset-row order. Every cell uses exactly these 200 question IDs in the same manifest order. Historical benchmark IDs and the original 20 pilot IDs are excluded. Seven invalid, five ambiguous and two unsupported-gold items were replaced before execution; the final source-grounded semantic review passed.`,
 `Dataset: ${manifest.dataset}; ${num(manifest.datasetRows)} rows. Dataset SHA-256: ${manifest.datasetHash}. The five-strategy benchmark uses each question’s original distractor context; noise cells use complete supporting passages, with the specified addition. Gold/reference labels are not supplied as separate answer metadata; the source text and synthetic contradiction can naturally contain the answer string.`,
 `Model: google/gemini-3.1-flash-lite, Google AI Studio through OpenRouter, provider restricted to google-ai-studio, fallbacks disabled and require_parameters enabled. Benchmark temperature and output limit were omitted to preserve the original implementation defaults. Noise temperature is 0 and max_tokens is 1,024. All request configurations were checked from saved payloads. No model calls were made to produce this report.`,
 `Execution interval from durable request logs: ${firstAt} to ${lastAt} (UTC). One final evaluation per question per cell, no repeated sampling. The successful call pattern is 1 / 3 / 2 / 4 / 1 for Full Context / RAG / Summarization / Hybrid / Prompt Caching, plus one call per noise cell: 2,800 calls and 1,600 final evaluations.`,
 `Accuracy is the unchanged HotpotQA normalized exact match (EM). Answer F1 is normalized token overlap with yes/no/noanswer category handling. Citation precision/recall/F1 compare unique exact passage-title / original zero-based sentence-ID pairs with the original reference labels. All F1 and precision/recall summaries are per-question macro means. Citation F1 is averaged directly rather than computed from aggregate precision/recall.`,
 `Every final output was parsed directly from its durable final raw response, checked against the saved output and rescored with the original scorer and an independent implementation. All adaptive intermediate requests, tool retrieval results, summaries and final answers were reconstructed locally against their exact saved request hashes using a mock transport. This is saved-response reconstruction; it neither reruns a model nor contacts an endpoint.`,
 `Token and cost totals come from all durable HTTP receipts, including intermediate search and summary calls. Cost is the reported usage.cost in USD, not a recomputation from list prices or a reconciled account invoice. Zero unresolved intents and complete cost fields establish zero unknown billing in the local ledger. The audit cannot inspect external billing systems.`,
 `Latency reports the original saved strategy latencyMs. For multi-stage strategies it includes local retrieval and all model stages; single-stage values cover their original call duration. Client timing may include checkpoint replay, so it is not server-only or randomized latency evidence. A separate intent-to-receipt transport-sum metric is included in the CSV. P95 uses linear interpolation.`,
 `Paired comparisons match question IDs within the five-strategy experiment and within the three noise conditions. Deltas are right minus left. Wins/losses refer to EM improvement/degradation, ties to unchanged EM. Accuracy and answer-F1 paired percentile bootstrap intervals use 5,000 deterministic resamples (xorshift32 seed 0x083b0271). Exact two-sided McNemar p-values use discordant pairs. Intervals and p-values are exploratory and unadjusted for 13 comparisons; no confirmatory significance claim is made.`
];
const limitations=[
 'The manually curated 200-question cohort is not a random or representative HotpotQA sample. Conclusions apply to this cohort, frozen evidence, model, provider and implementations.',
 'One response per question and condition provides no estimate of repeated-run model variance. Sequential execution and provider load/cache state can confound latency and cache comparisons.',
 'Noise uses gold-selected complete supporting passages, fixed appended noise, one unrelated donor and one synthetic contradiction per question. Synthetic text explicitly negates the gold answer; this does not establish robustness to natural misinformation, adversarial sources, passage reordering or arbitrary context lengths.',
 'Clean versus noisy cells are controlled within their own configuration. Comparing them directly with the five-strategy benchmark confounds context selection and generation settings.',
 'Exact match and token F1 can penalize correct paraphrases, extra qualifiers and alternative date/name forms. Six supported scoring-limit cases remain unchanged and are documented. No semantic adjudication or gold-answer change was applied after observing results.',
 'Citation metrics measure agreement with labeled support pairs, not independent factual truth, entailment or every potentially valid alternate supporting sentence. Summaries can omit or distort evidence.',
 'Cache-breakpoint requests do not prove cache acceptance. Full Context may also receive automatic caching. Read-hit rates use provider-reported positive cached_tokens per API request; unknown fields would remain missing. This workload does not isolate cold/warm cache reuse or guaranteed savings.',
 'Offline integrity checks verify internal consistency and immutable receipts; they do not independently authenticate the provider’s measurements or reconcile credit-card charges, taxes, fees or outside requests.',
 'Saved source-relative “current” facts are evaluated against the frozen dataset snapshot rather than present-day world knowledge. No external factual verification was performed during reporting.',
 'Bootstrap intervals condition on the selected cohort, and multiple comparisons are unadjusted. Observed ranks and p-values do not establish general superiority or causation.'
];
const conclusion=`The saved evidence supports a complete, internally consistent comparison of all eight 200-question cells: 2,800 successful API receipts and 1,600 completed evaluations, with no missing results, duplicate request slots or unresolved billing in the local ledger. ${ranked[0].label} reaches ${pct(ranked[0].exactMatch)} observed accuracy; cost, citation quality and latency should be assessed alongside accuracy using the tables and paired differences. The noise experiment quantifies sensitivity to the two curated additions under its own fixed settings. Historical results and the original pilot remain separate and unchanged. These results support cohort-specific findings, with the sampling, scoring, caching and timing limits described above.`;
function svgChart(title,series,maxOverride,unit){
 const width=1050,left=175,right=100,top=80,row=60,height=top+groups.length*row+60;
 const max=maxOverride??Math.max(...groups.flatMap(g=>series.map(s=>s.value(g))))*1.12;
 const titleId='chart-'+hash(title).slice(0,10);
 const usable=width-left-right;const colors=['#146b68','#df8b39','#6686b8'];
 let out=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="${titleId}"><title id="${titleId}">${escape(title)}</title><rect width="100%" height="100%" fill="#ffffff"/><text x="24" y="28" font-family="sans-serif" font-size="20" font-weight="700" fill="#17333d">${escape(title)}</text>`;
 series.forEach((s,i)=>out+=`<rect x="${left+i*205}" y="43" width="12" height="12" fill="${colors[i]}"/><text x="${left+18+i*205}" y="54" font-family="sans-serif" font-size="12" fill="#334e58">${escape(s.name)}</text>`);
 for(let tick=0;tick<=4;tick++){const value=max*tick/4,x=left+usable*tick/4;out+=`<line x1="${x}" y1="${top-8}" x2="${x}" y2="${height-48}" stroke="#e4ecee"/><text x="${x}" y="${height-24}" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#51656e">${value.toFixed(unit==='$'?2:1)}${unit}</text>`;}
 groups.forEach((g,j)=>{const y=top+j*row;out+=`<text x="${left-12}" y="${y+17}" text-anchor="end" font-family="sans-serif" font-size="13" fill="#17333d">${escape(g.label)}</text>`;series.forEach((s,i)=>{const v=s.value(g),h=series.length===1?26:14,yy=y+i*17;out+=`<rect x="${left}" y="${yy}" width="${Math.max(0,v/max*usable)}" height="${h}" rx="3" fill="${colors[i]}"/><text x="${left+v/max*usable+6}" y="${yy+h-2}" font-family="sans-serif" font-size="11" fill="#334e58">${v.toFixed(unit==='$'?4:1)}${unit}</text>`;});});
 return out+'</svg>';
}
const charts={quality:svgChart('Answer quality · percent',[{name:'Accuracy / exact match',value:g=>100*g.exactMatch},{name:'Answer F1',value:g=>100*g.tokenF1}],100,'%'),latency:svgChart('Mean saved strategy latency · seconds',[{name:'Original strategy duration',value:g=>g.latencyMs/1000}],null,'s'),cost:svgChart('Provider-reported cost · 200 questions per cell',[{name:'All model stages included',value:g=>g.costUSD}],null,'$')};
const inventoryRows=sourceRows.map(([what,p])=>[what,p]);
const md=[
 '# Context engineering: final 200-question comparison','',
 '**Verification: PASS.** 2,800 durable API responses; 1,600 completed evaluations; eight cells × the same ordered 200 new question IDs. Zero failed/missing evaluations, duplicate request slots, duplicate provider generation IDs or unresolved billing intents. No API calls were made for this audit.','',
 '## Research objectives and methodology','',...methodology.flatMap(t=>[t,'']),
 '## Strategies and noise conditions','',table(['Cell','Implementation / context'],strategyRows),'',
 '## Key findings','',...findings.flatMap(t=>['- '+t,'']),
 '## Accuracy, answer F1 and citation metrics','',table(qualityHeaders,qualityRows),'','![Answer quality](final-comparison-evidence/quality.svg)','',
 '## Latency, token usage and reported cost','',table(resourceHeaders,resourceRows),'',`Total: **${num(summary.totals.inputTokens)} input tokens + ${num(summary.totals.outputTokens)} output tokens = ${num(summary.totals.totalTokens)} total tokens; ${dollars(summary.totals.costUSD)} reported USD.**`,'',
 '![Latency](final-comparison-evidence/latency.svg)','','![Cost](final-comparison-evidence/cost.svg)','',
 '## Observed prompt-cache reads','',table(cacheHeaders,cacheRows),'','Hit rate = API requests with positive reported cached_tokens / requests with a known cached_tokens field. Read-token fraction = cached input tokens / total input tokens. These are observed provider fields, not proof of causal cache savings.','',
 '## Paired comparisons','',table(pairHeaders,pairRows),'','Deltas are right minus left; 200 matched questions per comparison. Bootstrap CIs and McNemar p-values are exploratory and unadjusted. Full answer-F1 CIs and token deltas are in the paired-comparisons exports.','',
 '## Research limitations','',...limitations.flatMap(t=>['- '+t,'']),
 '## Conclusion','',conclusion,'',
 '## Evidence organization and raw result references','',
 'Raw results remain at their original immutable paths. This report adds a logical index and a SHA-256 inventory rather than moving, renaming or rewriting evidence. Historical runs, the original pilot and superseded preparations are excluded from all new-cohort metrics. The prepared missing.json and combined-existing.json describe the pre-execution plan and are retained as historical preparation evidence; runtime/combined.json describes the completed execution.','',
 table(['Evidence','Repository-relative location'],inventoryRows),'',
 'Derived audit files: final-comparison-evidence/verification.json, summary.json, condition-summary.csv, paired-comparisons.{json,csv}, source-inventory.json and result-index.json. The main final-comparison-results.csv has 1,600 evaluation rows, exact answers/scores, resource measurements and raw artifact pointers.','',
 `Manifest SHA-256: \`${manifestHash}\`. Fixtures SHA-256: \`${manifest.fixturesHash}\`. Original scorer SHA-256: \`${manifest.implementation['src/evaluation.ts']}\`.`,''
].join('\n');
const sections=[['Research objectives & methodology',methodology.map(t=>'<p>'+escape(t)+'</p>').join('')],['Eight experimental cells',table(['Cell','Implementation / context'],strategyRows,true)],['Key findings','<ol class="findings">'+findings.map(t=>'<li>'+escape(t)+'</li>').join('')+'</ol>'],['Answer & citation quality',table(qualityHeaders,qualityRows,true)+charts.quality],['Resources & measured cost',table(resourceHeaders,resourceRows,true)+`<p class="note">${num(summary.totals.inputTokens)} input + ${num(summary.totals.outputTokens)} output = ${num(summary.totals.totalTokens)} total tokens. Total provider-reported cost: <strong>${dollars(summary.totals.costUSD)} USD</strong>.</p>`+charts.latency+charts.cost],['Observed cache reads',table(cacheHeaders,cacheRows,true)+'<p>Hit rate is the fraction of measured API calls with positive cached_tokens. The read-token fraction divides cached input tokens by all input tokens. Explicit cache metadata does not guarantee acceptance; automatic caching can affect other cells.</p>'],['Paired comparisons',table(pairHeaders,pairRows,true)+'<p class="note">Right minus left, matched by question ID. All pairs have N = 200. Intervals use deterministic paired bootstrap; exact McNemar p-values are unadjusted for 13 comparisons. They are exploratory, not confirmatory evidence. Full interval and token details are in the exported paired comparisons.</p>'],['Research limitations','<ul>'+limitations.map(t=>'<li>'+escape(t)+'</li>').join('')+'</ul>'],['Conclusion','<p>'+escape(conclusion)+'</p>'],['Evidence directory & preservation','<p>Raw evidence stays in its original location. The audit adds a logical index and an integrity inventory. Historical experiments and the 20-question pilot are excluded from every new-cohort comparison. Prepared missing.json and combined-existing.json remain snapshots of the pre-execution plan; runtime/combined.json is the completed run.</p><div class="table-wrap"><table><thead><tr><th>Evidence</th><th>Repository-relative location</th></tr></thead><tbody>'+sourceRows.map(([label,p])=>`<tr><td>${escape(label)}</td><td><a href="../${escape(p)}">${escape(p)}</a></td></tr>`).join('')+'</tbody></table></div><p>Each of the 1,600 CSV rows links its result and request artifacts. The evidence directory contains summary tables, paired exports, an integrity inventory and the verification record.</p>'+`<p class="digest">Manifest: ${manifestHash}<br>Fixtures: ${manifest.fixturesHash}<br>Original scorer: ${manifest.implementation['src/evaluation.ts']}</p>`]];
const html=`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="color-scheme" content="light"><title>Context Engineering · Final 200-question comparison</title><style>
:root{--ink:#17333d;--muted:#536873;--teal:#146b68;--paper:#f4f7f6;--line:#dbe5e5}*{box-sizing:border-box}body{margin:0;background:var(--paper);color:var(--ink);font:16px/1.65 system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}header{background:#132f3a;color:white;padding:58px max(24px,calc((100vw - 1240px)/2));border-bottom:7px solid #df8b39}.eyebrow{text-transform:uppercase;letter-spacing:.16em;color:#8ee0cb;font-size:12px;font-weight:700}h1{font-size:clamp(32px,5vw,56px);line-height:1.1;max-width:950px;margin:18px 0}header p{max-width:890px;color:#d8e8eb}.badge{display:inline-block;background:#d6f3e5;color:#15533d;border-radius:30px;padding:5px 13px;font-size:12px;font-weight:800}.meta{font-size:12px;color:#c5d8df;overflow-wrap:anywhere}.wrap{max-width:1288px;margin:auto;padding:30px 24px 60px}.cards{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:32px}.card,section{background:white;border:1px solid var(--line);border-radius:12px}.card{padding:20px}.card strong{display:block;font-size:30px;color:var(--teal)}.card span{font-size:13px;color:var(--muted)}nav{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:25px}nav a{background:#e7efed;border-radius:5px;padding:5px 10px;font-size:12px}a{color:#146b68;text-underline-offset:3px}section{padding:28px;margin-bottom:22px;scroll-margin-top:20px}h2{font-size:24px;line-height:1.3;margin:0 0 20px}p{margin:0 0 16px}li{margin-bottom:14px}.findings li::marker{color:var(--teal);font-weight:800}.table-wrap{width:100%;overflow:auto;margin:12px 0 24px}table{border-collapse:collapse;width:100%;font-size:12px;font-variant-numeric:tabular-nums}th{text-align:left;background:#e9f0ef;font-weight:750;border-bottom:2px solid #b8ceca;white-space:nowrap}th,td{padding:11px 12px;vertical-align:top}td{border-bottom:1px solid #e4eceb}tbody tr:nth-child(even){background:#f8faf9}td:first-child{font-weight:650}td a{overflow-wrap:anywhere}svg{display:block;width:100%;height:auto;margin:22px 0;border:1px solid #e7edeb;border-radius:8px}.note{background:#eef6f3;border-left:3px solid var(--teal);padding:14px 18px;font-size:13px}.digest{font:11px/1.8 monospace;overflow-wrap:anywhere;color:var(--muted)}footer{text-align:center;color:var(--muted);font-size:12px}.downloads{display:flex;gap:20px;flex-wrap:wrap;margin:24px 0}@media(max-width:700px){.cards{grid-template-columns:repeat(2,1fr)}section{padding:19px}.wrap{padding:20px 12px}header{padding:35px 24px}td,th{padding:9px}}@media print{header{background:white;color:#17333d;padding:20px}header p,.meta{color:#17333d}.wrap{padding:0}nav,.downloads{display:none}section{break-inside:auto;border:none}.table-wrap{overflow:visible}table{font-size:9px}svg{max-height:450px}.cards{grid-template-columns:repeat(4,1fr)}a{color:inherit}}
</style></head><body><header><div class="eyebrow">Context Engineering Research · New cohort · Revision 3</div><h1>How context changes quality, cost and robustness</h1><p>Five strategy implementations. Three controlled noise conditions. The same 200 new HotpotQA questions in every cell, with all saved outputs independently checked.</p><span class="badge">VERIFICATION PASS · SAVED EVIDENCE ONLY</span><p class="meta">Executed ${escape(firstAt)} → ${escape(lastAt)} · Google Gemini 3.1 Flash Lite / Google AI Studio<br>Historical experiments and the original 20-question pilot are preserved separately.</p></header><main class="wrap"><div class="cards"><div class="card"><strong>2,800</strong><span>Successful API response receipts</span></div><div class="card"><strong>1,600</strong><span>Completed, rescored evaluations</span></div><div class="card"><strong>200 × 8</strong><span>Identical ordered question IDs</span></div><div class="card"><strong>${dollars(summary.totals.costUSD)}</strong><span>Total provider-reported USD</span></div></div><p class="note"><strong>Audit result:</strong> zero failed or missing evaluations, duplicate request slots, duplicate provider generation IDs, unresolved billing intents or missing token/cost fields. Every original raw receipt and historical artifact was preserved. External billing statements were not accessed.</p><div class="downloads"><a href="final-comparison-report.md">Markdown report</a><a href="final-comparison-results.csv">1,600-row results CSV</a><a href="final-comparison-evidence/summary.json">Machine-readable summary</a><a href="final-comparison-evidence/verification.json">Verification record</a></div><nav aria-label="Report contents">${sections.map(([title],i)=>`<a href="#section-${i}">${escape(title)}</a>`).join('')}</nav>${sections.map(([title,body],i)=>`<section id="section-${i}"><h2>${escape(title)}</h2>${body}</section>`).join('')}</main><footer>Self-contained report · Inline charts and styles · No external assets, scripts or network required · ${escape(verification.verifiedAt)}</footer></body></html>`;
function csv(objects,columns=Object.keys(objects[0])){const cell=v=>'"'+String(v===null||v===undefined?'':typeof v==='object'?JSON.stringify(v):v).replace(/"/g,'""')+'"';return [columns.map(cell).join(','),...objects.map(o=>columns.map(k=>cell(o[k])).join(','))].join('\r\n')+'\r\n';}
// Complete the before/after preservation proof before writing any new output.
for(const f of inventory)assert.equal(fileHash(f.path),f.sha256,'Existing evidence modified: '+f.path);
verification.preservationBeforeAfter='PASS';
fs.mkdirSync(outputDir);
const write=(p,s)=>fs.writeFileSync(p,s,{flag:'wx'});
const writeJSON=(p,v)=>write(p,JSON.stringify(v,null,2)+'\n');
write('reports/final-comparison-report.md',md);write('reports/final-comparison-report.html',html);
const exportRows=rows.map(r=>({...r,requestIntentPaths:r.requestIds.map(id=>reqdir+'/'+id+'.intent.json'),rawResponsePaths:r.requestIds.map(id=>reqdir+'/'+id+'.response.json')}));
write('reports/final-comparison-results.csv',csv(exportRows));
writeJSON(outputDir+'/verification.json',verification);writeJSON(outputDir+'/summary.json',summary);
writeJSON(outputDir+'/paired-comparisons.json',pairs);write(outputDir+'/paired-comparisons.csv',csv(pairs));
write(outputDir+'/condition-summary.csv',csv(groups));
writeJSON(outputDir+'/result-index.json',exportRows.map(r=>({taskId:r.group+'/'+r.variant+'/'+r.questionId,questionId:r.questionId,result:r.resultPath,requestIntents:r.requestIntentPaths,rawResponses:r.rawResponsePaths})));
writeJSON(outputDir+'/source-inventory.json',{manifestHash,createdAt:verification.verifiedAt,existingFilesUnchanged:true,files:inventory});
for(const [name,svg] of Object.entries(charts))write(outputDir+'/'+name+'.svg',svg);
const index='# Completed experiment evidence index\n\nAll original artifacts remain in place. No historical record was overwritten or moved. Paths below are repository relative; source-inventory.json records the SHA-256 and byte size of each pre-existing experiment, source and report file. result-index.json maps every evaluation to its request intents and raw response bodies.\n\n'+table(['Evidence','Repository-relative location'],sourceRows)+'\n\nGenerated exports are scoped exclusively to the approved revision-3 new-200 cohort. Prepared planning artifacts retain their pre-execution counts.\n\nReproduce in a fresh checkout/copy with output paths absent: `node scripts/final-comparison-report.mjs`. The generator refuses to overwrite reports and uses only saved evidence.\n';
write(outputDir+'/README.md',index);
const generated=['scripts/final-comparison-report.mjs',...outputs.filter(p=>p!==outputDir),...walk(outputDir)];
writeJSON(outputDir+'/report-inventory.json',{files:generated.map(p=>({path:p,bytes:fs.statSync(p).size,sha256:fileHash(p)})),note:'This inventory excludes its own self-referential digest.'});
console.log('Wrote final reports and evidence index. Existing files preserved:',inventory.length);
