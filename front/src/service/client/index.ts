import AuthService from './authService';
import { instance } from './axiosInstance';
import CartService from './cartService';
import ProductService from './productService';
import ReviewService from './reviewService';

const service = {
  auth: new AuthService(instance),
  review: new ReviewService(instance),
  product: new ProductService(instance),
  cart: new CartService(instance),
};

export default service;
