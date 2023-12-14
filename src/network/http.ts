import browserStorage from '@/db';
import LocalStorage from '@/db/localstorage';
import { ServerErrorRes } from '@/service/types/error';
import { GlobalError, RefreshTokenError } from '@/util/lib/exception';
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

const endPoint =
  process.env.PRODUCTION_END_POINT ||
  process.env.NEXT_PUBLIC_PRODUCTION_END_POINT ||
  '';
const localEndPoint = 'http://localhost:8088';

//클라이언트 axios 인스턴스

type ReIssueObj = {
  isWait: boolean;
  reRequestWaitQueue: (() => void)[];
  onReRequest: () => void;
  pushToReRequestWaitQueue: (
    axiosConfig: InternalAxiosRequestConfig,
    axios: AxiosInstance
  ) => Promise<AxiosResponse<any>>;
};

const reissueObj: ReIssueObj = {
  isWait: false,
  reRequestWaitQueue: [],
  onReRequest() {
    for (const cb of this.reRequestWaitQueue) {
      cb();
    }
    this.reRequestWaitQueue = [];
  },
  pushToReRequestWaitQueue(axiosConfig, axios) {
    return new Promise((resolve) => {
      this.reRequestWaitQueue.push(() => {
        resolve(axios(axiosConfig));
      });
    });
  },
};

export const axiosInstance = axios.create({
  baseURL: endPoint,
  withCredentials: true,
});

axiosInstance.interceptors.request.use((req) => {
  const token = localStorage.getItem('access-token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  if (req.url === '/auth/reissue') {
    req.headers.RefreshToken = browserStorage.local.get('refresh-token');
  }
  return req;
});

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error) => {
    if (axios.isAxiosError(error)) {
      const { config, response } = error;
      //토큰 만료 외 에러
      if (response?.status !== 610) {
        throw new GlobalError(error.message);
      }

      if (!reissueObj.isWait) {
        // 첫 번쨰 재발급 요청 전 락
        reissueObj.isWait = true;
        const token = await reissue();
        if (token) {
          if (config && config.headers) {
            config.headers.Authorization = token;
          }
        }

        // 락을 해제하고 기존에 쌓인 요청들을 재요청
        reissueObj.isWait = false;
        console.log('쌓여진 요청들', reissueObj.reRequestWaitQueue);
        reissueObj.onReRequest();

        return axiosInstance(config!);
      }

      return reissueObj.pushToReRequestWaitQueue(config!, axiosInstance);
    }
  }
);

async function reissue() {
  console.log('토큰 재발급 처리중');
  try {
    const { headers } = await axiosInstance.post('/auth/reissue');
    const accessToken = headers.authorization.split(' ')[1];
    browserStorage.local.set('access-token', accessToken);
    browserStorage.local.set('refresh-token', headers.refreshtoken);
    browserStorage.cookie.setCookie('access-token', accessToken, {
      'max-age': 3600,
    });
    browserStorage.cookie.setCookie('refresh-token', headers.authorization, {
      'max-age': 60 * 60 * 24 * 7,
    });

    return accessToken;
  } catch (e) {
    console.log('토큰 재발급 처리중 에러: ');
    browserStorage.cookie.deleteCookie('access-token');
    browserStorage.cookie.deleteCookie('refresh-token');
    browserStorage.local.remove('access-token');
    browserStorage.local.remove('refresh-token');

    if (axios.isAxiosError(e)) {
      throw new RefreshTokenError(e.response?.data as ServerErrorRes);
    }
    throw new GlobalError({ message: (e as any).message, status: 699 });
  }
}

// 서버 fetch 클래스

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
      console.log('json error');
    }

    if (res.status > 299 || res.status < 200) {
      if (res.status === 401) {
        console.log('401 error');
        throw new Error('인증 에러');
      }

      throw new Error('에러에러');
    }

    return data!;
  }
}

export const fetchInstance = new HttpServer(endPoint);
