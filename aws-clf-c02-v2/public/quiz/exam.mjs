import { isCorrect } from './engine.mjs';
export const MAX_WRONG = 10;
export function locked(state, q) { return (state.answers[q.id] || []).length === q.correct_answers.length; }
export function wrongCount(state) { return state.questions.filter(q => locked(state, q) && !isCorrect(q, state.answers[q.id])).length; }
export function pending(state) { return state.questions.map((q,i) => ({q,i})).filter(({q}) => !locked(state,q)); }
export function commitAnswer(state, q, choices) {
  if (locked(state,q) || choices.length !== q.correct_answers.length || new Set(choices).size !== choices.length || !choices.every(a => q.answers.includes(a))) return false;
  state.answers[q.id] = [...choices];
  delete state.flags[q.id];
  return true;
}
export function nextPending(state) {
  const remaining = pending(state);
  return remaining.find(({i}) => i > state.index && !state.flags[state.questions[i].id])?.i ?? null;
}
