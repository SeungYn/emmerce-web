import { AxiosInstance } from 'axios';
import { CartAddReq, CartItem, CheckCartItem } from '../types/cart';

export default class CartService {
  constructor(private axios: AxiosInstance) {}

  async add({ productId, quantity }: CartAddReq) {
    const query = `/cart/product`;
    console.log('add cart item');
    const { data } = await this.axios.post(query, {
      productId,
      quantity,
    });
    console.log('add res', data);
    return data;
  }

  async deleteByProductId({ cartProductId }: CheckCartItem) {
    const query = `/cart/${cartProductId}`;
    const { data } = await this.axios.delete(query);
    return data;
  }

  async getCartItemList() {
    const query = `/cart/product`;
    const { data } = await this.axios.get<CartItem[]>(query);

    function addCheckAttribute(list: CartItem[]): CheckCartItem[] {
      return list.map((item) => ({
        ...item,
        isCheck: true,
      }));
    }

    return addCheckAttribute(data);
  }

  async clear() {
    const query = `/cart/clear`;
    const { data } = await this.axios.delete(query);
    return data;
  }
}
