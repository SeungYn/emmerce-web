export type CartAddReq = {
  productId: number | string;
  quantity: number;
};

export type CartItem = {
  productId: number;
  name: string;
  titleImg: string;
  discountPrice: number;
  totalCount: number;
  totalPrice: number;
};
