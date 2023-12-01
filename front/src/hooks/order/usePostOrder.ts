import { useDeliveryFormFluxStore } from '@/store/order';
import { useCartItemList } from '../api/cart/useCart';
import useOrder from '../api/order/useOrder';

export default function usePostCartOrder() {
  const { data: cartList } = useCartItemList();
  const { postOrderMutate } = useOrder();
  const deliveryForm = useDeliveryFormFluxStore();

  const handlePostCartOrder = () => {};

  return;
}
