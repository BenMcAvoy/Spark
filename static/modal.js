export async function showAlert(message) {
 const w = await chrome.windows.getCurrent();
 const w2 = await chrome.windows.create({
   url: `data:text/html,<title>Alert</title><p>${message}</p>`,
   type: 'popup',
   left: Math.floor(w.left + (w.width - 300) / 2),
   top: Math.floor(w.top + (w.height - 150) / 2),
   height: 150,
   width: 300,
 });

 return new Promise(resolve => {
   chrome.windows.onRemoved.addListener(onRemoved, {windowTypes: ['popup']});
   function onRemoved(id) {
     if (id === w2.id) {
       chrome.windows.onRemoved.removeListener(onRemoved);
       resolve();
     }
   }
 });
}
