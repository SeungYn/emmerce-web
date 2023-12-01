import { CheckCartItem } from '@/service/types/cart';

export const originCartListPrice = (list: CheckCartItem[]) =>
  list.reduce(
    (p, c) => p + (c.originalPrice - c.discountPrice) * c.quantity,
    0
  );

export const discountCartListPrice = (list: CheckCartItem[]) =>
  list.reduce(
    (p, c) => p + (c.originalPrice - c.discountPrice) * c.quantity,
    0
  );

export const finalCartListPrice = (list: CheckCartItem[]) =>
  list.reduce((p, c) => p + c.discountPrice * c.quantity, 0);
