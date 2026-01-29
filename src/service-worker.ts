import setupContextMenuHandler from "@handlers/setupContextMenuHandler.ts";
import createContextMenu from "@/createContextMenu.ts";

chrome.runtime.onInstalled.addListener(() => {
  createContextMenu();
});

setupContextMenuHandler();
