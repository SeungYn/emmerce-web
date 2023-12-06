import CookiStorage from './cookieStorage';
import LocalStorage from './localstorage';

const browserStorage = {
  local: new LocalStorage(),
  cookie: new CookiStorage(),
};

export default browserStorage;
