import { readFileSync } from 'node:fs';
import { prepareData } from '../../src/loadData.ts';
import { normalizeAnswer } from '../../src/evaluation.ts';
import { variants, type Fixture } from '../context-noise/pilot.ts';
import { ROOT, check, hash, json, fileHash } from './core.ts';
import type { TrainData, Context } from '../../src/schema.ts';

export const words = (s: string) => s.trim().split(/\s+/).length;
const stop = new Set('about after again against also among around became become before being between both could during each first former from have having into known large later many more most much named only other over part same several since some such than that their them then there these they this those through time under until used very were what when where which while with would years'.split(' '));
export const terms = (s: string) => new Set(normalizeAnswer(s).split(' ').filter(w => w.length >= 5 && !stop.has(w)));
export function cleanContext(row: TrainData): Context {
  prepareData([row]);
  check(new Set(row.context.title).size === row.context.title.length, 'Duplicate context title');
  const idx = row.context.title.flatMap((t, i) => row.supporting_facts.title.includes(t) ? [i] : []);
  return { title: idx.map(i => row.context.title[i]), sentences: idx.map(i => [...row.context.sentences[i]]) };
}
export function newFixtures(rows: TrainData[]) {
  const choices = readFileSync(ROOT + '/contradictions.tsv', 'utf8').trim().split('\n').map(l => l.split('\t'));
  check(choices.length === 200 && new Set(choices.map(c => c[0])).size === 200, 'Need 200 curated relations');
  const frozen = json(ROOT + '/evidence/reviewed-noise-donors-v3.json').donors;
  const used = new Set<string>(Object.values(frozen).map((d:any)=>d.title));
  return choices.map(([index, falseValue, relation], i) => {
    const rowIndex = Number(index), row = rows[rowIndex], clean = cleanContext(row);
    const j = row.supporting_facts.title.findIndex((t, j) => row.context.sentences[row.context.title.indexOf(t)][row.supporting_facts.sent_id[j]].includes(row.answer));
    check(j >= 0, 'Curated answer span not in supporting sentence');
    const evidenceTitle = row.supporting_facts.title[j], sentenceId = row.supporting_facts.sent_id[j];
    const sourceSentence = row.context.sentences[row.context.title.indexOf(evidenceTitle)][sentenceId];
    const claim = `The ${relation} is ${falseValue}. It is not ${row.answer.replace(/[.,]$/, '')}.`;
    const padding = 'This reference entry describes the particular subject and historical detail identified in the preceding statement. The description concerns that subject alone, rather than a similarly named person, place, organization, or work. The wording refers to the same event, period, and relationship throughout the account. Other details about the subject are outside the scope of this short entry.';
    // Full donor passages, never summaries or gold labels. Deterministic first eligible donor.
    const forbidden = terms(row.question + ' ' + clean.title.join(' ') + ' ' + clean.sentences.flat().join(' '));
    let donor: any = null;
    const reviewed = frozen[row.id];
    for (let d = 5000; !reviewed && d < rows.length && !donor; d++) for (let p = 0; p < rows[d].context.title.length && !donor; p++) {
      const title = rows[d].context.title[p], sentences = rows[d].context.sentences[p];
      const text = title + ' ' + sentences.join(' '), normalized = normalizeAnswer(text);
      if (used.has(title) || words(sentences.join(' ')) < 70 || words(sentences.join(' ')) > 100 || normalized.includes(normalizeAnswer(row.answer))) continue;
      if ([...terms(text)].some(t => forbidden.has(t)) || clean.title.some(t => normalized.includes(normalizeAnswer(t)))) continue;
      donor = { rowIndex: d, questionId: rows[d].id, passageIndex: p, title, sentences: [...sentences] };
    }
    if(reviewed) donor = reviewed.donor;
    check(donor, `No unrelated donor for ${row.id}`); used.add(donor.title);
    check(hash(rows[donor.rowIndex].context.sentences[donor.passageIndex])===hash(donor.sentences) && rows[donor.rowIndex].context.title[donor.passageIndex]===donor.title, 'Donor provenance mismatch');
    return { questionId: row.id, rowIndex, question: row.question, goldAnswer: row.answer,
      evidenceTitle, sentenceId, sourceSentence, trueValue: row.answer, falseValue, relation,
      title: `Expansion reference ${String(i + 1).padStart(3, '0')}`, sentences: [claim, padding],
      rationale: `Contradicts the answer-bearing relation: ${relation}. The false assertion explicitly excludes the gold value in the same scope. The source sentence and complete supporting passages are retained for review.`,
      review: { status: 'agent-reviewed', method: 'Manually curated question-specific relation and alternative; explicit exclusion reviewed against labeled evidence. This is a synthetic conflicting account, not a factual source.' },
      irrelevant: { title: donor.title, sentences: donor.sentences,
        review: { status: 'agent-reviewed', rationale: `Independent source passage about ${donor.title}; no shared content terms with the question or supporting passages, and no answer or evidence-subject match. Review alongside the paired question is in noise-review.md.` },
        donor },
    };
  });
}
export function validateFixture(row: TrainData, f: Fixture) {
  const contexts = variants(row, f);
  check(words(f.sentences.join(' ')) >= 60 && words(f.sentences.join(' ')) <= 100, 'Conflicting passage length');
  check(normalizeAnswer(f.falseValue) !== normalizeAnswer(row.answer), 'Replacement is equivalent');
  check(!row.supporting_facts.title.some((t, i) => !contexts.clean.sentences[contexts.clean.title.indexOf(t)]?.[row.supporting_facts.sent_id[i]]), 'Lost support');
  return contexts;
}

