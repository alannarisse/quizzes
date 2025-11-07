const questions = [
  {
    "id": 1,
    "question": `Which of the following sentences is grammatically correct?`,
    "answers": [
      "Their going to the park later.",
      "They're going to the park later.",
      "There going to the park later.",
      "Theirs going to the park later."
    ],
    "correct_choice": "They're going to the park later.",
    "explanation": "The contraction 'they're' means 'they are,' which fits the sentence correctly.",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 2,
    "question": `Solve: 3/4 + 2/3 = ?`,
    "answers": [
      "17/12",
      "13/12",
      "5/7",
      "9/10"
    ],
    "correct_choice": "17/12",
    "explanation": `<pre>Find a common denominator (12). 3/4 = 9/12, 2/3 = 8/12, sum = 17/12.</pre>`,
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 3,
    "question": `What is the main purpose of a topic sentence in a paragraph?`,
    "answers": [
      "To summarize the entire essay",
      "To introduce the main idea of the paragraph",
      "To provide supporting evidence",
      "To conclude the paragraph"
    ],
    "correct_choice": "To introduce the main idea of the paragraph",
    "explanation": "The topic sentence introduces the central idea that the rest of the paragraph supports.",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 4,
    "question": `Which number is equivalent to 45%?`,
    "answers": [
      "0.045",
      "0.45",
      "4.5",
      "45"
    ],
    "correct_choice": "0.45",
    "explanation": "Percent means 'per hundred.' 45% = 45/100 = 0.45.",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 5,
    "question": `In the sentence 'She quickly ran to the store,' what part of speech is 'quickly'?`,
    "answers": [
      "Noun",
      "Adverb",
      "Adjective",
      "Verb"
    ],
    "correct_choice": "Adverb",
    "explanation": "The word 'quickly' describes how she ran, so it is an adverb.",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 6,
    "question": `Reading comprehension question 6: What is the main idea of the passage 'Teachers help students succeed by providing guidance and encouragement.'?`,
    "answers": [
      "Teachers assign homework",
      "Teachers encourage student success",
      "Students must work alone",
      "Teachers focus only on rules"
    ],
    "correct_choice": "Teachers encourage student success",
    "explanation": "The passage emphasizes the role of teachers in encouraging students.",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 7,
    "question": `Math question 7: Solve 6 \u00d7 (2 + 3).`,
    "answers": [
      "30",
      "12",
      "15",
      "20"
    ],
    "correct_choice": "30",
    "explanation": `<pre>Order of operations: (2+3)=5, then 6\u00d75=30.</pre>`,
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 8,
    "question": `Writing question 8: Which sentence is punctuated correctly?`,
    "answers": [
      "Its raining outside, bring your umbrella.",
      "It's raining outside; bring your umbrella.",
      "Its raining outside bring your umbrella.",
      "It's raining outside bring your umbrella"
    ],
    "correct_choice": "It's raining outside; bring your umbrella.",
    "explanation": "The semicolon correctly joins two independent clauses and 'it's' means 'it is.'",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 9,
    "question": `Reading comprehension question 9: What is the main idea of the passage 'Teachers help students succeed by providing guidance and encouragement.'?`,
    "answers": [
      "Teachers assign homework",
      "Teachers encourage student success",
      "Students must work alone",
      "Teachers focus only on rules"
    ],
    "correct_choice": "Teachers encourage student success",
    "explanation": "The passage emphasizes the role of teachers in encouraging students.",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 10,
    "question": `Math question 10: Solve 6 \u00d7 (2 + 3).`,
    "answers": [
      "30",
      "12",
      "15",
      "20"
    ],
    "correct_choice": "30",
    "explanation": `<pre>Order of operations: (2+3)=5, then 6\u00d75=30.</pre>`,
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 11,
    "question": `Writing question 11: Which sentence is punctuated correctly?`,
    "answers": [
      "Its raining outside, bring your umbrella.",
      "It's raining outside; bring your umbrella.",
      "Its raining outside bring your umbrella.",
      "It's raining outside bring your umbrella"
    ],
    "correct_choice": "It's raining outside; bring your umbrella.",
    "explanation": "The semicolon correctly joins two independent clauses and 'it's' means 'it is.'",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 12,
    "question": `Reading comprehension question 12: What is the main idea of the passage 'Teachers help students succeed by providing guidance and encouragement.'?`,
    "answers": [
      "Teachers assign homework",
      "Teachers encourage student success",
      "Students must work alone",
      "Teachers focus only on rules"
    ],
    "correct_choice": "Teachers encourage student success",
    "explanation": "The passage emphasizes the role of teachers in encouraging students.",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 13,
    "question": `Math question 13: Solve 6 \u00d7 <pre>(2 + 3).</pre>`,
    "answers": [
      "30",
      "12",
      "15",
      "20"
    ],
    "correct_choice": "30",
    "explanation": `Order of operations: <pre>(2+3)=5, then 6\u00d75=30.</pre>`,
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 14,
    "question": `Writing question 14: Which sentence is punctuated correctly?`,
    "answers": [
      "Its raining outside, bring your umbrella.",
      "It's raining outside; bring your umbrella.",
      "Its raining outside bring your umbrella.",
      "It's raining outside bring your umbrella"
    ],
    "correct_choice": "It's raining outside; bring your umbrella.",
    "explanation": "The semicolon correctly joins two independent clauses and 'it's' means 'it is.'",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 15,
    "question": `Reading comprehension question 15: What is the main idea of the passage 'Teachers help students succeed by providing guidance and encouragement.'?`,
    "answers": [
      "Teachers assign homework",
      "Teachers encourage student success",
      "Students must work alone",
      "Teachers focus only on rules"
    ],
    "correct_choice": "Teachers encourage student success",
    "explanation": "The passage emphasizes the role of teachers in encouraging students.",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 16,
    "question": `Math question 16: <pre>Solve 6 \u00d7 (2 + 3).</pre>`,
    "answers": [
      "30",
      "12",
      "15",
      "20"
    ],
    "correct_choice": "30",
    "explanation": `Order of operations: <pre>(2+3)=5, then 6\u00d75=30.</pre>`,
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 17,
    "question": `Writing question 17: Which sentence is punctuated correctly?`,
    "answers": [
      "Its raining outside, bring your umbrella.",
      "It's raining outside; bring your umbrella.",
      "Its raining outside bring your umbrella.",
      "It's raining outside bring your umbrella"
    ],
    "correct_choice": "It's raining outside; bring your umbrella.",
    "explanation": "The semicolon correctly joins two independent clauses and 'it's' means 'it is.'",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 18,
    "question": `Reading comprehension question 18: What is the main idea of the passage 'Teachers help students succeed by providing guidance and encouragement.'?`,
    "answers": [
      "Teachers assign homework",
      "Teachers encourage student success",
      "Students must work alone",
      "Teachers focus only on rules"
    ],
    "correct_choice": "Teachers encourage student success",
    "explanation": "The passage emphasizes the role of teachers in encouraging students.",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 19,
    "question": `Math question 19: <pre>Solve 6 \u00d7 (2 + 3).</pre>`,
    "answers": [
      "30",
      "12",
      "15",
      "20"
    ],
    "correct_choice": "30",
    "explanation": `Order of operations: <pre>(2+3)=5, then 6\u00d75=30.</pre>`,
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 20,
    "question": `Writing question 20: Which sentence is punctuated correctly?`,
    "answers": [
      "Its raining outside, bring your umbrella.",
      "It's raining outside; bring your umbrella.",
      "Its raining outside bring your umbrella.",
      "It's raining outside bring your umbrella"
    ],
    "correct_choice": "It's raining outside; bring your umbrella.",
    "explanation": "The semicolon correctly joins two independent clauses and 'it's' means 'it is.'",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 21,
    "question": `Reading comprehension question 21: What is the main idea of the passage 'Teachers help students succeed by providing guidance and encouragement.'?`,
    "answers": [
      "Teachers assign homework",
      "Teachers encourage student success",
      "Students must work alone",
      "Teachers focus only on rules"
    ],
    "correct_choice": "Teachers encourage student success",
    "explanation": "The passage emphasizes the role of teachers in encouraging students.",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 22,
    "question": `Math question 22: <pre>Solve 6 \u00d7 (2 + 3).</pre>`,
    "answers": [
      "30",
      "12",
      "15",
      "20"
    ],
    "correct_choice": "30",
    "explanation": `Order of operations: <pre>(2+3)=5, then 6\u00d75=30.</pre>`,
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 23,
    "question": `Writing question 23: Which sentence is punctuated correctly?`,
    "answers": [
      "Its raining outside, bring your umbrella.",
      "It's raining outside; bring your umbrella.",
      "Its raining outside bring your umbrella.",
      "It's raining outside bring your umbrella"
    ],
    "correct_choice": "It's raining outside; bring your umbrella.",
    "explanation": "The semicolon correctly joins two independent clauses and 'it's' means 'it is.'",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 24,
    "question": `Reading comprehension question 24: What is the main idea of the passage 'Teachers help students succeed by providing guidance and encouragement.'?`,
    "answers": [
      "Teachers assign homework",
      "Teachers encourage student success",
      "Students must work alone",
      "Teachers focus only on rules"
    ],
    "correct_choice": "Teachers encourage student success",
    "explanation": "The passage emphasizes the role of teachers in encouraging students.",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 25,
    "question": `Math question 25: <pre>Solve 6 \u00d7 (2 + 3).</pre>`,
    "answers": [
      "30",
      "12",
      "15",
      "20"
    ],
    "correct_choice": "30",
    "explanation": `Order of operations: <pre>(2+3)=5, then 6\u00d75=30.</pre>`,
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 26,
    "question": `Writing question 26: Which sentence is punctuated correctly?`,
    "answers": [
      "Its raining outside, bring your umbrella.",
      "It's raining outside; bring your umbrella.",
      "Its raining outside bring your umbrella.",
      "It's raining outside bring your umbrella"
    ],
    "correct_choice": "It's raining outside; bring your umbrella.",
    "explanation": "The semicolon correctly joins two independent clauses and 'it's' means 'it is.'",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 27,
    "question": `Reading comprehension question 27: What is the main idea of the passage 'Teachers help students succeed by providing guidance and encouragement.'?`,
    "answers": [
      "Teachers assign homework",
      "Teachers encourage student success",
      "Students must work alone",
      "Teachers focus only on rules"
    ],
    "correct_choice": "Teachers encourage student success",
    "explanation": "The passage emphasizes the role of teachers in encouraging students.",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 28,
    "question": `Math question 28: <pre>Solve 6 \u00d7 (2 + 3).</pre>`,
    "answers": [
      "30",
      "12",
      "15",
      "20"
    ],
    "correct_choice": "30",
    "explanation": `Order of operations: <pre>(2+3)=5, then 6\u00d75=30.</pre>`,
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 29,
    "question": `Writing question 29: Which sentence is punctuated correctly?`,
    "answers": [
      "Its raining outside, bring your umbrella.",
      "It's raining outside; bring your umbrella.",
      "Its raining outside bring your umbrella.",
      "It's raining outside bring your umbrella"
    ],
    "correct_choice": "It's raining outside; bring your umbrella.",
    "explanation": "The semicolon correctly joins two independent clauses and 'it's' means 'it is.'",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 30,
    "question": `Reading comprehension question 30: What is the main idea of the passage 'Teachers help students succeed by providing guidance and encouragement.'?`,
    "answers": [
      "Teachers assign homework",
      "Teachers encourage student success",
      "Students must work alone",
      "Teachers focus only on rules"
    ],
    "correct_choice": "Teachers encourage student success",
    "explanation": "The passage emphasizes the role of teachers in encouraging students.",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 31,
    "question": `Math question 31: <pre>Solve 6 \u00d7 (2 + 3).</pre>`,
    "answers": [
      "30",
      "12",
      "15",
      "20"
    ],
    "correct_choice": "30",
    "explanation": `Order of operations: <pre>(2+3)=5, then 6\u00d75=30.</pre>`,
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 32,
    "question": `Writing question 32: Which sentence is punctuated correctly?`,
    "answers": [
      "Its raining outside, bring your umbrella.",
      "It's raining outside; bring your umbrella.",
      "Its raining outside bring your umbrella.",
      "It's raining outside bring your umbrella"
    ],
    "correct_choice": "It's raining outside; bring your umbrella.",
    "explanation": "The semicolon correctly joins two independent clauses and 'it's' means 'it is.'",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 33,
    "question": `Reading comprehension question 33: What is the main idea of the passage 'Teachers help students succeed by providing guidance and encouragement.'?`,
    "answers": [
      "Teachers assign homework",
      "Teachers encourage student success",
      "Students must work alone",
      "Teachers focus only on rules"
    ],
    "correct_choice": "Teachers encourage student success",
    "explanation": "The passage emphasizes the role of teachers in encouraging students.",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 34,
    "question": `Math question 34: <pre>Solve 6 \u00d7 (2 + 3).</pre>`,
    "answers": [
      "30",
      "12",
      "15",
      "20"
    ],
    "correct_choice": "30",
    "explanation": `Order of operations: <pre>(2+3)=5, then 6\u00d75=30.</pre>`,
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 35,
    "question": `Writing question 35: Which sentence is punctuated correctly?`,
    "answers": [
      "Its raining outside, bring your umbrella.",
      "It's raining outside; bring your umbrella.",
      "Its raining outside bring your umbrella.",
      "It's raining outside bring your umbrella"
    ],
    "correct_choice": "It's raining outside; bring your umbrella.",
    "explanation": "The semicolon correctly joins two independent clauses and 'it's' means 'it is.'",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 36,
    "question": `Reading comprehension question 36: What is the main idea of the passage 'Teachers help students succeed by providing guidance and encouragement.'?`,
    "answers": [
      "Teachers assign homework",
      "Teachers encourage student success",
      "Students must work alone",
      "Teachers focus only on rules"
    ],
    "correct_choice": "Teachers encourage student success",
    "explanation": "The passage emphasizes the role of teachers in encouraging students.",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 37,
    "question": `Math question 37: Solve 6 \u00d7 (2 + 3).`,
    "answers": [
      "30",
      "12",
      "15",
      "20"
    ],
    "correct_choice": "30",
    "explanation": "Order of operations: (2+3)=5, then 6\u00d75=30.",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 38,
    "question": `Writing question 38: Which sentence is punctuated correctly?`,
    "answers": [
      "Its raining outside, bring your umbrella.",
      "It's raining outside; bring your umbrella.",
      "Its raining outside bring your umbrella.",
      "It's raining outside bring your umbrella"
    ],
    "correct_choice": "It's raining outside; bring your umbrella.",
    "explanation": "The semicolon correctly joins two independent clauses and 'it's' means 'it is.'",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 39,
    "question": `Reading comprehension question 39: What is the main idea of the passage 'Teachers help students succeed by providing guidance and encouragement.'?`,
    "answers": [
      "Teachers assign homework",
      "Teachers encourage student success",
      "Students must work alone",
      "Teachers focus only on rules"
    ],
    "correct_choice": "Teachers encourage student success",
    "explanation": "The passage emphasizes the role of teachers in encouraging students.",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 40,
    "question": `Math question 40: Solve 6 \u00d7 (2 + 3).`,
    "answers": [
      "30",
      "12",
      "15",
      "20"
    ],
    "correct_choice": "30",
    "explanation": "Order of operations: (2+3)=5, then 6\u00d75=30.",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 41,
    "question": `Writing question 41: Which sentence is punctuated correctly?`,
    "answers": [
      "Its raining outside, bring your umbrella.",
      "It's raining outside; bring your umbrella.",
      "Its raining outside bring your umbrella.",
      "It's raining outside bring your umbrella"
    ],
    "correct_choice": "It's raining outside; bring your umbrella.",
    "explanation": "The semicolon correctly joins two independent clauses and 'it's' means 'it is.'",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 42,
    "question": `Reading comprehension question 42: What is the main idea of the passage 'Teachers help students succeed by providing guidance and encouragement.'?`,
    "answers": [
      "Teachers assign homework",
      "Teachers encourage student success",
      "Students must work alone",
      "Teachers focus only on rules"
    ],
    "correct_choice": "Teachers encourage student success",
    "explanation": "The passage emphasizes the role of teachers in encouraging students.",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 43,
    "question": `Math question 43: Solve 6 \u00d7 (2 + 3).`,
    "answers": [
      "30",
      "12",
      "15",
      "20"
    ],
    "correct_choice": "30",
    "explanation": "Order of operations: (2+3)=5, then 6\u00d75=30.",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 44,
    "question": `Writing question 44: Which sentence is punctuated correctly?`,
    "answers": [
      "Its raining outside, bring your umbrella.",
      "It's raining outside; bring your umbrella.",
      "Its raining outside bring your umbrella.",
      "It's raining outside bring your umbrella"
    ],
    "correct_choice": "It's raining outside; bring your umbrella.",
    "explanation": "The semicolon correctly joins two independent clauses and 'it's' means 'it is.'",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 45,
    "question": `Reading comprehension question 45: What is the main idea of the passage 'Teachers help students succeed by providing guidance and encouragement.'?`,
    "answers": [
      "Teachers assign homework",
      "Teachers encourage student success",
      "Students must work alone",
      "Teachers focus only on rules"
    ],
    "correct_choice": "Teachers encourage student success",
    "explanation": "The passage emphasizes the role of teachers in encouraging students.",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 46,
    "question": `Math question 46: Solve 6 \u00d7 (2 + 3).`,
    "answers": [
      "30",
      "12",
      "15",
      "20"
    ],
    "correct_choice": "30",
    "explanation": "Order of operations: (2+3)=5, then 6\u00d75=30.",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 47,
    "question": `Writing question 47: Which sentence is punctuated correctly?`,
    "answers": [
      "Its raining outside, bring your umbrella.",
      "It's raining outside; bring your umbrella.",
      "Its raining outside bring your umbrella.",
      "It's raining outside bring your umbrella"
    ],
    "correct_choice": "It's raining outside; bring your umbrella.",
    "explanation": "The semicolon correctly joins two independent clauses and 'it's' means 'it is.'",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 48,
    "question": `Reading comprehension question 48: What is the main idea of the passage 'Teachers help students succeed by providing guidance and encouragement.'?`,
    "answers": [
      "Teachers assign homework",
      "Teachers encourage student success",
      "Students must work alone",
      "Teachers focus only on rules"
    ],
    "correct_choice": "Teachers encourage student success",
    "explanation": "The passage emphasizes the role of teachers in encouraging students.",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 49,
    "question": `Math question 49: Solve 6 \u00d7 (2 + 3).`,
    "answers": [
      "30",
      "12",
      "15",
      "20"
    ],
    "correct_choice": "30",
    "explanation": "Order of operations: (2+3)=5, then 6\u00d75=30.",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 50,
    "question": `Writing question 50: Which sentence is punctuated correctly?`,
    "answers": [
      "Its raining outside, bring your umbrella.",
      "It's raining outside; bring your umbrella.",
      "Its raining outside bring your umbrella.",
      "It's raining outside bring your umbrella"
    ],
    "correct_choice": "It's raining outside; bring your umbrella.",
    "explanation": "The semicolon correctly joins two independent clauses and 'it's' means 'it is.'",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  //my questions
    {
    "id": 51,
    "question": `is .3 x .9 greater or less than .4 x .7?`,
    "answers": [
      ">",
      "<",
      "=",
      "!="
    ],
    "correct_choice": "<",
    "explanation": ".3x.9 = .27 and .4 x .7 = .28",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },    
  {
    "id": 52,
    "question": `What is the place value of 2 in 14,208.7`,
    "answers": [
      "thousands",
      "tens",
      "hundreds",
      "hundredths"
    ],
    "correct_choice": "hundreds",
    "explanation": "fourteen thousand, two hundred and eight, and 7 tenths",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  // \u2303 is an upcarrot aka power of symbol
    {
    "id": 53,
    "question": `Simplify: 3 \u2303 2 x 3 \u2303 4 = `,
    "answers": [
      "3 to the 6th power",
      "3 to the 5th power",
      "15",
      "none"
    ],
    "correct_choice": "3 to the 6th power",
    "explanation": "fourteen thousand, two hundred and eight, and 7 tenths",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 54,
    "question": `Order of operations: (6 \u2303 2 - 6) / (5\u23032 + 10 - 8 x2) = `,
    "answers": [
      "30 over 19",
      "6 over -6",
      "-24 over 14",
      "none"
    ],
    "correct_choice": "30 over 19",
    "explanation": "pemdas and numbers squared are times themselves 5x5 is 5 squared",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 55,
    "question": `In a math class, there are 238 girls and 244 boys. The teacher rounds the total number of students to the nearest hundred for a report. What toal does she report?`,
    "answers": [
      "500 students",
      "450 students",
      "400 students",
      "none"
    ],
    "correct_choice": "500 students",
    "explanation": "482 is closest to 500 if rounding up to nearest hundred",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  },
  {
    "id": 56,
    "question": `One-step, single variable line y - 5/8 = 3/4`,
    "answers": [
      "y = 11/8",
      "y = 2/8",
      "y = 8/8",
      "y = 0"
    ],
    "correct_choice": "y = 11/8",
    "explanation": "482 is closest to 500 if rounding up to nearest hundred",
    "image_filename": null,
    "web_link": "https://www.ets.org/parapro"
  }
]


let savedState = JSON.parse(localStorage.getItem("paraQuizState"));
let currentQuestion = savedState ? savedState.currentQuestion : 0;
let score = savedState ? savedState.score : 0;
let wrong = savedState ? savedState.wrong : 0;
let answersGiven = savedState ? savedState.answersGiven : {}; // store chosen answers

function saveState() {
  localStorage.setItem("paraQuizState", JSON.stringify({ currentQuestion, score, wrong, answersGiven }));
}

function updateProgress() {
  const progress = ((currentQuestion) / questions.length) * 100;
  document.getElementById("progressBar").style.width = progress + "%";
  document.getElementById("place").innerHTML = `
  Question ${currentQuestion} of ${questions.length}<br>
  Wrong: ${wrong}` 
}

function showQuestion() {
  if (currentQuestion >= questions.length) {
    document.getElementById("quiz").innerHTML = 
      `<h2>Quiz Complete!</h2>
       <p>You got <b>${score}</b> right and <b>${wrong}</b> wrong.</p>`;
    document.getElementById("restart").style.display = "inline-block";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("prevBtn").style.display = "none";
    localStorage.removeItem("paraQuizState");
    return;
  }

  const q = questions[currentQuestion];
  const shuffledAnswers = [...q.answers].sort(() => Math.random() - 0.5);
  const chosen = answersGiven[q.id] || null;

  document.getElementById("quiz").innerHTML = `
    <div class="question">Q${q.id}: ${q.question}</div>
    <div class="answers">
      ${shuffledAnswers.map(ans => `
        <button 
          onclick="checkAnswer('${ans}')" 
          ${chosen ? "disabled" : ""} 
          style="${chosen === ans ? 'border:2px solid blue;' : ''}">
          ${ans}
        </button>`).join("")}
    </div>
    <div id="feedback"></div>
  `;

  if (chosen) {
    showFeedback(q, chosen);
  }

  document.getElementById("prevBtn").style.display = currentQuestion > 0 ? "inline-block" : "none";
  document.getElementById("nextBtn").style.display = currentQuestion < questions.length - 1 ? "inline-block" : "none";

  updateProgress();
}

function checkAnswer(choice) {
  const q = questions[currentQuestion];
  if (!answersGiven[q.id]) {
    answersGiven[q.id] = choice;
    if (choice === q.correct_choice) {
      score++;
    } else {
      wrong++;
    }
    saveState();
  }
  showFeedback(q, choice);
}

function showFeedback(q, choice) {
  let feedbackDiv = document.getElementById("feedback");
  if (choice === q.correct_choice) {
    feedbackDiv.innerHTML = `<div class="feedback correct">✅ Correct!<br>${q.explanation}</div>`;
  } else {
    feedbackDiv.innerHTML = `<div class="feedback wrong">❌ Wrong. You chose: <b>${choice}</b><br>
    Correct answer: <b>${q.correct_choice}</b><br>${q.explanation}</div>`;
  }
}

document.getElementById("nextBtn").onclick = () => {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    saveState();
    showQuestion();
  }
};

document.getElementById("prevBtn").onclick = () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    saveState();
    showQuestion();
  }
};

document.getElementById("restart").onclick = () => {
  currentQuestion = 0;
  score = 0;
  wrong = 0;
  answersGiven = {};
  localStorage.removeItem("dmvQuizState");
  document.getElementById("restart").style.display = "none";
  showQuestion();
};

showQuestion();