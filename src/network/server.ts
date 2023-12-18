import { Tokens } from '@/service/types/auth';
import { ServerErrorRes } from '@/service/types/error';
import { GlobalErrorException } from '@/util/lib/exception';

export class HttpServer {
  private isWait = false;
  private reRequestWaitQueue: ((tokens: Tokens) => void)[] = [];

  constructor(private baseUrl: string) {}

  async fetch<R>(url: string, option: RequestInit, token?: Tokens): Promise<R> {
    const res = await fetch(`${this.baseUrl}${url}`, {
      ...option,
      headers: {
        ...option.headers,
      },
    });

    let data: R;

    try {
      data = await res.json();
    } catch (err) {
      console.log('json error', url);
    }
    if (res.status > 299 || res.status < 200) {
      const errorData = data! as unknown as ServerErrorRes;

      throw new GlobalErrorException(errorData);
    }

    return data!;
  }

  async reissue(config: RequestInit, token: Tokens) {
    console.log('토큰 재발급 처리중 in server');
    const option = {
      ...config,
      headers: {
        ...config.headers,
        RefreshToken: token.refreshToken,
      },
    };

    const res = await fetch(`${this.baseUrl}/auth/reissue`, option);

    if (res.status > 299 || res.status < 200) {
      let errorData: ServerErrorRes;
      try {
        errorData = res.json() as unknown as ServerErrorRes;
      } catch {
        console.log('json error');
      }

      // 토큰 만료 에러 발생시 재발급 처리후 기존 요청들 다시 요청
      throw new GlobalErrorException({
        message: '토큰을 재발급 받아야합니다. 서버에러',
        status: 699,
      });
    }

    const { headers } = res;
    const accessToken = headers.get('Authorization')?.split(' ')[0];
    const refreshToken = headers.get('RefreshToken');

    return { accessToken: accessToken!, refreshToken: refreshToken! };
  }

  onReRequest(tokens: Tokens) {
    for (const cb of this.reRequestWaitQueue) {
      cb(tokens);
    }
    this.reRequestWaitQueue = [];
  }

  pushToReRequestWaitQueue(
    url: string,
    config: RequestInit,
    fetchInstance: HttpServer
  ) {
    return new Promise((resolve) => {
      this.reRequestWaitQueue.push((tokens: Tokens) => {
        const option = {
          ...config,
          headers: {
            ...config.headers,
            Authorization: `Bearer ${tokens.accessToken}`,
          },
        };

        resolve(fetchInstance.fetch(url, option));
      });
    });
  }
}
