const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const source=fs.readFileSync(__dirname+'/script.js','utf8');
function quiz(saved){
 const elements=new Map();const storage=new Map(saved?[['dmvQuizState',saved]]:[]);
 const document={getElementById(id){if(!elements.has(id))elements.set(id,{style:{},classList:{add(){},remove(){}},focus(){}});return elements.get(id);},querySelectorAll(){return [];}};
 const context=vm.createContext({document,localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},console,Math});
 vm.runInContext(source,context);return {run:code=>vm.runInContext(code,context),elements,storage};
}
test('all live questions have a selectable correct answer and valid image',()=>{
 const app=quiz();const bank=JSON.parse(app.run('JSON.stringify(questions)'));
 assert.equal(new Set(bank.map(q=>q.id)).size,bank.length);
 assert.deepEqual(bank,JSON.parse(fs.readFileSync(__dirname+'/oregon_permit_practice.json')));
 for(const q of bank){assert.ok(q.answers.includes(q.correct_choice),`Question ${q.id}`);if(q.image_filename)assert.ok(fs.existsSync(__dirname+'/images/'+q.image_filename));}
});
test('repeated and stale clicks cannot change the recorded answer or score',()=>{
 const app=quiz();app.run('checkAnswer(selectedQuestions[0].id,selectedQuestions[0].correct_choice)');
 app.run('checkAnswer(selectedQuestions[0].id,selectedQuestions[0].answers.find(a=>a!==selectedQuestions[0].correct_choice))');
 assert.equal(app.run('score'),1);assert.equal(app.run('wrong'),0);
 app.run('currentQuestion=1;checkAnswer(selectedQuestions[0].id,selectedQuestions[0].correct_choice)');assert.equal(app.run('Object.keys(answersGiven).length'),1);
});
test('saved choices and answer order restore; malformed or old snapshots reset safely',()=>{
 const app=quiz();app.run('checkAnswer(selectedQuestions[0].id,selectedQuestions[0].correct_choice)');
 const saved=app.storage.get('dmvQuizState');const restored=quiz(saved);
 assert.equal(restored.run('score'),1);assert.equal(restored.run('JSON.stringify(selectedQuestions.map(q=>q.answers))'),app.run('JSON.stringify(selectedQuestions.map(q=>q.answers))'));
 for(const bad of ['{invalid',JSON.stringify({selectedQuestions:[]})]){const reset=quiz(bad);assert.equal(reset.run('score'),0);assert.match(reset.elements.get('score').textContent,/reset/);}
});
