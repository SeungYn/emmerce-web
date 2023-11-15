import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:8088',
  withCredentials: true,
});

axiosInstance.interceptors.request.use((req) => {
  const token = localStorage.getItem('access-token');
  req.headers.Authorization = `Baerer ${token}`;
  return req;
});

class HttpServer {
  constructor(private baseUrl: string) {}

  async fetch<R>(url: string, option: RequestInit) {
    const res = await fetch(`${this.baseUrl}${url}`, {
      ...option,
      headers: {
        ...option.headers,
      },
    });

    let data;
    try {
      data = (await res.json()) as NonNullable<R>;
    } catch (err) {
      console.log('json error', err);
    }
    if (res.status > 299 || res.status < 200) {
      if (res.status === 401) {
        console.log('401 error');
        return;
      }
    }

    return data!;
  }
}

export const fetchInstance = new HttpServer('http://localhost:8088');
