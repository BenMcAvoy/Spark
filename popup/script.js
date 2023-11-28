prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
document.body.setAttribute("data-bs-theme", prefersDarkMode ? "dark" : "light");

chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
  let url = tabs[0].url;

  console.log(url);
});
