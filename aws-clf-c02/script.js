import {TOTAL, REQUIRED, DOMAINS, selectQuestions, isCorrect, score, passed} from './engine.mjs';
const app = document.querySelector('#app');
const KEY = 'aws-clf-c02-v1';
let bank, state;
let answerReviewOpen = false;
const closedReviews = new Set();
const escape = text => String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function save() {
  try { localStorage.setItem(KEY,JSON.stringify(state)); }
  catch { document.querySelector('#storage-note').textContent = 'Progress cannot be saved in this browser. You can still complete this attempt.'; }
}
function restore() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY));
    if (!saved || !['exam','study'].includes(saved.mode) || !Number.isInteger(saved.index) || saved.index < 0 || saved.index >= TOTAL || typeof saved.finished !== 'boolean') return null;
    if (!Array.isArray(saved.questions) || saved.questions.length !== TOTAL || new Set(saved.questions.map(q=>q.id)).size !== TOTAL || !saved.answers || !saved.checked || !saved.flags) return null;
    saved.questions = saved.questions.map(q => {
      const original = bank.find(item => item.id === q.id);
      if (!original || q.answers.length !== original.answers.length || new Set(q.answers).size !== original.answers.length || !q.answers.every(a=>original.answers.includes(a))) throw Error('Invalid saved questions');
      const choices = saved.answers[q.id] || [];
      if (!Array.isArray(choices) || new Set(choices).size !== choices.length || !choices.every(a=>original.answers.includes(a)) || choices.length > original.correct_answers.length) throw Error('Invalid saved answers');
      return {...original,answers:q.answers};
    });
    return saved;
  } catch { return null; }
}
function focusHeading() { app.querySelector('h2')?.focus(); }
function start(mode) {
  answerReviewOpen = false;
  state = {mode,questions:selectQuestions(bank),index:0,answers:{},checked:{},flags:{},finished:false};
  save(); render(); focusHeading();
}
function home() {
  app.innerHTML = `<section class="intro"><h2 tabindex="-1">Your next practice session</h2><p><strong>65 questions</strong> drawn from a bank of ${bank.length}. Pass with <strong>${REQUIRED}/65 correct</strong> (at least 85%).</p><p>Single-choice and multiple-response questions. Select every correct option for multiple-response questions; no partial credit.</p><div class="mode-grid"><section><h3>Mock exam</h3><p>Answer at your own pace. Review an answered question from the jump grid to see its answer and explanation, or submit for a full review.</p><button id="exam">Start mock exam</button></section><section><h3>Study mode</h3><p>Check each answer as you go. Explanations and images appear after checking.</p><button id="study">Start study quiz</button></section></div><p>All four exam domains are included. No timer or early cutoff; finish all 65 questions.</p></section>`;
  document.querySelector('#exam').onclick = ()=>start('exam');
  document.querySelector('#study').onclick = ()=>start('study');
}
function feedback(q, closable = false) {
  const correct = isCorrect(q,state.answers[q.id]);
  return `<section class="feedback ${correct?'correct':'wrong'}">${closable?'<button type="button" class="review-close" aria-label="Close feedback and collapse question navigation">×</button>':''}<h3>${correct?'Correct':'Incorrect'}</h3><p><strong>Correct answer${q.correct_answers.length>1?'s':''}:</strong> ${q.correct_answers.map(escape).join('; ')}</p><h4>Why this answer is right</h4><p>${escape(q.explanation)}</p><h4>Why the other options are wrong</h4><dl class="option-explanations">${q.answers.filter(a => !q.correct_answers.includes(a)).map(a => `<dt>${escape(a)}</dt><dd>${escape(q.incorrect_explanations[a])}</dd>`).join('')}</dl><img class="answer-image" src="images/${escape(q.image_filename)}" alt="${escape(q.image_alt)}"><p><a href="${escape(q.web_link)}" target="_blank" rel="noopener">Review this domain in the AWS exam guide ↗</a></p></section>`;
}
function questionGrid(open = false) {
  return `<details id="question-navigation" ${open?'open':''}><summary>Jump to a question (★ flagged, ✓ correct, × incorrect, • answered)</summary><div class="question-grid">${state.questions.map((q,i)=>{
    const graded = state.finished || Boolean(state.answers[q.id]?.length);
    const status = graded ? (isCorrect(q,state.answers[q.id])?'correct':'incorrect') : state.answers[q.id]?.length?'answered':'unanswered';
    const symbol = {correct:'✓',incorrect:'×',answered:'•',unanswered:''}[status];
    return `<button data-jump="${i}" class="question-${status}" aria-label="Question ${i+1}, ${status}${state.flags[q.id]?', flagged':''}${status==='incorrect'?', show correct answer':''}" ${!state.finished && i===state.index?'aria-current="step"':''}>${i+1} ${symbol}${state.flags[q.id]?' ★':''}</button>`;
  }).join('')}</div></details>`;
}
function inlineAnswerReview(q, open) {
  if (!open) return '';
  const answered = Boolean(state.answers[q.id]?.length);
  return `<details id="answer-review" class="inline-answer-review" open><summary>Question ${state.index+1}: ${answered?'Correct answer and explanation':'Answer review'}</summary>${answered?`<p><strong>Your answer:</strong> ${state.answers[q.id].map(escape).join('; ')}</p>${feedback(q, true)}`:'<p>Choose an answer to see whether it is correct, then use this section to review the explanation.</p>'}</details>`;
}
function goToQuestion(index) {
  if(!state.finished) return move(index, true);
  const review=document.querySelectorAll('.review')[index];
  review.open=true;review.scrollIntoView({block:'start',behavior:'smooth'});review.querySelector('summary').focus();
}
function bindQuestionGrid() {
  document.querySelectorAll('[data-jump]').forEach(button=>button.onclick=()=>goToQuestion(Number(button.dataset.jump)));
}
function render() {
  if (state.finished) return results();
  const navigationOpen=document.querySelector('#question-navigation')?.open || false;
  const q=state.questions[state.index], chosen=state.answers[q.id]||[];
  const checked=state.mode==='study' && state.checked[q.id];
  const answered=state.questions.filter(q=>(state.answers[q.id]||[]).length).length;
  app.innerHTML = `<aside class="study-access"><a href="https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html" target="_blank" rel="noopener">Study guide ↗ <span>(opens in a new tab)</span></a><p>Your progress is saved automatically on this browser. Come back anytime to continue, or choose New quiz to start over.</p></aside><p class="meta">${state.mode==='exam'?'Mock exam':'Study mode'} · ${answered}/${TOTAL} answered</p><progress max="65" value="${answered}" aria-label="Questions answered">${answered}/65</progress><p class="meta">Question ${state.index+1} of ${TOTAL} · ${escape(DOMAINS[q.domain])}</p>${inlineAnswerReview(q, answerReviewOpen || (checked && !closedReviews.has(q.id)))}<h2 id="current-question" tabindex="-1">${escape(q.question)}</h2><form id="question-form"><fieldset ${checked?'disabled':''}><legend>${q.correct_answers.length>1?`Select ${q.correct_answers.length} answers`:'Select one answer'}</legend>${q.answers.map((a,i)=>`<label class="answer"><input type="${q.correct_answers.length>1?'checkbox':'radio'}" name="answer" value="${i}" ${chosen.includes(a)?'checked':''}> <span>${escape(a)}</span></label>`).join('')}</fieldset>${state.mode==='study'?`<button id="check" ${checked||!chosen.length?'disabled':''}>Check answer</button>`:''}</form><label class="flag"><input id="flag" type="checkbox" ${state.flags[q.id]?'checked':''}> Flag for review</label><nav class="nav"><button id="prev" ${state.index===0?'disabled':''}>← Previous</button><button id="next" ${state.index===TOTAL-1?'disabled':''}>Next →</button></nav>${questionGrid(navigationOpen)}<div class="actions"><button id="finish">Finish &amp; review</button><button class="secondary" id="restart">New quiz</button></div>`;
  document.querySelectorAll('[name=answer]').forEach(input=>input.onchange=()=>{
    let selections=[...document.querySelectorAll('[name=answer]:checked')];
    if(selections.length>q.correct_answers.length){input.checked=false;return;}
    state.answers[q.id]=selections.map(el=>q.answers[Number(el.value)]);save();
    // Keep focus on the selected input after updating counts and controls.
    const value=input.value;render();document.querySelector(`[name=answer][value="${value}"]`).focus();
  });
  document.querySelector('#question-form').onsubmit=e=>{e.preventDefault();if(chosen.length){state.checked[q.id]=true;closedReviews.delete(q.id);save();render();document.querySelector('#answer-review').scrollIntoView({block:'start', behavior:'smooth'});}};
  document.querySelector('#flag').onchange=e=>{state.flags[q.id]=e.target.checked;save();render();document.querySelector('#flag').focus();};
  document.querySelector('#prev').onclick=()=>move(state.index-1);
  document.querySelector('#next').onclick=()=>move(state.index+1);
  bindQuestionGrid();
  document.querySelector('.review-close')?.addEventListener('click',()=>{
    answerReviewOpen=false;closedReviews.add(q.id);
    document.querySelector('#answer-review').open=false;
    document.querySelector('#question-navigation').open=false;
    document.querySelector('#current-question').focus({preventScroll:true});
  });
  document.querySelector('#finish').onclick=()=>{
    const missing=TOTAL-answered;
    if(confirm(`Submit this attempt? ${missing} unanswered question${missing===1?'':'s'} will count as incorrect.`)){state.finished=true;save();results();focusHeading();}
  };
  document.querySelector('#restart').onclick=newQuiz;
}
function move(index, review = false){state.index=index;answerReviewOpen=review;save();render();if(review){const section=document.querySelector('#answer-review');section.scrollIntoView({block:'start',behavior:'smooth'});section.querySelector('summary').focus({preventScroll:true});}else focusHeading();}
function newQuiz(){if(state.finished||confirm('Start a new quiz and replace this saved attempt?')){state=null;try{localStorage.removeItem(KEY);}catch{}home();focusHeading();}}
function results(){
 const correct=score(state.questions,state.answers);
 app.innerHTML=`<section class="result ${passed(correct)?'correct':'wrong'}"><h2 tabindex="-1">${passed(correct)?'You passed!':'Keep practicing'}</h2><p class="result-score">${correct}/${TOTAL} · ${(correct/TOTAL*100).toFixed(1)}%</p><p>Practice target: at least 85% (${REQUIRED} correct). ${TOTAL-correct} incorrect or unanswered.</p></section><h3>By domain</h3><ul>${[1,2,3,4].map(d=>{const qs=state.questions.filter(q=>q.domain===d);return `<li>${escape(DOMAINS[d])}: ${score(qs,state.answers)}/${qs.length}</li>`;}).join('')}</ul><button id="restart">Start a new quiz</button>${questionGrid()}<h3>Review all answers</h3><p>Expand a question to see your answer, explanation, and image.</p>${state.questions.map((q,i)=>`<details class="review"><summary>${i+1}. ${isCorrect(q,state.answers[q.id])?'Correct':'Incorrect'}${state.flags[q.id]?' · ★ Flagged':''} — ${escape(q.question)}</summary><p><strong>Your answer:</strong> ${(state.answers[q.id]||[]).map(escape).join('; ')||'Unanswered'}</p>${feedback(q)}</details>`).join('')}`;
 document.querySelector('#restart').onclick=newQuiz;
 bindQuestionGrid();
}
try {
 const response=await fetch('./questions.json');if(!response.ok)throw Error('Question bank unavailable');bank=await response.json();
 selectQuestions(bank);state=restore();if(state)render();else home();
} catch(error){app.innerHTML='<h2>Unable to load the quiz</h2><p>Serve this folder through a local web server and reload. Check that questions.json is available.</p>';console.error(error);}
