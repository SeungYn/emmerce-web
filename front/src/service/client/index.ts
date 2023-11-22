import AuthService from './authService';
import { axiosInstance } from '@/network/http';
import CartService from './cartService';
import ProductService from './productService';
import ReviewService from './reviewService';

const service = {
  auth: new AuthService(axiosInstance),
  review: new ReviewService(axiosInstance),
  product: new ProductService(axiosInstance),
  cart: new CartService(axiosInstance),
};

export default service;
