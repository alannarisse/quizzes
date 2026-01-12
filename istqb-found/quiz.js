// --------------------
// QUIZ DATA (PASTE JSON QUESTIONS HERE)
// --------------------
const quizData = {
  quizTitle: "ISTQB CTFL Practice Exam",
  "questions": [
{"id":1,"question":"Which statement best describes testing?","options":["Executing software to show it works","Executing software to find defects","Reviewing code to ensure correctness","Proving software is defect-free"],"correctAnswer":1,"explanation":"Testing is performed to find defects in the software; it demonstrates their presence rather than proving their absence."},
{"id":2,"question":"Which of the following is a test objective?","options":["Prevent all defects","Demonstrate software meets user needs","Eliminate the need for maintenance","Replace debugging"],"correctAnswer":1,"explanation":"The main objective of testing is to show that the software meets user needs and requirements."},
{"id":3,"question":"Why is testing necessary?","options":["To prove there are no defects","To improve quality and reduce risk","To ensure 100% code coverage","To replace requirements analysis"],"correctAnswer":1,"explanation":"Testing helps improve software quality and reduces the risk of failures in production."},
{"id":4,"question":"Which statement is TRUE?","options":["Testing can prove the absence of defects","Testing shows software is fit for use","Testing guarantees customer satisfaction","Testing eliminates all risk"],"correctAnswer":1,"explanation":"Testing provides information about fitness for purpose but cannot prove absence of defects."},
{"id":5,"question":"Which is an example of a defect?","options":["A missing requirement","A coding error","A user complaint","A failed test case"],"correctAnswer":1,"explanation":"A defect is a flaw in the software, such as a coding error, that may cause incorrect behavior."},
{"id":6,"question":"Which principle states that exhaustive testing is impossible?","options":["Testing shows presence of defects","Defect clustering","Exhaustive testing","Early testing"],"correctAnswer":2,"explanation":"Exhaustive testing of all possible inputs and paths is impossible for all but trivial programs."},
{"id":7,"question":"Defect clustering means:","options":["Defects occur randomly","Most defects are found in a small number of modules","Defects only occur in complex systems","Testing should focus on simple features"],"correctAnswer":1,"explanation":"Most defects tend to be concentrated in a few modules, not evenly distributed across the software."},
{"id":8,"question":"The pesticide paradox refers to:","options":["Too many testers","Repeating the same tests no longer finds new defects","Using too many tools","Testing too late"],"correctAnswer":1,"explanation":"Repeated execution of the same test cases stops finding new defects; test cases need to evolve."},
{"id":9,"question":"Early testing helps to:","options":["Increase development cost","Reduce defect removal cost","Delay project schedules","Eliminate the need for reviews"],"correctAnswer":1,"explanation":"Finding defects early in the development lifecycle reduces the cost of fixing them."},
{"id":10,"question":"Absence-of-errors fallacy means:","options":["No defects exist","Software is bug-free","Software may still be unusable despite few defects","Testing is unnecessary"],"correctAnswer":2,"explanation":"Even if no defects are found, the software may not meet user needs or expectations."},
{"id":11,"question":"Which testing level focuses on individual components?","options":["System testing","Acceptance testing","Integration testing","Component testing"],"correctAnswer":3,"explanation":"Component testing (or unit testing) tests each individual module or component in isolation."},
{"id":12,"question":"Which testing level evaluates the complete integrated system?","options":["Unit testing","Integration testing","System testing","Component testing"],"correctAnswer":2,"explanation":"System testing validates that the fully integrated software meets the specified requirements."},
{"id":13,"question":"Acceptance testing is primarily focused on:","options":["Finding defects","Developer confidence","Business needs and user requirements","Code structure"],"correctAnswer":2,"explanation":"Acceptance testing ensures the system fulfills business requirements and is ready for release."},
{"id":14,"question":"Which lifecycle model emphasizes early and continuous testing?","options":["Waterfall","Agile","V-model","Big Bang"],"correctAnswer":2,"explanation":"The V-model ties testing activities to each development stage and encourages early testing."},
{"id":15,"question":"Which test activity is performed during requirements analysis?","options":["Test execution","Test closure","Test planning and review","Defect fixing"],"correctAnswer":2,"explanation":"During requirements analysis, tests are planned and reviews are performed to understand what to test."},
{"id":16,"question":"Which test type focuses on functional requirements?","options":["Structural testing","Non-functional testing","Functional testing","Maintenance testing"],"correctAnswer":2,"explanation":"Functional testing verifies that software functions according to the specified requirements."},
{"id":17,"question":"Performance testing is an example of:","options":["Functional testing","Structural testing","Non-functional testing","Regression testing"],"correctAnswer":2,"explanation":"Performance testing evaluates speed, responsiveness, and stability — which are non-functional attributes."},
{"id":18,"question":"Regression testing is used to:","options":["Test new features only","Confirm fixes work","Ensure unchanged parts still work","Validate requirements"],"correctAnswer":2,"explanation":"Regression testing verifies that recent changes have not negatively affected existing functionality."},
{"id":19,"question":"Smoke testing is typically used to:","options":["Perform detailed testing","Verify critical functionality","Replace regression testing","Test performance"],"correctAnswer":1,"explanation":"Smoke testing quickly checks that the main functionality works before deeper testing is done."},
{"id":20,"question":"Maintenance testing occurs:","options":["Before release","After deployment","Only during development","During acceptance testing"],"correctAnswer":1,"explanation":"Maintenance testing is done after the software is deployed to ensure updates or fixes work as expected."},
{"id":21,"question":"Static testing does NOT include:","options":["Reviews","Walkthroughs","Inspections","Test execution"],"correctAnswer":3,"explanation":"Static testing is performed without executing the code; test execution is dynamic testing."},
{"id":22,"question":"Which artifact is typically reviewed during static testing?","options":["Executable code only","Test results","Requirements and design documents","Runtime logs"],"correctAnswer":2,"explanation":"Static testing focuses on artifacts such as requirements, design, and code without executing the program."},
{"id":23,"question":"Which role leads a formal inspection?","options":["Author","Moderator","Tester","Manager"],"correctAnswer":1,"explanation":"The moderator facilitates formal inspections and ensures the process is followed correctly."},
{"id":24,"question":"What is a benefit of static testing?","options":["Requires executable software","Finds defects early","Replaces dynamic testing","Is fully automated"],"correctAnswer":1,"explanation":"Static testing identifies defects early, reducing the cost of fixing them later."},
{"id":25,"question":"Walkthroughs are typically:","options":["Formal and structured","Led by a moderator","Informal and author-led","Tool-based"],"correctAnswer":2,"explanation":"Walkthroughs are informal reviews led by the author to gain feedback from peers."},
{"id":26,"question":"Equivalence partitioning divides input data into:","options":["Equal ranges for performance","Valid and invalid classes","Defect clusters","Code paths"],"correctAnswer":1,"explanation":"Equivalence partitioning groups inputs so that test cases cover each class once, reducing redundant tests."},
{"id":27,"question":"Boundary value analysis focuses on:","options":["Typical values","Extreme values","Code coverage","Documentation"],"correctAnswer":1,"explanation":"Boundary value analysis tests the values at the edges of input ranges, where defects are more likely."},
{"id":28,"question":"Decision table testing is useful when:","options":["Many input combinations exist","Only one input exists","Performance matters","Integration is simple"],"correctAnswer":0,"explanation":"Decision tables systematically cover different combinations of conditions to ensure correct outcomes."},
{"id":29,"question":"State transition testing is applied when:","options":["System behavior depends on previous state","Only inputs matter","Performance must be tested","Static documents are reviewed"],"correctAnswer":0,"explanation":"State transition testing examines behavior when outputs depend on the current state and transitions between states."},
{"id":30,"question":"Use case testing is derived from:","options":["Requirements and user scenarios","Source code","Defect logs","Test scripts"],"correctAnswer":0,"explanation":"Use case testing validates that the system behaves correctly according to user interactions described in requirements."},
{"id":31,"question":"Which technique is a black-box test design technique?","options":["Boundary value analysis","Statement coverage","Decision coverage","Path coverage"],"correctAnswer":0,"explanation":"Black-box techniques focus on inputs and expected outputs, not code structure."},
{"id":32,"question":"Which is a white-box test design technique?","options":["Equivalence partitioning","Statement coverage","Use case testing","Boundary value analysis"],"correctAnswer":1,"explanation":"White-box testing derives test cases from the internal code structure, such as statements or paths."},
{"id":33,"question":"Which test type evaluates system reliability under stress?","options":["Performance testing","Load testing","Stress testing","Functional testing"],"correctAnswer":2,"explanation":"Stress testing evaluates system behavior under extreme conditions beyond expected usage."},
{"id":34,"question":"Alpha testing is performed:","options":["By end-users in production","By developers in-house","After release","During regression testing"],"correctAnswer":1,"explanation":"Alpha testing is done in-house by developers or QA to catch defects before external user testing."},
{"id":35,"question":"Beta testing is conducted:","options":["Internally only","By selected end-users","By automation scripts","During static testing"],"correctAnswer":1,"explanation":"Beta testing is performed by real users in a production-like environment to find issues not caught internally."},
{"id":36,"question":"Test coverage measures:","options":["Percentage of requirements tested","Percentage of defects found","Percentage of code executed","Percentage of users satisfied"],"correctAnswer":2,"explanation":"Test coverage assesses which parts of the code have been exercised by tests, ensuring thoroughness."},
{"id":37,"question":"Defect severity indicates:","options":["Impact on the system","Probability of occurrence","Number of users affected","Complexity of fix"],"correctAnswer":0,"explanation":"Severity reflects the impact of a defect on the system’s operation or users, guiding prioritization."},
{"id":38,"question":"Defect priority indicates:","options":["Impact on the system","Order of fixing","Probability of defect","Complexity of fix"],"correctAnswer":1,"explanation":"Priority determines the order in which defects should be fixed based on business needs, not technical impact."},
{"id":39,"question":"A test plan includes:","options":["Code logic","Test objectives, scope, resources, schedule","Defect fixes","Automation scripts"],"correctAnswer":1,"explanation":"A test plan documents the approach, objectives, resources, schedule, and scope for testing activities."},
{"id":40,"question":"A test case specification includes:","options":["Project schedule","Test inputs, expected results, and execution steps","Requirements document","Release notes"],"correctAnswer":1,"explanation":"Test case specifications detail what to test, how to execute it, and the expected outcomes."},
{"id":41,"question":"Which is an objective of test execution?","options":["Design code","Find defects and verify fixes","Write requirements","Perform reviews"],"correctAnswer":1,"explanation":"Test execution is carried out to detect defects, validate fixes, and ensure software works as expected."},
{"id":42,"question":"Which is a typical exit criterion for testing?","options":["All code reviewed","All planned tests executed and critical defects fixed","All users trained","All requirements written"],"correctAnswer":1,"explanation":"Exit criteria define when testing can be considered complete, often when critical tests pass and major defects are fixed."},
{"id":43,"question":"Which is a typical entry criterion for testing?","options":["Requirements defined and code built","System in production","All defects found","End-users trained"],"correctAnswer":0,"explanation":"Entry criteria specify conditions that must be met before testing starts, like requirements and code availability."},
{"id":44,"question":"Which type of review is informal?","options":["Walkthrough","Inspection","Formal peer review","Acceptance review"],"correctAnswer":0,"explanation":"Walkthroughs are informal reviews, usually led by the author, to get early feedback."},
{"id":45,"question":"Which review is formal and follows defined procedures?","options":["Inspection","Walkthrough","Peer review","Ad-hoc review"],"correctAnswer":0,"explanation":"Inspections are formal, structured reviews that follow specific roles and checklists."},
{"id":46,"question":"Which is a benefit of independent testing?","options":["Reduced communication","Objectivity and fewer overlooked defects","Lower cost","Slower testing"],"correctAnswer":1,"explanation":"Independent testing provides objectivity, reducing bias and the likelihood of overlooked defects."},
{"id":47,"question":"Which tool is used for defect tracking?","options":["Word processor","Spreadsheet","Defect management tool","Compiler"],"correctAnswer":2,"explanation":"Defect management tools help log, track, and report defects efficiently throughout the lifecycle."},
{"id":48,"question":"Which tool is used for test automation?","options":["IDE","Version control","Automation tool","Document editor"],"correctAnswer":2,"explanation":"Automation tools execute tests automatically, compare results, and report failures."},
{"id":49,"question":"Which tool type is used for performance testing?","options":["Debugger","Profiler","Load and stress tool","IDE"],"correctAnswer":2,"explanation":"Load and stress testing tools simulate multiple users or high workloads to evaluate performance."},
{"id":50,"question":"Which tool supports static analysis?","options":["Profiler","Code review tool","Compiler","Debugger"],"correctAnswer":1,"explanation":"Static analysis tools examine code without executing it to find defects and enforce standards."}
]

  
};
// --------------------
// QUIZ STATE
// --------------------
let currentQuestionIndex = 0;
let score = 0;
let answered = false;

