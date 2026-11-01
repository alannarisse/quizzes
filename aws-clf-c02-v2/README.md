# The AWS CLF-C02 quiz show

This project was built with [Lovable](https://lovable.dev), Codex, and me, Alanna Risse.

It was originally created as a static javascript, html, css website. Loveable changed it to react when it helped me with the quizshow look, and Codex added a static build so I can host it on static servers.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## DreamHost static build

Run from this project directory:

```sh
npm run test:quiz
npm run build:dreamhost
```

This build only needs Node.js; `npm install` is not required for these two
commands. The quiz in `public/quiz/` is already standalone HTML, CSS, and
JavaScript. The React home page only redirects to it, so the static build
publishes the quiz directly without a React server or redirect.

Upload the **contents of `dist/dreamhost/`** into your DreamHost domain's web
directory or a subdirectory, for example `/quizzes/aws-clf-c02-v2/`:

```text
index.html
style.css
script.js
engine.mjs
questions.json
cloud-badge.svg
images/
sounds/
favicon.ico
robots.txt
```

All quiz asset URLs are relative, so both domain-root and subdirectory hosting
work. No Node.js process, database, or SPA rewrite rules are needed on DreamHost.
Google Fonts remains an external font service; the question bank, images, and
sound files are included locally. Progress stays in the visitor's localStorage.

Edit the quiz in `public/quiz/`, then rebuild and upload again. Do not edit
`dist/dreamhost/` directly. The build replaces that directory each time.
`npm run build` retains the original Lovable/TanStack server build.

To preview the static output locally:

```sh
python3 -m http.server 8000 --directory dist/dreamhost
```

Open `http://localhost:8000/`. Serve over HTTP rather than opening `index.html`
directly because the quiz fetches `questions.json`.
