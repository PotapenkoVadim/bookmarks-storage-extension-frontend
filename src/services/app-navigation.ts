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

  public static openAboutPage(): Promise<Tab> {
    const aboutPage = configuration.routes.pages.about;

    return AppNavigationService.openExtensionTab(aboutPage);
  }

  public static openFAQPage(): Promise<Tab> {
    const FAQPage = configuration.routes.pages.faq;

    return AppNavigationService.openExtensionTab(FAQPage);
  }
}
