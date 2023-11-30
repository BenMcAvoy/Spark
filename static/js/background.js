import { copyPastePatch, getQuestion } from "/science/implementations.js";

chrome.runtime.onInstalled.addListener(function () {
  // Parent menu
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
});

// Add a listener for the context menu item clicks
chrome.contextMenus.onClicked.addListener(function (info, tab) {
  switch (info.menuItemId) {
    case "sparkQuestionGet":
      console.log("Get question context menu item clicked");
      getQuestion();
      break;
    case "sparkSelectPatch":
      console.log("Patch selection context menu item clicked");
      copyPastePatch();
      break;
    default:
      console.log("Unknown context menu item clicked");
  }
});
