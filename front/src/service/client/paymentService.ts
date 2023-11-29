import { AxiosInstance } from 'axios';
import {
  PaymentApproveReq,
  PaymentApproveRes,
  PaymentReadyRes,
} from '../types/payment';

export default class PaymentService {
  constructor(private axios: AxiosInstance) {}

  async ready(orderId: number) {
    const { data } = await this.axios.post<PaymentReadyRes>('/payment/ready', {
      orderId,
    });

    return data;
  }

  async approve({ orderId, pg_token }: PaymentApproveReq) {
    const url = `/payment/success?orderId=${orderId}}&pg_token=${pg_token}`;
    const { data } = await this.axios.post<PaymentApproveRes>(url);

    return data;
  }

  async cancel(orderId: number) {
    const url = '/payment/refund';
    const { data } = await this.axios.post(url, { orderId });
  }

  async getPaymentInfoByOrderId(orderId: number) {
    const url = '/payment/order';
    const { data } = await this.axios.post(url, { orderId });
  }
}
