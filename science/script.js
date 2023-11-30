import { execute } from '/static/executor.js';
import { copy } from '/static/copy.js';

console.log("Loaded Spark for Science");

document.getElementById('copyPastePatch').addEventListener('click', async function() {
  execute(function() {
    document.body.style.userSelect = "text";
  })
});

document.getElementById('getQuestion').addEventListener('click', async function() {
  // TODO: Fix broken escapes.
  // e.g. `Ã—{\times }Ã—`
  //
  // TODO: Reduce selectiveness.
  // e.g. Don't select `Zoom`
  const result = await execute(function() {
    let text = "";

    const elements = document.querySelectorAll('[class*="_Question_"]>div>div>div>div');

    elements.forEach((element) => {
      text += `\n- ${element.textContent}`;
    });

    return text;
  });

  copy(result);
});
