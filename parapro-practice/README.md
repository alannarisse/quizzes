# ParaPro practice quiz

Open through the quizzes site's web server. This page loads its question data from `script.js` and uses `../practice-quiz.js` for navigation, grading, and persistence. `questions.json` is a matching export of the current live bank; the other JSON files are older reference banks and are not loaded by the page.

The live quiz contains **60 distinct completed questions**: 20 reading, 20 mathematics, and 20 writing questions. The bank includes short original reading passages, arithmetic and algebra, grammar, and classroom support scenarios. This is a practice set, not a full-length certification exam.

Answers are shuffled once per attempt and remain stable across navigation and reloads. A response locks after selection. Answer each question, then choose **Finish quiz** on the last question. Progress and completed results are stored under this quiz's own browser storage key. **Restart Quiz** replaces only this quiz's saved attempt.

Legacy or invalid saves reset with a visible notice. Editing question text, options, or answer keys also resets an old attempt so it cannot be graded against different data.

Run regression tests from `quizzes`:

```sh
node --test practice-quiz.test.cjs
```

## Content sources

Expanded October 27, 2026. The added questions and explanations are original practice material. The linked practice sites were reviewed for topic ideas and formats; their question text was not imported. Existing useful questions were retained.

- [Official exam information](https://www.ets.org/pdfs/parapro/1755.pdf)
- [Additional practice resource](https://www.parapropracticetest.com/)

- [Official ParaPro site](https://parapro.ets.org/)
- [Reading practice topics](https://www.parapropracticetest.com/parapro-reading-practice-test/)
- [Mathematics practice topics](https://www.parapropracticetest.com/parapro-math-practice-test/)
- [Writing practice topics](https://www.parapropracticetest.com/parapro-writing-practice-test/)

The official links document exam scope, not endorsement of these locally authored items. Each item carries a domain and a reference link. The site displays the current domain while answering.
