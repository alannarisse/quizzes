import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {selectQuestions,score,passed,isCorrect} from './engine.mjs';
const bank=JSON.parse(readFileSync(new URL('./questions.json',import.meta.url)));
test('bank has unique questions, valid answers, explanations, and local images',()=>{
 assert.ok(bank.length>65);assert.equal(new Set(bank.map(q=>q.id)).size,bank.length);assert.equal(new Set(bank.map(q=>q.question)).size,bank.length);
 for(const q of bank){assert.ok(q.explanation);assert.ok(q.correct_answers.every(a=>q.answers.includes(a)));assert.equal(new Set(q.answers).size,q.answers.length);assert.ok(existsSync(new URL(`./images/${q.image_filename}`,import.meta.url)));}
});
test('draws 65 unique questions across all domains without mutating bank',()=>{
 const original=JSON.stringify(bank);const draws=[];
 for(let i=0;i<30;i++){const draw=selectQuestions(bank);assert.equal(draw.length,65);assert.equal(new Set(draw.map(q=>q.id)).size,65);assert.deepEqual([1,2,3,4].map(d=>draw.filter(q=>q.domain===d).length),[16,19,22,8]);draws.push(draw.map(q=>q.id).sort((a,b)=>a-b).join(','));}
 assert.ok(new Set(draws).size>1);assert.equal(JSON.stringify(bank),original);
});
test('85 percent boundary is 56 of 65, with all-or-nothing multiple responses',()=>{
 const qs=selectQuestions(bank);const answers={};qs.slice(0,55).forEach(q=>answers[q.id]=q.correct_answers);assert.equal(score(qs,answers),55);assert.equal(passed(55),false);answers[qs[55].id]=qs[55].correct_answers;assert.equal(score(qs,answers),56);assert.equal(passed(56),true);
 const multi=bank.find(q=>q.correct_answers.length>1);assert.equal(isCorrect(multi,[multi.correct_answers[0]]),false);assert.equal(isCorrect(multi,[...multi.correct_answers].reverse()),true);assert.equal(isCorrect(multi,[...multi.correct_answers,multi.answers[2]]),false);
});

test('every distractor has its own explanation and correct choices are excluded',()=>{
 for(const q of bank){
  const wrong=q.answers.filter(a=>!q.correct_answers.includes(a));
  assert.deepEqual(Object.keys(q.incorrect_explanations).sort(),[...wrong].sort());
  for(const a of wrong) assert.ok(typeof q.incorrect_explanations[a]==='string' && q.incorrect_explanations[a].length>40,`Missing explanation: ${q.id}: ${a}`);
 }
});
