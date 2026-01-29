import createContextMenu from "@/createContextMenu";
import setupContextMenuHandler from "@/handlers/setupContextMenuHandler";

chrome.runtime.onInstalled.addListener(() => {
  createContextMenu();
});

setupContextMenuHandler();
