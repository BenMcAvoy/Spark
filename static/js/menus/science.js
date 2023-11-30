export function mathsSetup() {
  chrome.contextMenus.create({
    id: "sparkMenu",
    title: "Spark tools",
    contexts: ["page"]
  });

  chrome.contextMenus.create({
    id: "sparkQuestionGet",
    parentId: "sparkMenu",
    title: "Get question",
    contexts: ["page"]
  });

  chrome.contextMenus.create({
    id: "sparkSelectPatch",
    parentId: "sparkMenu",
    title: "Patch selection",
    contexts: ["page"]
  });
}
