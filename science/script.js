import { execute } from '/static/executor.js';
import { showAlert } from '/static/modal.js';

console.log("Loaded Spark for Science");

document.getElementById('selectTextButton').addEventListener('click', async function() {
  execute(function() {
    document.body.style.userSelect = "text";
  })
});

document.getElementById('copyTextButton').addEventListener('click', async function() {
  const result = await execute(function(showAlert) {
    const paragraphs = document.querySelectorAll('[class*="_Question_"]>div>p');
    const hasImage = paragraphs[0].innerHTML.includes("img");
    const slicedParagraphs = [].slice.call(paragraphs, 1);

    var extractedText = "";
    slicedParagraphs.forEach((value) => {
      extractedText += value.innerText;
    })

    return extractedText
  });

  showAlert(result);
});
