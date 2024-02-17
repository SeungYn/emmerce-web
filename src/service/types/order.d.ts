export interface Delivery {
  name: string;
  tel: string;
  email: string;
  city: string;
  street: string;
  zipcode: string;
}

export interface OrderItem {
  productId: number | string;
  totalCount: number;
}

export interface OrderReq {
  orderProductList: OrderItem[];
  deliveryReq: Delivery;
}

export interface OrderRes {
  orderId: number;
}

export type DeliveryStatus = 'READY' | 'ING' | 'COMPLETE' | 'CANCEL';

export interface OrderHistoryItem {
  orderProductId: string | number;
  productId: string | number;
  name: string;
  titleImg: string;
  brand: string;
  originalPrice: number;
  discountPrice: number;
  quantity: number;
  reviewStatus: boolean;
  deliveryStatus: DeliveryStatus;
}

export interface OrderHistory {
  orderId: string | number;
  orderDate: string;
  orderStatus: string;
  orderProductRespList: OrderHistoryItem[];
}
