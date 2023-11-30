import { execute } from '/static/js/executor.js';
import { showModal } from '/static/js/modal.js';
import { copy } from '/static/js/copy.js';

export async function selectPatch() {
  console.log("Patch");

  execute(function() {
    document.body.style.userSelect = "text";
  });
}

export async function getQuestion() {
  // TODO: Fix broken escapes.
  // e.g. `Ã—{\times }Ã—`
  //
  // TODO: Reduce selectiveness.
  // e.g. Don't select `Zoom`
  const result = await execute(function() {
    const elements = [...document.querySelectorAll('[class*="_Question_"]>div>div>div>div')];
    const text = elements.map((element) => `${element.textContent}`).join(' - ');

    return text;
  });

  console.log("Running");

  if (typeof document !== 'undefined') {
    copy(result);
  } else {
    showModal(result);
  }
}
