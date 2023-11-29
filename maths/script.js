import { execute } from '/static/executor.js';

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