// --------------------
// DOM ELEMENTS
// --------------------
const quizTitle = document.getElementById("quiz-title");
const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("options-list");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const scoreText = document.getElementById("score-text");
const feedback = document.getElementById("feedback");
const explanation = document.getElementById("explanation");

// --------------------
// INIT
// --------------------
quizTitle.textContent = quizData.quizTitle;
loadQuestion();

nextBtn.addEventListener("click", nextQuestion);

// --------------------
// FUNCTIONS
// --------------------
function loadQuestion() {
  answered = false;
  nextBtn.disabled = true;
  feedback.textContent = "";
  feedback.className = "";
  explanation.textContent = "";
  explanation.classList.add("hidden");

  const currentQuestion = quizData.questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  optionsList.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const li = document.createElement("li");
    const button = document.createElement("button");

    button.textContent = option;
    button.className = "option-btn";
    button.onclick = () => handleAnswer(button, index);

    li.appendChild(button);
    optionsList.appendChild(li);
  });
}

function handleAnswer(button, selectedIndex) {
  if (answered) return;
  answered = true;

  const currentQuestion = quizData.questions[currentQuestionIndex];
  const correctIndex = currentQuestion.correctAnswer;
  const optionButtons = document.querySelectorAll(".option-btn");

  optionButtons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === correctIndex) {
      btn.classList.add("correct");
    }
  });

  if (selectedIndex === correctIndex) {
    score++;
    feedback.textContent = "Correct ✔";
    feedback.className = "correct";
  } else {
    button.classList.add("incorrect");
    feedback.textContent = "Incorrect ✖";
    feedback.className = "incorrect";
  }

  // Show explanation
  explanation.textContent = currentQuestion.explanation;
  explanation.classList.remove("hidden");

  nextBtn.disabled = false;
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.questions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  document.getElementById("question-container").classList.add("hidden");
  document.getElementById("controls").classList.add("hidden");
  resultContainer.classList.remove("hidden");

  scoreText.textContent = `You scored ${score} out of ${quizData.questions.length}`;
}