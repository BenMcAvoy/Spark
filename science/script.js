import { execute } from '/static/executor.js';
import { showAlert } from '/static/modal.js';

console.log("Loaded Spark for Science");

document.getElementById('selectTextButton').addEventListener('click', async function() {
  execute(function() {
    document.body.style.userSelect = "text";
  })
});

document.getElementById('copyTextButton').addEventListener('click', async function() {
  const result = await execute(function() {
    const text = document.querySelectorAll('[class*="_Question_"]>div>div>div>div')[0].textContent;

    return text;
  });

  showAlert(result);
});
