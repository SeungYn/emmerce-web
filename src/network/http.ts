import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://emmerce.duckdns.org',
  withCredentials: true,
});

axiosInstance.interceptors.request.use((req) => {
  const token = localStorage.getItem('access-token');
  req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export class HttpServer {
  constructor(private baseUrl: string) {}

  async fetch<R>(url: string, option: RequestInit) {
    const res = await fetch(`${this.baseUrl}${url}`, {
      ...option,
      headers: {
        ...option.headers,
      },
    });

    let data: R;
    try {
      data = (await res.json()) as NonNullable<R>;
    } catch (err) {
      console.log('json error', err);
    }

    if (res.status > 299 || res.status < 200) {
      if (res.status === 401) {
        console.log('401 error');
        throw new Error('인증 에러');
      }
      console.log('res result : ', res.ok, res);
      console.log(await res.json());
      throw new Error('에러에러');
    }

    return data!;
  }
}

export const fetchInstance = new HttpServer('https://emmerce.duckdns.org');
