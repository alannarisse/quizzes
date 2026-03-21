# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a collection of static quiz applications for various certification exams and practice tests. The project contains multiple independent quiz modules, each with its own HTML, CSS, and JavaScript files. The quizzes include:

- **Oregon DMV Practice Test** (`dmv-practice/`)
- **CAPM (Certified Associate in Project Management)** (`capm-practice/`)
- **ISTQB Foundation Level** (`istqb-found/`)
- **ParaPro Practice Test** (`parapro-practice/`)
- **Wine and Food Pairing** (`wine-and-food-pairing/`)
- **Medical Terminology** (`medical-terminology/`)

## Architecture

### Quiz Application Structure

Each quiz module follows a similar pattern:

1. **HTML file** (`index.html`) - Contains the UI structure with:
   - Question display area
   - Answer buttons
   - Navigation controls (Previous/Next/Restart)
   - Progress indicator
   - Footer with links

2. **JavaScript file** (`script.js` or `quiz.js`) - Contains:
   - Question data embedded directly in the code (as JavaScript arrays or objects)
   - Quiz state management using `localStorage` for persistence
   - Answer validation logic
   - Progress tracking (score, wrong answers, incomplete)
   - Navigation handlers

3. **CSS file** (`style.css` or inline styles) - Provides styling for the quiz interface

### Key Implementation Details

**State Management:**
- All quizzes use `localStorage` to persist user progress across page refreshes
- State typically includes: `currentQuestion`, `score`, `wrong`, `answersGiven`
- State is saved after every user action and restored on page load

**Question Data Structure:**
Most quizzes use a similar question object format:
```javascript
{
  "id": 1,
  "question": "Question text?",
  "answers": ["Option A", "Option B", "Option C", "Option D"],
  "correct_choice": "Option B",
  "explanation": "Explanation text",
  "image_filename": "image.png",
  "web_link": "https://reference-link.com"
}
```

**Answer Shuffling:**
- DMV and CAPM quizzes shuffle answer options on display to prevent memorization
- ISTQB quiz does not shuffle answers

**Navigation:**
- Previous/Next buttons allow users to navigate between questions
- Restart button clears state and restarts the quiz
- Questions can be revisited, and previously given answers are displayed

**Feedback:**
- Immediate feedback after answering (correct/incorrect)
- Display of correct answer and explanation
- Visual indicators (✅ for correct, ❌ for incorrect)

## Development

### No Build Process

This is a static site with no build tools, package managers, or dependencies. All files are served directly.

### Local Development

Simply open any `index.html` file in a browser. For testing:
- Navigate to a quiz directory and open `index.html`
- Changes to JavaScript/CSS require a browser refresh
- Use browser DevTools to inspect `localStorage` for debugging state

### File Organization

```
/
├── index.html              # Main landing page with links to all quizzes
├── main.css                # Shared styles for the landing page
├── images/                 # Shared images used across quizzes
├── dmv-practice/
│   ├── index.html
│   ├── script.js          # Questions embedded in JS
│   ├── style.css
│   └── images/            # Quiz-specific images
├── capm-practice/
│   ├── index.html
│   ├── script.js
│   └── *.json             # Question data files (not loaded by app)
├── istqb-found/
│   ├── index.html
│   ├── quiz.js
│   └── questions.json     # Question data files (not loaded by app)
└── [other quiz directories follow similar pattern]
```

### Adding or Modifying Questions

Questions are embedded directly in the JavaScript files, not loaded from external JSON files. To modify:

1. Open the appropriate `script.js` or `quiz.js` file
2. Locate the `questions` or `quizData.questions` array
3. Edit the question objects directly
4. Ensure the structure matches the existing format
5. Refresh the browser to test

**Note:** JSON files in some directories (e.g., `capm_practice_questions.json`) are reference data but are NOT used by the live application. The questions are hard-coded in the JavaScript files.

## Common Patterns

### localStorage Keys
- DMV: `dmvQuizState`
- CAPM: `capmQuizState`
- ISTQB: Uses individual state variables without a unified key

### Answer Selection
- DMV/CAPM: Answers are shuffled; correct answer is matched by string value
- ISTQB: Answers are not shuffled; correct answer is identified by index

### Progress Tracking
- DMV: Tracks correct, wrong, and "incomplete" (questions skipped)
- CAPM: Tracks correct and wrong
- ISTQB: Tracks score only

### Image References
Most quizzes reference images using relative paths like `images/filename.png`. Images are stored either in a shared `/images` directory or in quiz-specific subdirectories.

## Known Issues and Quirks

1. **DMV Quiz:** The "incomplete" counter is mentioned in code but not fully implemented in the UI logic
2. **CAPM Quiz:** Contains many placeholder questions (Q11-Q50) that need real content
3. **ISTQB Quiz:** Uses a different state management approach (individual variables instead of unified object)
4. **JSON Files:** Several directories contain `.json` files with question data, but these are NOT loaded by the application - questions are hard-coded in JavaScript

## Deployment

This is a static site that can be deployed to any web host that serves HTML/CSS/JS files:
- GitHub Pages
- Netlify
- Vercel
- Any traditional web hosting

Simply upload all files while maintaining the directory structure.
