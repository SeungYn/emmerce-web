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
    const data = {
      name,
      email,
      password,
      passwordConfirm,
      tel,
      birth,
    };

    return await this.axios.post('/auth/register', data);
  }

  async login({ name, password }: LoginReq) {
    const data = {
      name,
      password,
    };

    return await this.axios.post('/auth/login', data);
  }

  async logout() {
    console.log('logout!!!');
    const dd = await this.axios.post('/auth/logout');

    return dd;
  }
}
