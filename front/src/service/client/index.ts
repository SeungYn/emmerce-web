import AuthService from './authService';
import { instance } from './axiosInstance';
import ReviewService from './reviewService';

const service = {
  auth: new AuthService(instance),
  review: new ReviewService(instance),
};

export default service;
