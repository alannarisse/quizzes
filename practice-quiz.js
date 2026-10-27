// Shared controller for the CAPM and ParaPro practice quizzes.
function initializePracticeQuiz({questions,storageKey}) {
  const escape = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const seen=new Set();
  const bank=questions.filter(q=>{
    if(!q.answers.includes(q.correct_choice)||/placeholder|exam-style question|sample .*question/i.test(q.question+' '+q.explanation))return false;
    const normalized=q.question.replace(/^(Reading comprehension|Math|Writing) question \d+:\s*/i,'').trim();
    if(seen.has(normalized))return false;seen.add(normalized);return true;
  });
  const shuffle=items=>{const copy=[...items];for(let i=copy.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]];}return copy;};
  const fingerprint=JSON.stringify(bank.map(q=>[q.id,q.question,q.answers,q.correct_choice]));
  let index=0,answers={},orders={},finished=false,notice='';
  const el=id=>document.getElementById(id);
  function save(){try{localStorage.setItem(storageKey,JSON.stringify({version:2,fingerprint,index,answers,orders,finished}));}catch{notice='Progress cannot be saved in this browser. You can still complete the quiz.';}}
  function reset(){index=0;answers={};orders=Object.fromEntries(bank.map(q=>[q.id,shuffle(q.answers)]));finished=false;save();render();}
  function restore(){try{
    const raw=localStorage.getItem(storageKey);if(!raw)return false;
    const s=JSON.parse(raw);
    if(s.version!==2||s.fingerprint!==fingerprint||!Number.isInteger(s.index)||s.index<0||s.index>=bank.length||typeof s.finished!=='boolean'||!s.answers||typeof s.answers!=='object'||Array.isArray(s.answers)||!s.orders)throw Error('Invalid state');
    for(const q of bank){const order=s.orders[q.id];if(!Array.isArray(order)||order.length!==q.answers.length||new Set(order).size!==q.answers.length||!order.every(a=>q.answers.includes(a)))throw Error('Invalid order');}
    for(const [id,a] of Object.entries(s.answers)){if(!bank.some(q=>String(q.id)===id&&q.answers.includes(a)))throw Error('Invalid answer');}
    if(s.finished&&bank.some(q=>s.answers[q.id]===undefined))throw Error('Incomplete result');
    index=s.index;answers=s.answers;orders=s.orders;finished=s.finished;return true;
  }catch{notice='An older or invalid saved attempt was reset to keep answers matched to the current questions.';return false;}}
  function render(){
    const answered=bank.filter(q=>answers[q.id]!==undefined).length;
    const correct=bank.filter(q=>answers[q.id]===q.correct_choice).length;
    el('progressBar').style.width=`${answered/bank.length*100}%`;
    el('place').textContent=`${finished?'Quiz complete':`Question ${index+1} of ${bank.length}`} · Answered: ${answered} · Correct: ${correct} · Wrong: ${answered-correct}`;
    el('score').textContent=notice;
    el('restart').style.display='inline-block';
    el('prevBtn').style.display=!finished&&index>0?'inline-block':'none';
    el('nextBtn').style.display=finished?'none':'inline-block';
    if(finished){el('quiz').innerHTML=`<h2>Quiz complete!</h2><p>You got <b>${correct}</b> right and <b>${answered-correct}</b> wrong out of ${bank.length}.</p>`;return;}
    const q=bank[index],chosen=answers[q.id];
    el('quiz').innerHTML=`<p class="bank-note">${bank.length} distinct practice questions · ${escape(q.domain || 'General practice')}</p><h2 class="question">${escape(q.question)}</h2><div class="answers">${orders[q.id].map((a,i)=>`<button data-answer="${i}" ${chosen!==undefined?'disabled':''} ${a===chosen?'class="selected-answer" aria-pressed="true"':''}>${escape(a)}</button>`).join('')}</div><div id="feedback" aria-live="polite">${chosen===undefined?'':`<div class="feedback ${chosen===q.correct_choice?'correct':'wrong'}"><h3>${chosen===q.correct_choice?'✅ Correct!':'❌ Incorrect'}</h3><p><strong>Your answer:</strong> ${escape(chosen)}</p><p><strong>Correct answer:</strong> ${escape(q.correct_choice)}</p><p>${escape(q.explanation)}</p></div>`}</div>`;
    document.querySelectorAll('[data-answer]').forEach(button=>button.onclick=()=>{
      if(finished||bank[index].id!==q.id||answers[q.id]!==undefined)return;
      answers[q.id]=orders[q.id][Number(button.dataset.answer)];save();render();el('nextBtn').focus();
    });
    el('nextBtn').disabled=chosen===undefined;
    el('nextBtn').textContent=index===bank.length-1?'Finish quiz':'Next';
  }
  el('prevBtn').onclick=()=>{if(!finished&&index>0){index--;save();render();}};
  el('nextBtn').onclick=()=>{if(finished||answers[bank[index].id]===undefined)return;if(index===bank.length-1)finished=true;else index++;save();render();};
  // Writes only this quiz's key, leaving all other quizzes' progress intact.
  el('restart').onclick=reset;
  if(!bank.length){el('quiz').textContent='No complete questions are available.';return;}
  if(restore())render();else reset();
}
