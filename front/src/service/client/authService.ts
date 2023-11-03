import { LoginReq, RegisterReq } from './types/auth.d';
import { AxiosInstance, AxiosRequestConfig } from 'axios';

export default class AuthService {
  constructor(private axios: AxiosInstance) {}

  async register({
    name,
    email,
    password,
    passwordConfirm,
    tel,
    birth,
  }: RegisterReq) {
    const option: AxiosRequestConfig = {
      data: {
        name,
        email,
        password,
        passwordConfirm,
        tel,
        birth,
      },
    };

    return await this.axios.post('/auth/register', option);
  }

  async login({ name, password }: LoginReq) {
    const option: AxiosRequestConfig = {
      data: {
        name,
        password,
      },
    };

    return await this.axios.post('/auth/login', option);
  }
}
