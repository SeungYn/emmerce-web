import { Storage } from './storage';

export default class LocalStorage implements Storage {
  static translateToJSON(value: any) {
    return JSON.stringify(value);
  }

  static translateToValue<T>(value: string) {
    return JSON.parse(value) as T;
  }

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
