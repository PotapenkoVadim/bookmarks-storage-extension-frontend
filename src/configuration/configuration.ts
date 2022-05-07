import packagejson from '../../package.json';

export const configuration = {
  appName: packagejson.name,
  version: packagejson.version,
  routes: {
    baseUrl: '/main.html',
    pages: {
      home: 'home'
    }
  }
};
