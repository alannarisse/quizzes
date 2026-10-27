# AWS Cloud Practitioner CLF-C02 practice

A dependency-free static quiz with 108 original practice questions. Each attempt samples 65 unique questions and shuffles their order and answer choices. Domain counts are 16 Cloud Concepts, 19 Security and Compliance, 22 Cloud Technology and Services, and 8 Billing, Pricing, and Support (an approximation of AWS's 24%/30%/34%/12% weighting).

The practice passing target is **85%: 56 of 65 correct**. All questions count; unanswered and partially correct multiple-response questions count as incorrect. This differs from the real exam's 50 scored and 15 unscored items and scaled 700/1,000 passing score.

- Mock exam: answered questions are marked in the jump grid immediately. Select an answered question in the grid to open its correct answer and explanation above the question. Submission shows a full review.
- Study mode: check an answer to reveal feedback and its image. Checked responses are locked.
- The question grid marks graded answers green (✓) or red (×). Clicking any box jumps to that question and opens an inline answer review above it. Answered questions show the correct answer and explanation; unanswered questions prompt you to answer first. No modal overlay is used.
- Navigate freely, flag questions, and review every question after submission. No timer or early failure cutoff.
- A Study guide link in each active quiz opens the official AWS exam guide in a new tab without changing the saved attempt.
- Progress and finished attempts resume from localStorage. New quiz replaces the current attempt and draws a new sample. Storage failures do not prevent use.
- Each incorrect option has a separate explanation in study feedback and submitted exam review.
- Images appear only in answer feedback. A local placeholder is used throughout.

## Run

From the `quizzes` directory:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000/aws-clf-c02/`. Use a web server rather than opening `index.html` as a file, since questions load with fetch.

## Edit questions

Edit `questions.json`. Each record has a unique numeric `id`, `domain` (1–4), `question`, unique `answers`, `correct_answers` (an array of exact answer strings), `explanation`, `incorrect_explanations` (an object keyed by each exact incorrect answer string), `image_filename`, `image_alt`, and `web_link`. Put images under `images/`. Single-choice items have four options; multiple-response items have at least five. The number of correct answers determines the selection limit.

Keep at least 16/19/22/8 questions in domains 1/2/3/4 respectively. New questions enter the next new quiz. Increment the storage key in `script.js` if making incompatible bank/schema changes.

## Content sources

Reviewed October 27, 2026. Questions and explanations are original study material, not copied exam items, official AWS questions, or a reproduction of the linked practice banks.

- [Official exam guide](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)
- [Cloud Concepts](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02-domain1.html)
- [Security and Compliance](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02-domain2.html)
- [Cloud Technology and Services](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02-domain3.html)
- [Billing, Pricing, and Support](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02-domain4.html)
- [Suggested YouTube video](https://www.youtube.com/watch?v=yBRGqNQLB08): transcript accessible; consulted for topic ideas. Transcripts can contain errors, so the AWS guide is the coverage reference.
- [CloudCertPrep](https://www.cloudcertprep.io/aws/clf-c02): accessible practice page; retained as an additional study resource, not imported into this bank.

Each question links to its official domain guide. These links establish exam scope; they are not individual service reference citations. AWS services, pricing, and support offerings evolve; review the current AWS documentation while studying.

## Checks

```sh
node --test aws-clf-c02/engine.test.mjs
```

Tests validate bank integrity, domain sampling, uniqueness, randomized samples, scoring, the 55/56 passing boundary, and all-or-nothing multiple-response grading.
