'use client';

import FinalPaymentInfo from '@/components/order/FinalPaymentInfo/FinalPaymentInfo';
import { usePostOneOrder } from '@/hooks/api/order/useOrder';
import { ProductDetail } from '@/service/types/product';

type Props = { stockCount: number } & ProductDetail;

export default function FinalPaymentInfoByOneContainer({
  productId,
  originalPrice,
  discountPrice,
  stockCount,
}: Props) {
  const postOneOrder = usePostOneOrder(productId, stockCount);

  return (
    <FinalPaymentInfo
      originPrice={originalPrice * stockCount}
      discountPrice={(originalPrice - discountPrice) * stockCount}
      deliverPrice={0}
      discountedPrice={discountPrice * stockCount}
      handlePostOrder={() => {
        postOneOrder.mutate();
      }}
    />
  );
}
