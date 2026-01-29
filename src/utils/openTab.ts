/**
 * Opens a new tab with the given URL.
 * @param {string} url - The URL to open in a new tab.
 */
export default function openTab(url: string): void {
  chrome.tabs.create({ url });
}
