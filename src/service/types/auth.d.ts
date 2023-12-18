export interface LoginReq {}

export interface RegisterReq {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  tel: string;
  birth: string;
}

export interface LoginReq {
  name: string;
  password: string;
}

export type Tokens = {
  accessToken: string;
  refreshToken: string;
};
