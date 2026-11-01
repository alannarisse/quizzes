export const TOTAL = 65;
export const PASS_PERCENT = 85;
export const REQUIRED = Math.ceil(TOTAL * PASS_PERCENT / 100);
export const DOMAINS = ['','Cloud Concepts','Security and Compliance','Cloud Technology and Services','Billing, Pricing, and Support'];
export function shuffle(items, random = Math.random) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
export function selectQuestions(bank, random = Math.random) {
  const counts = [0,16,19,22,8];
  const selected = counts.flatMap((count, domain) => {
    const pool = bank.filter(q => q.domain === domain);
    if (pool.length < count) throw new Error(`Not enough questions for domain ${domain}`);
    return shuffle(pool, random).slice(0,count);
  });
  return shuffle(selected,random).map(q => ({...q, answers:shuffle(q.answers,random)}));
}
export function isCorrect(question, selected = []) {
  return selected.length === question.correct_answers.length && question.correct_answers.every(a => selected.includes(a));
}
export function score(questions, answers) {
  return questions.filter(q => isCorrect(q, answers[q.id])).length;
}
export function passed(correct) { return correct >= REQUIRED; }
