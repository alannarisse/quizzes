const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
for(const [folder,key,count] of [['capm-practice','capmQuizState',60],['parapro-practice','paraQuizState',60]]){
 function app(saved){const elements=new Map(),storage=new Map([['dmvQuizState','preserve me'],...(saved?[[key,saved]]:[])]);const context=vm.createContext({document:{getElementById(id){if(!elements.has(id))elements.set(id,{style:{},focus(){}});return elements.get(id);},querySelectorAll(){return [];}},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},console});vm.runInContext(fs.readFileSync(__dirname+'/practice-quiz.js','utf8'),context);vm.runInContext(fs.readFileSync(__dirname+'/'+folder+'/script.js','utf8'),context);return {elements,storage};}
 test(folder+': filters placeholders/repeats, restores valid state, and isolates restart',()=>{
 const first=app();const saved=JSON.parse(first.storage.get(key));assert.equal(Object.keys(saved.orders).length,count);assert.equal(first.elements.get('nextBtn').disabled,true);first.elements.get('restart').onclick();assert.equal(first.storage.get('dmvQuizState'),'preserve me');const second=app(JSON.stringify(saved));assert.deepEqual(JSON.parse(second.storage.get(key)),saved);
 });
 test(folder+': malformed and legacy saves recover without crashing',()=>{for(const bad of ['{broken','{"currentQuestion":999,"score":100}']){const instance=app(bad);assert.match(instance.elements.get('score').textContent,/reset/);assert.equal(JSON.parse(instance.storage.get(key)).index,0);}});
}

for(const [folder,expected] of [['capm-practice',{'Fundamentals':22,'Predictive':10,'Agile':12,'Business Analysis':16}],['parapro-practice',{'Reading':20,'Mathematics':20,'Writing':20}]]){
 test(folder+': expanded bank has unique IDs, distinct questions, complete explanations and balanced topics',()=>{
  const bank=JSON.parse(fs.readFileSync(__dirname+'/'+folder+'/questions.json','utf8'));
  let live;vm.runInNewContext(fs.readFileSync(__dirname+'/'+folder+'/script.js','utf8'),{initializePracticeQuiz:config=>live=config.questions});
  assert.deepEqual(JSON.parse(JSON.stringify(live)),bank);
  assert.equal(new Set(bank.map(q=>q.id)).size,60);assert.equal(new Set(bank.map(q=>q.question)).size,60);
  const actual={};for(const q of bank){actual[q.domain]=(actual[q.domain]||0)+1;assert.equal(q.answers.length,4);assert.equal(new Set(q.answers).size,4);assert.ok(q.answers.includes(q.correct_choice));assert.ok(q.explanation.length>30);assert.doesNotMatch(q.question+' '+q.explanation,/placeholder|exam-style question|sample .*question/i);}
  assert.deepEqual(actual,expected);
 });
}
