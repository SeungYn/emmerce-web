import { HttpServer } from '@/network/http';
import { PaymentApproveReq, PaymentApproveRes } from '../types/payment';

export default class PaymentServerService {
  constructor(private http: HttpServer) {}

  async approve({ orderId, pg_token }: PaymentApproveReq, option: RequestInit) {
    const opt = {
      ...option,
      headers: {
        ...option.headers,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ orderId, pg_token }),
    };

    const url = `/payment/success?orderId=${orderId}}&pg_token=${pg_token}`;
    const data = await this.http.fetch<PaymentApproveRes>(url, opt);

    return data;
  }
}