/** Regression gate for the manually adjudicated semantic review. This verifies
 * approved facts and unchanged source labels; lexical equality is not a semantic proof.
 */
export function validateReviewPolicy(rows: TrainData[], fixtures: any[]) {
  const policy=json(ROOT+'/review-policy.json');
  const baseline=json(ROOT+'/superseded/'+policy.supersededManifest+'/fixtures.json');
  check(hash(baseline)===policy.baselineFixturesHash,'Semantic review baseline changed');
  check(fileHash('src/evaluation.ts')===policy.scorerSHA256,'Original scorer changed');
  const removed=new Set(policy.replacements.map((r:any)=>r.removedId));
  check(fixtures.length===200&&new Set(fixtures.map(f=>f.questionId)).size===200,'Semantic review needs 200 unique fixtures');
  check(fixtures.every(f=>!removed.has(f.questionId)),'Removed semantic failure reappeared');
  let retained=0;
  const stableFields=(f:any)=>Object.fromEntries(['questionId','rowIndex','question','goldAnswer','evidenceTitle','sentenceId','sourceSentence','trueValue','falseValue','relation','sentences','irrelevant'].map(k=>[k,f[k]]));
  for(const f of fixtures){
    const row=rows[f.rowIndex];
    check(row.id===f.questionId&&row.question===f.question&&row.answer===f.goldAnswer,'Original question/gold edited');
    const old=baseline.find((b:any)=>b.questionId===f.questionId);
    if(old){check(hash(stableFields(f))===hash(stableFields(old)),'Retained semantic fixture changed');retained++;}
  }
  check(retained===186,'Unexpected retained cohort size');
  for(const r of policy.replacements){
    const f=fixtures.find(f=>f.questionId===r.replacementId);check(f,'Replacement missing');const row=rows[f.rowIndex];
    check(f.rowIndex===r.replacementRow&&f.goldAnswer===r.replacementGold&&f.question===r.replacementQuestion,'Reviewed replacement labels changed');
    check(hash({question:row.question,answer:row.answer,context:row.context,supporting_facts:row.supporting_facts})===r.questionHash,'Replacement evidence changed');
    check(hash(row.supporting_facts)===hash(r.expectedSupportingFacts),'Replacement supporting labels changed');
    check(f.sentences[0]===r.expectedClaim&&f.relation===r.relation&&f.falseValue===r.falseValue,'Wrong requested-fact contradiction');
  }
  for(const d of policy.scoringDecisions){
    const f=fixtures.find(f=>f.questionId===d.questionId);
    check(d.decision==='retain'?f?.goldAnswer===d.storedGold:!f,'Scoring limitation disposition violated');
  }
  return policy;
}
