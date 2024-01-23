import browserStorage from '@/db';
import { ServerErrorRes } from '@/service/types/error';
import {
  GlobalErrorException,
  RefreshTokenErrorException,
} from '@/util/lib/exception';
import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

type ReIssueObj = {
  isWait: boolean;
  reRequestWaitQueue: (() => void)[];
  onReRequest: () => void;
  pushToReRequestWaitQueue: (
    axiosConfig: InternalAxiosRequestConfig,
    axios: AxiosInstance
  ) => Promise<AxiosResponse<any>>;
};

export interface CustomAxiosInstance extends AxiosInstance {
  reissue?: () => Promise<string>;
  authErrorEventBus?: AuthErrorEventBus;
}

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

// export const axiosInstance = axios.create({
//   baseURL: endPoint,
//   withCredentials: true,
// });

export const createAxiosInstance = (baseURL: string) => {
  const axiosInstance: CustomAxiosInstance = axios.create({
    baseURL,
    withCredentials: true,
  });
  axiosInstance.reissue = reissue;
  axiosInstance.authErrorEventBus = new AuthErrorEventBus();

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
        const flag =
          response?.status === 610
            ? true
            : response?.status === 599
            ? true
            : false;
        // 610, 599가 아니면 에러 발생 599가 생긴이유가 NextRouteHandler로 api를 작성시 599 이상 번호를 status로 작성할 수 없기 때문
        if (!flag) {
          throw new GlobalErrorException(error.message);
        }
        if (response?.status === 599) {
          if (response?.data?.status !== 610)
            throw new GlobalErrorException(error.message);
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
          console.log('쌓여진 요청들');
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
        axiosInstance.authErrorEventBus?.notify();
        throw new RefreshTokenErrorException(
          e.response?.data as ServerErrorRes
        );
      }
      axiosInstance.authErrorEventBus?.notify();
      throw new GlobalErrorException({
        message: (e as any).message,
        status: 699,
      });
    }
  }

  return axiosInstance;
};

class AuthErrorEventBus {
  private callback: null | (() => void) = null;

  listen(callback: () => void) {
    this.callback = callback;
  }

  notify() {
    this.callback?.();
  }
}
