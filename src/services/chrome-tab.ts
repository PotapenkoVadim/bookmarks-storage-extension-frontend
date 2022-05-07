import Tab = chrome.tabs.Tab;
import CreateProperties = chrome.tabs.CreateProperties;

export class ChromeTabsService {
  public static openExtensionTab(params: CreateProperties): Promise<Tab> {
    return new Promise((resolve) => {
      chrome.tabs.create({ ...params, url: chrome.runtime.getURL(params.url) }, (tab) => resolve(tab));
    });
  }
}
