import { AxiosInstance } from 'axios';
import { OrderHistory, OrderReq, OrderRes } from '../types/order';

export default class OrderService {
  constructor(private axios: AxiosInstance) {}

  async postOrder(orderData: OrderReq) {
    console.log('post order: ', orderData);
    const query = `/order`;
    const { data } = await this.axios.post<OrderRes>(query, orderData);

    return data;
  }

  async getOrderHistory() {
    const { data } = await this.axios.get<OrderHistory[]>('/order');

    return data;
  }
}
