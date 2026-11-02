import {MAX_WRONG, locked, wrongCount, pending, commitAnswer, nextPending} from './exam.mjs';
import {TOTAL, REQUIRED, DOMAINS, selectQuestions, isCorrect, score, passed} from './engine.mjs';
const app = document.querySelector('#app');
const KEY = 'aws-clf-c02-v2';
let bank, state;
const SOUNDS = {
  correct: './sounds/correct.wav',
  incorrect: './sounds/incorrect.wav',
  passed: './sounds/passed-test.m4a'
};
const SOUND_KEY = 'aws-clf-c02-sound';
let soundEnabled = false;
try { soundEnabled = localStorage.getItem(SOUND_KEY) === 'on'; } catch {}
let activeAudio;
function audioStatus(message) {
  let status = document.querySelector('#audio-status');
  if (!status) {
    status = document.createElement('p');
    status.id = 'audio-status';
    status.setAttribute('role', 'status');
    app.after(status);
  }
  status.textContent = message;
}
function audioError(error, name) {
  // Replacing a sound or muting can intentionally interrupt pending playback.
  if (error.name === 'AbortError') return;
  console.error('Quiz audio playback failed', { sound: name, url: SOUNDS[name], error });
  audioStatus(error.name === 'NotAllowedError'
    ? 'Sound was blocked by your browser. Allow sound for this site, then turn sound off and on to try again.'
    : 'The sound could not be played. Turn sound off and on to retry. Details are available in the browser console.');
}
function play(name) {
  if (!soundEnabled) return;
  try {
    activeAudio?.pause();
    activeAudio = new Audio(SOUNDS[name]);
    activeAudio.play().then(() => audioStatus('')).catch(error => audioError(error, name));
  } catch (error) { audioError(error, name); }
}
function setSound(enabled) {
  soundEnabled = enabled;
  if (!enabled) activeAudio?.pause();
  try { localStorage.setItem(SOUND_KEY, enabled ? 'on' : 'off'); } catch {}
  document.querySelectorAll('[data-sound-toggle]').forEach(button => {
    button.innerHTML = soundIcon();
    button.setAttribute('aria-pressed', String(enabled));
    button.setAttribute('aria-label', enabled ? 'Mute sound' : 'Enable sound');
    button.title = enabled ? 'Mute sound' : 'Enable sound';
  });
  audioStatus('');
  // Called directly by the checkbox/button interaction, before any async work.
  if (enabled) play('correct');
}
function soundIcon() {
  return `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4z"/>${soundEnabled ? '<path d="M15 8a6 6 0 0 1 0 8M18 5a10 10 0 0 1 0 14"/>' : '<path d="m16 9 5 6m0-6-5 6M2 2l20 20"/>'}</svg>`;
}
function soundButton() {
  return `<button type="button" class="sound-toggle" data-sound-toggle aria-pressed="${soundEnabled}" aria-label="${soundEnabled ? 'Mute sound' : 'Enable sound'}" title="${soundEnabled ? 'Mute sound' : 'Enable sound'}">${soundIcon()}</button>`;
}
function bindSoundButtons() {
  document.querySelectorAll('[data-sound-toggle]').forEach(button => {
    button.onclick = () => setSound(!soundEnabled);
  });
}
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
  app.innerHTML = `<section class="intro"><h2 tabindex="-1">Your next practice session</h2><p><strong>65 questions</strong> drawn from a bank of ${bank.length}. Pass with <strong>${REQUIRED}/65 correct</strong> (at least 85%).</p><p>Single-choice and multiple-response questions. Select every correct option for multiple-response questions; no partial credit.</p><label class="sound-option"><input id="sound-enabled" type="checkbox" ${soundEnabled?'checked':''}> Enable sound effects</label><div class="mode-grid"><section><h3>Mock exam</h3><p>Answers lock when complete. Review each answer, or skip unanswered questions for later. Ten wrong answers end the attempt.</p><button id="exam">Start mock exam</button></section><section><h3>Study mode</h3><p>Check each answer as you go. Explanations and images appear after checking.</p><button id="study">Start study quiz</button></section></div><p>All four exam domains are included. No timer. Mock exams end at ten wrong answers; study mode lets you practice all 65.</p></section>`;
  document.querySelector('#sound-enabled').onchange = e => setSound(e.target.checked);
  document.querySelector('#exam').onclick = ()=>start('exam');
  document.querySelector('#study').onclick = ()=>start('study');
}
function feedback(q, closable = false) {
  const correct = isCorrect(q,state.answers[q.id]);
  return `<section class="feedback ${correct?'correct':'wrong'}">${closable?'<button type="button" class="review-close" aria-label="Close feedback and collapse question navigation">×</button>':''}<h3>${correct?'Correct':'Incorrect'}</h3><p><strong>Correct answer:${q.correct_answers.length>1?'s':''}:</strong> ${q.correct_answers.map(escape).join('; ')}</p><h4>Why this answer is right</h4><p>${escape(q.explanation)}</p><h4>Why the other options are wrong</h4><dl class="option-explanations">${q.answers.filter(a => !q.correct_answers.includes(a)).map(a => `<dt>${escape(a)}</dt><dd>${escape(q.incorrect_explanations[a])}</dd>`).join('')}</dl><img class="answer-image" src="images/${escape(q.image_filename)}" alt="${escape(q.image_alt)}"><p><a href="${escape(q.web_link)}" target="_blank" rel="noopener">Review this domain in the AWS exam guide ↗</a></p></section>`;
}
function questionGrid(open = false) {
  return `<details id="question-navigation" ${open?'open':''}><summary>Jump to a question (★ skipped/flagged, ✓ correct, × incorrect, • answered)</summary><div class="question-grid">${state.questions.map((q,i)=>{
    const graded = state.mode === 'exam' ? locked(state,q) : state.finished || Boolean(state.answers[q.id]?.length);
    const status = graded ? (isCorrect(q,state.answers[q.id])?'correct':'incorrect') : state.answers[q.id]?.length?'answered':'unanswered';
    const symbol = {correct:'✓',incorrect:'×',answered:'•',unanswered:''}[status];
    return `<button data-jump="${i}" class="question-${status}" aria-label="Question ${i+1}, ${status}${state.flags[q.id]?', flagged':''}${status==='incorrect'?', show correct answer':''}" ${!state.finished && i===state.index?'aria-current="step"':''}>${i+1} ${symbol}${state.flags[q.id]?' ★':''}</button>`;
  }).join('')}</div></details>`;
}
function inlineAnswerReview(q, open) {
  if (!open) return '';
  const answered = Boolean(state.answers[q.id]?.length);
  return `<details id="answer-review" class="inline-answer-review" open><summary>Question ${state.index+1}: ${answered?'Correct answer and explanation':'Answer review'}</summary>${answered?`<p><strong>Your answer:</strong>${state.answers[q.id].map(escape).join('; ')}</p>${feedback(q, true)}`:'<p>Choose an answer to see whether it is correct, then use this section to review the explanation.</p>'}</details>`;
}
function goToQuestion(index) {
  if (state.mode === 'exam') { state.index=index; state.screen=locked(state,state.questions[index])?'review':'question'; save(); render(); focusHeading(); return; }
  if(!state.finished) return move(index, true);
  const review=document.querySelectorAll('.review')[index];
  review.open=true;review.scrollIntoView({block:'start',behavior:'smooth'});review.querySelector('summary').focus();
}
function bindQuestionGrid() {
  document.querySelectorAll('[data-jump]').forEach(button=>button.onclick=()=>goToQuestion(Number(button.dataset.jump)));
}
function render() {
  if (state.mode === 'exam') return renderExam();
  if (state.finished) return results();
  const navigationOpen=document.querySelector('#question-navigation')?.open || false;
  const q=state.questions[state.index], chosen=state.answers[q.id]||[];
  const checked=state.mode==='study' && state.checked[q.id];
  const answered=state.questions.filter(q=>(state.answers[q.id]||[]).length).length;
  app.innerHTML = `<p class="meta">${state.mode==='exam'?'Mock exam':'Study mode'} · ${answered}/${TOTAL} answered</p><progress max="65" value="${answered}" aria-label="Questions answered">${answered}/65</progress><p class="meta">Question ${state.index+1} of ${TOTAL} · ${escape(DOMAINS[q.domain])}</p>${inlineAnswerReview(q, answerReviewOpen || (checked && !closedReviews.has(q.id)))}<h2 id="current-question" tabindex="-1">${escape(q.question)}</h2><form id="question-form"><fieldset ${checked?'disabled':''}><legend>${q.correct_answers.length>1?`Select ${q.correct_answers.length} answers`:'Select one answer'}</legend>${q.answers.map((a,i)=>`<label class="answer"><input type="${q.correct_answers.length>1?'checkbox':'radio'}" name="answer" value="${i}" ${chosen.includes(a)?'checked':''}> <span>${escape(a)}</span></label>`).join('')}</fieldset>${state.mode==='study'?`<button id="check" ${checked||!chosen.length?'disabled':''}>Check answer</button>`:''}</form><label class="flag"><input id="flag" type="checkbox" ${state.flags[q.id]?'checked':''}> Flag for review</label><nav class="nav"><button id="prev" ${state.index===0?'disabled':''}>← Previous</button>${soundButton()}<button id="next" ${state.index===TOTAL-1?'disabled':''}>Next →</button></nav>${questionGrid(navigationOpen)}<div class="actions"><button id="finish">Finish &amp; review</button><button class="secondary" id="restart">New quiz</button></div>`;
  document.querySelectorAll('[name=answer]').forEach(input=>input.onchange=()=>{
    let selections=[...document.querySelectorAll('[name=answer]:checked')];
    if(selections.length>q.correct_answers.length){input.checked=false;return;}
    state.answers[q.id]=selections.map(el=>q.answers[Number(el.value)]);save();
    // Wait for every requested choice before grading a multiple-response answer.
    if (state.mode === 'exam' && selections.length === q.correct_answers.length) {
      play(isCorrect(q,state.answers[q.id]) ? 'correct' : 'incorrect');
    }
    // Keep focus on the selected input after updating counts and controls.
    const value=input.value;render();document.querySelector(`[name=answer][value="${value}"]`).focus();
  });
  document.querySelector('#question-form').onsubmit=e=>{e.preventDefault();if(chosen.length){state.checked[q.id]=true;play(isCorrect(q,chosen)?'correct':'incorrect');closedReviews.delete(q.id);save();render();document.querySelector('#answer-review').scrollIntoView({block:'start', behavior:'smooth'});}};
  document.querySelector('#flag').onchange=e=>{state.flags[q.id]=e.target.checked;save();render();document.querySelector('#flag').focus();};
  bindSoundButtons();
  document.querySelector('#prev').onclick=()=>move(state.index-1);
  document.querySelector('#next').onclick=()=>{
    move(state.index+1);
    window.scrollTo({top:0,behavior:'instant'});
  };
  bindQuestionGrid();
  document.querySelector('.review-close')?.addEventListener('click',()=>{
    answerReviewOpen=false;closedReviews.add(q.id);
    document.querySelector('#answer-review').open=false;
    document.querySelector('#question-navigation').open=false;
    document.querySelector('#current-question').focus({preventScroll:true});
  });
  document.querySelector('#finish').onclick=()=>{
    const missing=TOTAL-answered;
    if(confirm(`Submit this attempt? ${missing} unanswered question${missing===1?'':'s'} will count as incorrect.`)){state.finished=true;save();results();focusHeading();if(passed(score(state.questions,state.answers)))play('passed');}
  };
  document.querySelector('#restart').onclick=newQuiz;
}
function move(index, review = false){state.index=index;answerReviewOpen=review;save();render();if(review){const section=document.querySelector('#answer-review');section.scrollIntoView({block:'start',behavior:'smooth'});section.querySelector('summary').focus({preventScroll:true});}else focusHeading();}
function newQuiz(){if(state.finished||confirm('Start a new quiz and replace this saved attempt?')){state=null;try{localStorage.removeItem(KEY);}catch{}home();focusHeading();}}
function results(){
 const correct=score(state.questions,state.answers);
 app.innerHTML=`<section class="result ${passed(correct)?'correct':'wrong'}"><h2 tabindex="-1">${passed(correct)?'You passed!':'Keep practicing'}</h2><p class="result-score">${correct}/${TOTAL} · ${(correct/TOTAL*100).toFixed(1)}%</p><p>Practice target: at least 85% (${REQUIRED} correct). ${TOTAL-correct} incorrect or unanswered.</p></section><h3>By domain</h3><ul>${[1,2,3,4].map(d=>{const qs=state.questions.filter(q=>q.domain===d);return `<li>${escape(DOMAINS[d])}: ${score(qs,state.answers)}/${qs.length}</li>`;}).join('')}</ul><div class="actions"><button id="restart">Start a new quiz</button>${soundButton()}</div>${questionGrid()}<h3>Review all answers</h3><p>Expand a question to see your answer, explanation, and image.</p>${state.questions.map((q,i)=>`<details class="review"><summary>${i+1}. ${isCorrect(q,state.answers[q.id])?'Correct':'Incorrect'}${state.flags[q.id]?' · ★ Flagged':''} — ${escape(q.question)}</summary><p><strong>Your answer:</strong> ${(state.answers[q.id]||[]).map(escape).join('; ')||'Unanswered'}</p>${feedback(q)}</details>`).join('')}`;
 document.querySelector('#restart').onclick=newQuiz;
 bindSoundButtons();
 bindQuestionGrid();
}

