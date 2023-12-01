export interface Delivery {
  name: string;
  tel: string;
  email: string;
  city: string;
  street: string;
  zipcode: string;
}

export interface OrderItem {
  productId: number;
  totalCount: number;
}

export interface OrderReq {
  orderProductList: OrderItem[];
  deliveryReq: Delivery;
}

export interface OrderRes {
  orderId: number;
}

export interface OrderHistoryItem {
  productId: string | number;
  name: string;
  titleImg: string;
  brand: string;
}

export interface OrderHistory {
  orderId: string | number;
  orderDate: Date;
  orderStatus: string;
  orderProductRespList: OrderHistoryItem[];
}
