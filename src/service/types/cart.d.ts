export type CartAddReq = {
  productId: number | string;
  quantity: number;
};

export type CartItem = {
  cartProductId: number;
  productId: number;
  name: string;
  titleImg: string;
  discountPrice: number;
  totalCount: number; // 현재 안 씀
  quantity: number;
  originalPrice: number;
  brand: string;
};

export type CheckCartItem = CartItem & {
  isCheck: boolean;
};
