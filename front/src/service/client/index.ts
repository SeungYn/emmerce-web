import AuthService from './authService';
import { instance } from './axiosInstance';

const service = {
  auth: new AuthService(instance),
};

export default service;
