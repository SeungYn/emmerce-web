import { Storage } from './storage';

export default class LocalStorage implements Storage {
  get(key: string) {
    return localStorage.getItem(key);
  }

  set(key: string, value: string) {
    localStorage.set(key, value);
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }
}
