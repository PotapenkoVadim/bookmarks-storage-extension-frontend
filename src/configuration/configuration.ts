import packagejson from '../../package.json';

export const configuration = {
  appName: 'BookmarksStorage',
  version: packagejson.version,
  routes: {
    baseUrl: '/main.html',
    pages: {
      home: 'home'
    }
  }
};
