chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
  const url = tabs[0].url;

  const iframe = document.createElement("iframe");
  iframe.classList.add("w-100");
  iframe.classList.add("h-100");

  const topic = url.includes("science") ? "science" : url.includes("maths") ? "maths" : "error";
  iframe.setAttribute("src", `/${topic}/embed.html`);

  document.body.appendChild(iframe);
});
