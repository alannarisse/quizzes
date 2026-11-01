import test from 'node:test';
import assert from 'node:assert/strict';
import { commitAnswer, locked, wrongCount, pending, nextPending, MAX_WRONG } from './exam.mjs';
import { TOTAL, REQUIRED } from './engine.mjs';
const single={id:1,answers:['right','wrong'],correct_answers:['right']};
const multi={id:2,answers:['a','b','c'],correct_answers:['a','b']};
function attempt(){return {questions:[single,multi],answers:{},flags:{},index:0};}
test('committed answers cannot be changed; invalid and partial selections do not lock',()=>{
 const state=attempt();
 assert.equal(commitAnswer(state,multi,['a']),false);
 assert.equal(locked(state,multi),false);
 assert.equal(commitAnswer(state,multi,['a','a']),false);
 assert.equal(commitAnswer(state,multi,['a','missing']),false);
 assert.equal(commitAnswer(state,multi,['b','a']),true);
 assert.equal(commitAnswer(state,multi,['a','c']),false);
 assert.deepEqual(state.answers[2],['b','a']);
});
test('only complete wrong answers count toward the ten-error cutoff',()=>{
 const state=attempt();state.answers[2]=['a'];
 assert.equal(wrongCount(state),0);
 commitAnswer(state,single,['wrong']);
 assert.equal(wrongCount(state),1);
 commitAnswer(state,multi,['a','c']);
 assert.equal(wrongCount(state),2);
 assert.equal(MAX_WRONG,TOTAL-REQUIRED+1);
});
test('skips remain pending and are removed when committed',()=>{
 const state=attempt();state.flags[1]=true;
 assert.deepEqual(pending(state).map(({i})=>i),[0,1]);
 assert.equal(nextPending(state),1);
 state.flags[2]=true;
 assert.equal(nextPending(state),null);
 commitAnswer(state,single,['right']);
 assert.equal(state.flags[1],undefined);
 assert.deepEqual(pending(state).map(({i})=>i),[1]);
});
