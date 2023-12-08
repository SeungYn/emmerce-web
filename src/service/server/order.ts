import { HttpServer } from '@/network/http';
import { OrderHistory } from '../types/order';

export default class OrderServerService {
  constructor(private http: HttpServer) {}

  async getUnitOrder(
    orderId: number | string,
    option: RequestInit,
    token: {
      accessToken: string;
      refreshToken: string;
    }
  ) {
    const opt = {
      ...option,
      headers: {
        ...option.headers,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.accessToken}`,
      },
      method: 'GET',
    };

    const url = `/order/${orderId}`;
    const data = await this.http.fetch<OrderHistory>(url, opt);

    return data;
  }
}
