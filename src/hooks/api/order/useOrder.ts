import service from '@/service/client';
import { useMutation } from '@tanstack/react-query';
import { useCartItemList } from '../cart/useCart';
import { useDeliveryFormFluxStore } from '@/store/order';
import usePaymentMutation from '../payment/usePaymentMutation';

export function usePostOrder() {
  const { data: cartList } = useCartItemList();
  const { readyMutate } = usePaymentMutation();
  const deliveryForm = useDeliveryFormFluxStore();

  const postOrderMutate = useMutation({
    mutationFn: () =>
      service.order.postOrder({
        orderProductList: cartList.map((item) => ({
          productId: item.productId,
          totalCount: item.quantity,
        })),
        deliveryReq: deliveryForm,
      }),
    onSuccess: ({ orderId }) => {
      readyMutate.mutate(orderId);
    },
  });

  return { postOrderMutate };
}

export function usePostOneOrder(productId: number | string) {
  const { readyMutate } = usePaymentMutation();
  const deliveryForm = useDeliveryFormFluxStore();

  const postOneOrderMutate = useMutation({
    mutationFn: () =>
      service.order.postOrder({
        orderProductList: [{ productId, totalCount: 1 }],
        deliveryReq: deliveryForm,
      }),
    onSuccess: ({ orderId }) => {
      readyMutate.mutate(orderId);
    },
  });

  return postOneOrderMutate;
}
