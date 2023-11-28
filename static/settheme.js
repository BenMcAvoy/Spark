prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
document.body.setAttribute("data-bs-theme", prefersDarkMode ? "dark" : "light");
