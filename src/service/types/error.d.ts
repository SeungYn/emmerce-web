export interface ServerErrorRes {
  timestamp?: string;
  path?: string;
  status: number;
  error?: string;
  requestId?: string;
  exception?: string;
  message: string;
}

export type GlobalErrorType = {
  message: string;
  status: number;
};
