import { GlobalErrorType, ServerErrorRes } from '@/service/types/error';

export class AccessTokenError extends Error {
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

export class RefreshTokenError extends Error {
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

export class GlobalError extends Error {
  name: string;
  status?: number;
  constructor(error: string);
  constructor(error: GlobalErrorType);
  constructor(error: string | GlobalErrorType) {
    if (typeof error === 'string') {
      super(error);
    } else {
      super(error.message);
      this.status = error.status;
    }

    this.name = 'GlobalError';
  }
}
