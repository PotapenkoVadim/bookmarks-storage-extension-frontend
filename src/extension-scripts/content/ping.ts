import { AppType } from '../../enums';

chrome.runtime.onConnect.addListener(() => console.log(`run application: ${AppType.EXTENSION}`));
