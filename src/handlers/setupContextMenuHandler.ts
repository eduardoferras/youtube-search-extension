import { YOUTUBE_CONTEXT_MENU_ID } from "@/constants/contextMenu";
import getYoutubeSearchUrl from "@/utils/getYoutubeSearchUrl";
import openTab from "@/utils/openTab";

export default function setupContextMenuHandler() {
  chrome.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId === YOUTUBE_CONTEXT_MENU_ID && info.selectionText) {
      const youtubeSearchUrl = getYoutubeSearchUrl(info.selectionText);
      openTab(youtubeSearchUrl);
    }
  });
}
