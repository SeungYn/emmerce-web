import { AxiosInstance } from 'axios';
import { CartAddReq } from '../types/cart';

export default class CartService {
  constructor(private axios: AxiosInstance) {}

  async add({ productId, quantity }: CartAddReq) {
    const query = `/cart/product`;
    const { data } = await this.axios.post(query, {
      productId,
      quantity,
    });
    console.log('add res', data);
    return data;
  }

  async deleteByProductId(productId: number) {
    const query = `/cart/product/${productId}`;
    const { data } = await this.axios.delete(query);
    return data;
  }

  async getCartItemList() {
    const query = `/cart/product`;
    const { data } = await this.axios.get(query);
    return data;
  }

  async clear() {
    const query = `/cart/clear`;
    const { data } = await this.axios.delete(query);
    return data;
  }
}
