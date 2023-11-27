import service from '@/service/client';
import { useMutation } from '@tanstack/react-query';
import { useCartItemList } from '../cart/useCart';
import { useDeliveryFormFluxStore } from '@/store/order';

export function usePostOrder() {
  const { data: cartList } = useCartItemList();
  const deliveryForm = useDeliveryFormFluxStore();

  const postOrderMutate = useMutation({
    mutationFn: () =>
      service.order.postOrder({
        orderProductList: cartList,
        deliveryReq: deliveryForm,
      }),
  });

  return { postOrderMutate };
}
