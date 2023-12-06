'use client';

import FinalPaymentInfo from '@/components/order/FinalPaymentInfo/FinalPaymentInfo';
import { useCartItemList } from '@/hooks/api/cart/useCart';
import { usePostOrder } from '@/hooks/api/order/useOrder';
import {
  discountCartListPrice,
  finalCartListPrice,
  originCartListPrice,
} from '@/util/lib/cart';

export default function FinalPaymentInfoByCartContainer() {
  const { data: cartItemList } = useCartItemList();
  const { postOrderMutate } = usePostOrder();

  const discountPrice = discountCartListPrice(cartItemList);
  const discountedPrice = finalCartListPrice(cartItemList);
  const originPrice = originCartListPrice(cartItemList);

  return (
    <FinalPaymentInfo
      deliverPrice={0}
      discountPrice={discountPrice}
      discountedPrice={discountedPrice}
      originPrice={originPrice}
      handlePostOrder={postOrderMutate.mutate}
    />
  );
}
