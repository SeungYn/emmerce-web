import browserStorage from '@/db';
import { ServerErrorRes } from '@/service/types/error';
import { COOKIE_OPTIONS, TOKEN_NAME } from '@/util/constants/auth';
import {
  AuthTokenErrorException,
  GlobalErrorException,
} from '@/util/lib/exception';
import axios, {
  AxiosError,
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
    const token = localStorage.getItem(TOKEN_NAME.access);
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }

    if (req.url === '/auth/reissue') {
      req.headers.RefreshToken = browserStorage.local.get(TOKEN_NAME.refesh);
    }
    return req;
  });

  axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (error) => {
      console.log(error);
      if (axios.isAxiosError(error)) {
        let { config, response } = error as AxiosError<ServerErrorRes>;
        const errRes: ServerErrorRes | string = response?.data.message
          ? response.data
          : '알 수 없는 에러발생!';

        if (typeof errRes === 'string') {
          // 서버에서 정의된 에러를 보내주는 경우가 아닐 때
          throw new GlobalErrorException(errRes);
        }

        const flag =
          response?.status === 610
            ? true
            : response?.status === 599
            ? true
            : false;
        // 610, 599가 아니면 에러 발생 599가 생긴이유가 NextRouteHandler로 api를 작성시 599 이상 번호를 status로 작성할 수 없기 때문
        if (!flag) {
          throw new GlobalErrorException(errRes);
        }
        if (response?.status === 599) {
          if (response?.data?.status !== 610)
            throw new GlobalErrorException(errRes);
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
      browserStorage.local.set(TOKEN_NAME.access, accessToken);
      browserStorage.local.set(TOKEN_NAME.refesh, headers.refreshtoken);
      browserStorage.cookie.setCookie(TOKEN_NAME.access, accessToken, {
        'max-age': COOKIE_OPTIONS['max-age'],
      });
      browserStorage.cookie.setCookie(
        TOKEN_NAME.refesh,
        headers.authorization,
        {
          'max-age': COOKIE_OPTIONS['max-age'],
        }
      );

      return accessToken;
    } catch (e) {
      console.log('토큰 재발급 처리 못 함');
      browserStorage.cookie.deleteCookie(TOKEN_NAME.access);
      browserStorage.cookie.deleteCookie(TOKEN_NAME.refesh);
      browserStorage.local.remove(TOKEN_NAME.access);
      browserStorage.local.remove(TOKEN_NAME.refesh);

      if (axios.isAxiosError(e)) {
        axiosInstance.authErrorEventBus?.notify();
        throw new AuthTokenErrorException('토큰 에러');
      }
      axiosInstance.authErrorEventBus?.notify();
      throw new AuthTokenErrorException('토큰 에러');
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
