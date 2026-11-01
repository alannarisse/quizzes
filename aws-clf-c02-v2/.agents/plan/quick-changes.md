On the mock quiz only, let's change the flow.
The previous and next questions should go away on the question screens. just leave the 'new quiz' button and 'finish and review' also the jump to question should remain.

The major differences will be:
- once they choose an answer, they are stuck with that answer for the remainder of the quiz. 
- The sound should play, and if they answered correctly, the box shadow color (.answer:has(input:checked) ) should be green (var --ok) instead of orange (var --wall).
- if they choose 'flag for review' it should forward them to the next question.
- they can only have the option for 'flag for review' if they haven't chosen an answer.
- Flag for review should be renamed to 'skip this for now'
- once they choose an answer, it should show then a 'review answer' button that takes them to a new 'screen' that says 'you chose correctly' in green text or 'you chose incorrectly' in red text. Whether they got the answer right or wrong, they should see the answer they choose, and under it, see the text for why answers were right 'explanation or wrong 'incorrect_explanations'. then text that says 'You have x out of 10 wrong answers so far.' There should be a 'next' button so that they can go to the next question.
- If they get 10 questions wrong, they should be given a screen that says 'sorry, you did not pass the test, would you like to try again?' yes will take them to a fresh new mock quiz with randomly scrambled questions, 'no' should take them to the screen that gives them the option of mock quiz or study quiz.
- once they get to the end of the quiz, if they are still passing, it should show them a list of any questions they clicked 'skip this for now' on. they should be able to go through these in order to finish the exam.
- The last page should say 'you've passed!' play the passed-test.mp4 sound and have text that tells them what their final score was. Give them the option to see more quizzes (https://alannarisse.github.io/quizzes/). take another mock quiz, go to the study quiz, or copy the link to this quiz to share with others.
- One more small addition, the footer should have a link (before the official AWS exam guide) that says 'Quizzes Home' that takes them to https://alannarisse.github.io/quizzes/

