export async function execute(func) {
 const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
 const results = await chrome.scripting.executeScript({
   target: { tabId: tab.id },
   func: func,
 });

 return results[0].result;
}
