import { YOUTUBE_CONTEXT_MENU_ID } from "@constants/contextMenu.ts";
import getYoutubeSearchUrl from "@utils/getYoutubeSearchUrl.ts";
import openTab from "@utils/openTab.ts";

export default function setupContextMenuHandler() {
  chrome.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId === YOUTUBE_CONTEXT_MENU_ID && info.selectionText) {
      const youtubeSearchUrl = getYoutubeSearchUrl(info.selectionText);
      openTab(youtubeSearchUrl);
    }
  });
}
