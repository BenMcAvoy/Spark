import { execute } from '/static/executor.js';
import { copy } from '/static/copy.js';

console.log("Loading Spark for Maths");

document.getElementById('selectTextButton').addEventListener('click', async function() {
  execute(function() {
    document.body.style.userSelect = "text";
  })
});

document.getElementById('mathMLButton').addEventListener('click', async function() {
  execute(function() {
    document.querySelectorAll('span.katex-mathml').forEach(element => element.remove());
  })
});

document.getElementById('getQuestion').addEventListener('click', async function() {
  // TODO: Fix broken escapes.
  // e.g. `Ã—{\times }Ã—`
  //
  // TODO: Reduce selectiveness.
  // e.g. Don't select `Zoom`
  const result = await execute(function() {
    const elements = [...document.querySelectorAll('[class*="_Question_"]>div')];

    const text = elements.map((element) => `-${element.textContent}`).join('');

    return text;
  });

  console.log(result);

  copy(result);
});
