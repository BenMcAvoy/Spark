export async function showModal(message) {
  const url = chrome.runtime.getURL('/static/modal.html');

  const html = await fetch(url)
    .then((response) => response.text())
    .then((html) => html.replace(/{message}/, message));

  const win = await chrome.windows.getCurrent();
  const modal = await chrome.windows.create({
    url: `data:text/html,${html}`,
    type: 'popup',
    left: Math.floor(win.left + (win.width - 320) / 2),
    top: Math.floor(win.top + (win.height - 240) / 2),
    height: 240,
    width: 320,
  });

  return new Promise(resolve => {
    chrome.windows.onRemoved.addListener(onRemoved, {windowTypes: ['popup']});
    function onRemoved(id) {
      if (id === modal.id) {
        chrome.windows.onRemoved.removeListener(onRemoved);
        resolve();
      }
    }
  });
}
