import { ReadonlyURLSearchParams } from 'next/navigation';

export default class NextURLSearchParams {
  private urlSearchParams: URLSearchParams;
  constructor(useSearchParams: ReadonlyURLSearchParams) {
    this.urlSearchParams = new URLSearchParams(useSearchParams);
  }

  setQueryString(key: string, value: string) {
    this.urlSearchParams.set(key, value);
    return this.urlSearchParams.toString();
  }

  deleteQueryString(key: string) {
    this.urlSearchParams.delete(key);
    return this.urlSearchParams.toString();
  }

  getQueryString(key: string) {
    return this.urlSearchParams.get(key);
  }

  toString() {
    return this.urlSearchParams.toString();
  }
}
