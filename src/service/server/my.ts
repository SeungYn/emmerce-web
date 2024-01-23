import { HttpServer } from '@/network/server';
import { OrderHistory } from '../types/order';

export class MyServerService {
  constructor(private http: HttpServer) {}

  async getOrderHistory(init: RequestInit) {
    const options: RequestInit = {
      ...init,
      headers: { ...init.headers },
      method: 'GET',
    };
    const data = await this.http.fetch<OrderHistory[]>('/order', options);

    return data;
  }
}
