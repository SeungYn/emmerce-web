import { ServerErrorRes } from '@/service/types/error';

export class AuthTokenErrorException extends Error {
  name: string;

  constructor(message: string) {
    super(message);
    this.name = 'AccessTokenError';
  }
}

export class AccessTokenErrorException extends Error {
  name: string;
  err?: ServerErrorRes;

  constructor(error: string);
  constructor(error: ServerErrorRes);
  constructor(error: string | ServerErrorRes) {
    if (typeof error === 'string') {
      super(error);
    } else {
      super(error.message);
      this.err = error;
    }

    this.name = 'AccessTokenError';
  }
}

export class RefreshTokenErrorException extends Error {
  name: string;
  err?: ServerErrorRes;

  constructor(error: string);
  constructor(error: ServerErrorRes);
  constructor(error: string | ServerErrorRes) {
    if (typeof error === 'string') {
      super(error);
    } else {
      super(error.message);
      this.err = error;
    }

    this.name = 'RefreshTokenError';
  }
}

export class GlobalErrorException extends Error {
  name: string;
  digest?: string;
  status?: number;
  error?: string;
  constructor(error: string);
  constructor(error: ServerErrorRes);
  constructor(error: string | ServerErrorRes) {
    if (typeof error === 'string') {
      super(error);
    } else {
      super(error.message);
      this.status = error.status;
      this.error = error.error;
    }

    this.name = 'GlobalError';
  }
}

export const ErrorCode = {
  ACCESS_TOKEN_EXPIRED: {
    message: '만료된 토큰입니다.',
    status: 610,
  },
};
