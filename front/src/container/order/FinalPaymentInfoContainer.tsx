'use client';

import FinalPaymentInfo from '@/components/order/FinalPaymentInfo/FinalPaymentInfo';
import { usePostOrder } from '@/hooks/api/order/useOrder';

export default function FinalPaymentInfoContainer() {
  const { postOrderMutate } = usePostOrder();

  return (
    <FinalPaymentInfo
      deliverPrice={10000}
      discountPrice={10000}
      discoutedPrice={10000}
      originPrice={10000}
      handlePostOrder={postOrderMutate.mutate}
    />
  );
}
