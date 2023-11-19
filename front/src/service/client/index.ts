import AuthService from './authService';
import { instance } from './axiosInstance';
import ProductService from './productService';
import ReviewService from './reviewService';

const service = {
  auth: new AuthService(instance),
  review: new ReviewService(instance),
  product: new ProductService(instance),
};

export default service;
