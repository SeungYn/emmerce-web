'use client';

import FinalPaymentInfo from '@/components/order/FinalPaymentInfo/FinalPaymentInfo';
import { usePostOneOrder } from '@/hooks/api/order/useOrder';
import { ProductDetail } from '@/service/types/product';

type Props = {} & ProductDetail;

export default function FinalPaymentInfoByOneContainer({
  productId,
  originalPrice,
  discountPrice,
}: Props) {
  const postOneOrder = usePostOneOrder(productId);

  return (
    <FinalPaymentInfo
      originPrice={originalPrice}
      discountPrice={originalPrice - discountPrice}
      deliverPrice={0}
      discountedPrice={discountPrice}
      handlePostOrder={() => {
        postOneOrder.mutate();
      }}
    />
  );
}
