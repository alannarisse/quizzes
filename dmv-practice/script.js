const questions = [
  {
    "id": 1,
    "question": "A solid yellow line on your side of the roadway means:",
    "answers": [
      "You may pass carefully",
      "Do not pass",
      "Passing is allowed at night only",
      "Passing is allowed if no traffic is coming"
    ],
    "correct_choice": "Do not pass",
    "explanation": "A solid yellow line on your side means no passing is allowed.",
    "image_filename": "solid-yellow-you.svg",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 2,
    "question": "At a four-way stop, if two vehicles stop at the same time, who goes first?",
    "answers": [
      "The vehicle on the left",
      "The vehicle on the right",
      "The larger vehicle",
      "The vehicle turning left"
    ],
    "correct_choice": "The vehicle on the right",
    "explanation": "At a four-way stop, the vehicle on the right has the right-of-way if both arrive at the same time.",
    "image_filename": "four-way-you-left.svg",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 3,
    "question": "A flashing red traffic signal at an intersection means:",
    "answers": [
      "Slow down and yield",
      "Stop, then proceed when safe",
      "Go straight through",
      "Traffic signal is malfunctioning"
    ],
    "correct_choice": "Stop, then proceed when safe",
    "explanation": "A flashing red light means the same as a stop sign.",
    "image_filename": "flashing-red.svg",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 4,
    "question": "What is the maximum speed limit on most Oregon interstate highways, unless posted otherwise?",
    "answers": [
      "55 mph",
      "60 mph",
      "65 mph",
      "70 mph"
    ],
    "correct_choice": "65 mph",
    "explanation": "The maximum speed limit on most Oregon interstates is 65 mph unless otherwise posted.",
    "image_filename": "interstate-speed-limit.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 5,
    "question": "When must headlights be turned on?",
    "answers": [
      "From sunset to sunrise",
      "Any time visibility is less than 1,000 feet",
      "When using windshield wipers",
      "All of the above"
    ],
    "correct_choice": "All of the above",
    "explanation": "Headlights are required at night, in poor visibility, and when wipers are used.",
    "image_filename": "headlights.svg",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 6,
    "question": "A flashing yellow arrow means:",
    "answers": [
      "Stop immediately",
      "Proceed with caution and yield before turning",
      "Protected left turn only",
      "No turn allowed"
    ],
    "correct_choice": "Proceed with caution and yield before turning",
    "explanation": "A flashing yellow arrow allows a turn after yielding to oncoming traffic.",
    "image_filename": "flashing-yellow-arrow.svg",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 7,
    "question": "When approaching a stopped school bus with flashing red lights on a two-lane road, you must:",
    "answers": [
      "Slow down and pass carefully",
      "Stop and remain stopped until the lights stop flashing",
      "Stop only if children are crossing",
      "Honk and pass"
    ],
    "correct_choice": "Stop and remain stopped until the lights stop flashing",
    "explanation": "Oregon law requires all drivers to stop for a school bus with flashing red lights.",
    "image_filename": "school-bus-flashing.svg",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 8,
    "question": "The legal blood alcohol concentration (BAC) limit for drivers age 21+ in Oregon is:",
    "answers": [
      "0.05%",
      "0.08%",
      "0.10%",
      "Zero tolerance"
    ],
    "correct_choice": "0.08%",
    "explanation": "In Oregon, the legal limit for drivers age 21+ is 0.08% BAC.",
    "image_filename": "bac_limit.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 9,
    "question": "If your vehicle begins to skid, you should:",
    "answers": [
      "Slam on the brakes",
      "Turn the steering wheel in the direction you want the car to go",
      "Turn opposite the skid",
      "Accelerate quickly"
    ],
    "correct_choice": "Turn the steering wheel in the direction you want the car to go",
    "explanation": "Steer in the direction of the skid to regain control.",
    "image_filename": "skid_control.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 10,
    "question": "What does a triangular red and white sign mean?",
    "answers": [
      "Stop",
      "Yield",
      "Wrong Way",
      "Railroad crossing"
    ],
    "correct_choice": "Yield",
    "explanation": "An upside-down triangle means yield to other traffic.",
    "image_filename": "yield_sign.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 11,
    "question": "Sample question 11?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_11.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 12,
    "question": "Sample question 12?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_12.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 13,
    "question": "Sample question 13?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_13.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 14,
    "question": "Sample question 14?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_14.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 15,
    "question": "Sample question 15?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_15.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 16,
    "question": "Sample question 16?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_16.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 17,
    "question": "Sample question 17?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_17.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 18,
    "question": "Sample question 18?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_18.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 19,
    "question": "Sample question 19?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_19.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 20,
    "question": "Sample question 20?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_20.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 21,
    "question": "Sample question 21?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_21.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 22,
    "question": "Sample question 22?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_22.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 23,
    "question": "Sample question 23?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_23.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 24,
    "question": "Sample question 24?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_24.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 25,
    "question": "Sample question 25?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_25.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 26,
    "question": "Sample question 26?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_26.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 27,
    "question": "Sample question 27?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_27.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 28,
    "question": "Sample question 28?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_28.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 29,
    "question": "Sample question 29?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_29.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 30,
    "question": "Sample question 30?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_30.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 31,
    "question": "Sample question 31?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_31.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 32,
    "question": "Sample question 32?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_32.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 33,
    "question": "Sample question 33?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_33.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 34,
    "question": "Sample question 34?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_34.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 35,
    "question": "Sample question 35?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_35.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 36,
    "question": "Sample question 36?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_36.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 37,
    "question": "Sample question 37?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_37.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 38,
    "question": "Sample question 38?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_38.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 39,
    "question": "Sample question 39?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_39.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 40,
    "question": "Sample question 40?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_40.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 41,
    "question": "Sample question 41?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_41.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 42,
    "question": "Sample question 42?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_42.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 43,
    "question": "Sample question 43?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_43.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 44,
    "question": "Sample question 44?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_44.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 45,
    "question": "Sample question 45?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_45.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 46,
    "question": "Sample question 46?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_46.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 47,
    "question": "Sample question 47?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_47.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 48,
    "question": "Sample question 48?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_48.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 49,
    "question": "Sample question 49?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_49.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  },
  {
    "id": 50,
    "question": "Sample question 50?",
    "answers": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correct_choice": "Option A",
    "explanation": "Explanation placeholder.",
    "image_filename": "image_50.png",
    "web_link": "https://www.oregon.gov/odot/forms/dmv/37.pdf"
  }
]


let savedState = JSON.parse(localStorage.getItem("dmvQuizState"));
let currentQuestion = savedState ? savedState.currentQuestion : 0;
let score = savedState ? savedState.score : 0;
let wrong = savedState ? savedState.wrong : 0;
let answersGiven = savedState ? savedState.answersGiven : {}; // store chosen answers

function saveState() {
  localStorage.setItem("dmvQuizState", JSON.stringify({ currentQuestion, score, wrong, answersGiven }));
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
    localStorage.removeItem("dmvQuizState");
    return;
  }

  const q = questions[currentQuestion];
  const shuffledAnswers = [...q.answers].sort(() => Math.random() - 0.5);
  const chosen = answersGiven[q.id] || null;

  document.getElementById("quiz").innerHTML = `
    <div class="question">
    <img class="qimg" src="images/${q.image_filename}"><br class="break"/>
    Q${q.id}: ${q.question}
    
    </div>
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