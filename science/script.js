import { selectPatch, getQuestion } from '/science/implementations.js';

console.log("Loaded Spark for Science");

document.getElementById('selectPatch').addEventListener('click', async function() {
  selectPastePatch();
});

document.getElementById('getQuestion').addEventListener('click', async function() {
  getQuestion();
});