function examHome() {
  state=null;
  try { localStorage.removeItem(KEY); } catch {}
  home(); focusHeading();
}
function finishExam() {
  if (pending(state).length) {
    state.screen='pending'; save(); renderExam(); focusHeading(); return;
  }
  state.finished=true; state.screen=wrongCount(state)>=MAX_WRONG?'failed':'passed';
  save(); renderExam(); focusHeading();
  if (state.screen==='passed') play('passed');
}
function advanceExam() {
  const index=state.revisiting ? (pending(state).find(({i})=>i>state.index)?.i ?? pending(state)[0]?.i ?? null) : nextPending(state);
  if (index===null) return finishExam();
  state.index=index; state.screen='question'; save(); renderExam(); focusHeading();
}
function renderExam() {
  const wrong=wrongCount(state);
  if (wrong>=MAX_WRONG) {state.finished=true;state.screen='failed';save();}
  const q=state.questions[state.index];
  const chosen=state.answers[q.id]||[];
  const complete=locked(state,q);
  const screen=state.screen||'question';
  const count=`<p>You have ${wrong} out of ${MAX_WRONG} wrong answers so far.</p>`;
  const actions=`${questionGrid()}<div class="actions">${pending(state).length===0?'<button id="finish">Finish &amp; review</button>':''}${soundButton()}<button class="secondary" id="restart">New quiz</button></div>`;
  if (screen==='failed') {
    app.innerHTML=`<section class="result wrong"><h2 tabindex="-1">Sorry, you did not pass the test</h2>${count}<p>Would you like to try again?</p><div class="actions"><button id="retry">Yes — try again</button><button id="home">No — choose a mode</button>${soundButton()}</div></section>`;
    document.querySelector('#retry').onclick=()=>start('exam');
    document.querySelector('#home').onclick=examHome;
  } else if (screen==='passed' || state.finished) {
    const correct=score(state.questions,state.answers);
    app.innerHTML=`<section class="result correct"><h2 tabindex="-1">You've passed!</h2><p class="result-score">${correct}/${TOTAL} · ${(correct/TOTAL*100).toFixed(1)}%</p><p>Final score: ${correct} correct and ${TOTAL-correct} wrong.</p></section><div class="completion-actions"><a href="https://alannarisse.github.io/quizzes/">See more quizzes</a><button id="retry">Take another mock quiz</button><button id="study-again">Go to the study quiz</button><button id="share">Copy quiz link</button>${soundButton()}</div><p id="share-status" role="status"></p>`;
    document.querySelector('#retry').onclick=()=>start('exam');
    document.querySelector('#study-again').onclick=()=>start('study');
    document.querySelector('#share').onclick=async()=>{
      const url=new URL(window.location.href);url.hash='';
      const status=document.querySelector('#share-status');
      try {await navigator.clipboard.writeText(url.href);status.textContent='Quiz link copied!';}
      catch {status.textContent=`Copy this quiz link: ${url.href}`;}
    };
  } else if (screen==='pending') {
    const remaining=pending(state);
    app.innerHTML=`<h2 tabindex="-1">Finish your remaining questions</h2>${count}<p>${remaining.length} skipped or unanswered question${remaining.length===1?'':'s'} remain. Answer them to finish the exam.</p><ol class="pending-list">${remaining.map(({q,i})=>`<li><button data-pending="${i}">Question ${i+1}: ${escape(q.question)}</button></li>`).join('')}</ol><button id="continue-pending">Continue in order</button>${actions}`;
    document.querySelectorAll('[data-pending]').forEach(button=>button.onclick=()=>{state.revisiting=true;goToQuestion(Number(button.dataset.pending));});
    document.querySelector('#continue-pending').onclick=()=>{state.revisiting=true;goToQuestion(remaining[0].i);};
  } else if (screen==='review' && complete) {
    const correct=isCorrect(q,chosen);
    app.innerHTML = `<h2 tabindex="-1" class="exam-verdict ${correct ? 'verdict-correct' : 'verdict-wrong'}">You chose ${correct ? 'correctly' : 'incorrectly'}</h2><p>${escape(q.question)}</p><h3>Your answer:${chosen.length > 1 ? 's' : ''}</h3><dl>${chosen.map(a => `<dt>${q.correct_answers.includes(a) ? `<div class="icon-box"><img class="answer-image" src="images/${escape(q.image_filename)}" alt="${escape(q.image_alt)}">${escape(a)}</div>` : escape(a)}</dt><dd>${escape(q.correct_answers.includes(a) ? q.explanation : q.incorrect_explanations[a])}</dd>`).join('')}</dl>${!correct ? `<h3>Correct answer:${q.correct_answers.length > 1 ? 's' : ''}</h3>
    <div class="icon-box"><img class="answer-image" src="images/${escape(q.image_filename)}" alt="${escape(q.image_alt)}">${q.correct_answers.map(escape).join('; ')}</div><p>Why? ${escape(q.explanation)}</p>` : ''}

    ${count}<button id="exam-next">Next →</button>${actions}`;
    document.querySelector('#exam-next').onclick=advanceExam;
  } else {
    app.innerHTML=`<p class="meta">Mock exam · ${TOTAL-pending(state).length}/${TOTAL} answered</p><progress max="${TOTAL}" value="${TOTAL-pending(state).length}" aria-label="Questions answered"></progress><p class="meta">Question ${state.index+1} of ${TOTAL} · ${escape(DOMAINS[q.domain])}</p><h2 tabindex="-1">${escape(q.question)}</h2><form id="exam-form"><fieldset ${complete?'disabled':''} class="${complete&&isCorrect(q,chosen)?'exam-correct':''}"><legend>${q.correct_answers.length>1?`Select ${q.correct_answers.length} answers.`:'Select one answer.'}</legend>${q.answers.map((a,i)=>`<label class="answer"><input type="${q.correct_answers.length>1?'checkbox':'radio'}" name="exam-answer" value="${i}" ${chosen.includes(a)?'checked':''}><span>${escape(a)}</span></label>`).join('')}</fieldset></form>${complete?'<button id="review-answer">Review answer</button>':!chosen.length?'<label class="flag"><input id="skip" type="checkbox"> Skip this for now</label>':''}${actions}`;
    document.querySelector('#exam-form').onsubmit=e=>e.preventDefault();
    document.querySelectorAll('[name=exam-answer]').forEach(input=>input.onchange=()=>{
      if(locked(state,q)) return;
      const selections=[...document.querySelectorAll('[name=exam-answer]:checked')].map(el=>q.answers[Number(el.value)]);
      if(selections.length>q.correct_answers.length){input.checked=false;return;}
      const committed=commitAnswer(state,q,selections);
      if(!committed) state.answers[q.id]=selections;
      if(committed) play(isCorrect(q,selections)?'correct':'incorrect');
      save();renderExam();
      if(committed) {document.querySelector('#review-answer')?.focus();if(wrongCount(state)>=MAX_WRONG)focusHeading();}
      else document.querySelector(`[name=exam-answer][value="${input.value}"]`)?.focus();
    });
    document.querySelector('#skip')?.addEventListener('change',()=>{state.flags[q.id]=true;save();advanceExam();});
    document.querySelector('#review-answer')?.addEventListener('click',()=>{state.screen='review';save();renderExam();focusHeading();});
  }
  document.querySelector('#finish')?.addEventListener('click',finishExam);
  document.querySelector('#restart')?.addEventListener('click',newQuiz);
  bindQuestionGrid();bindSoundButtons();
}

try {
 const response=await fetch('./questions.json');if(!response.ok)throw Error('Question bank unavailable');bank=await response.json();
 selectQuestions(bank);state=restore();if(state)render();else home();
} catch(error){app.innerHTML='<h2>Unable to load the quiz</h2><p>Serve this folder through a local web server and reload. Check that questions.json is available.</p>';console.error(error);}
