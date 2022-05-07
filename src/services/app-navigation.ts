import { configuration } from '../configuration/configuration';
import { ChromeTabsService } from './chrome-tab';
import Tab = chrome.tabs.Tab;

export class AppNavigationService {
  public static url = configuration.routes.baseUrl;

  public static openExtensionTab(page: string): Promise<Tab> {
    return ChromeTabsService.openExtensionTab({
      url: `${AppNavigationService.url}#/${page}`
    });
  }

  public static openHomePage(): Promise<Tab> {
    const homePage = configuration.routes.pages.home;

    return AppNavigationService.openExtensionTab(homePage);
  }
}
