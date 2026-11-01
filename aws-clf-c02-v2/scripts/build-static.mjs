import { cp, mkdir, rm, readFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const source = new URL('../public/quiz/', import.meta.url);
const output = new URL('../dist/', import.meta.url);

// The React route only redirects to this standalone quiz. Publish the quiz
// directly, with relative URLs so it also works in a hosting subdirectory.
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(source, output, {
  recursive: true,
  filter: (path) => !path.endsWith('.test.mjs') && !path.endsWith('README.md'),
});
await cp(new URL('../public/favicon.ico', import.meta.url), new URL('favicon.ico', output));
await cp(new URL('../public/robots.txt', import.meta.url), new URL('robots.txt', output));

const bank = JSON.parse(await readFile(new URL('questions.json', output), 'utf8'));
for (const question of bank) {
  await access(new URL(`images/${question.image_filename}`, output));
}
for (const name of ['correct.wav', 'incorrect.wav', 'passed-test.m4a']) {
  await access(new URL(`sounds/${name}`, output));
}
console.log(`Static quiz built: ${fileURLToPath(output)} (${bank.length} questions)`);
