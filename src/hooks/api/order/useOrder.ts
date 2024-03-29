import service from '@/service/client';
import { useMutation, useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { useCartItemList } from '../cart/useCart';
import { useDeliveryFormFluxStore } from '@/store/order';
import usePaymentMutation from '../payment/usePaymentMutation';
import { useOrderHistoryState } from '@/store/my/order/dateStore';
import { OrderHistory } from '@/service/types/order';
import { axiosInstance } from '@/network/http';
import { whereIsHost } from '@/util/lib/util';
import { useKakaoPayStore } from '@/store/payment/kakaoPayStore';

export function usePostOrder() {
  const { data: cartList } = useCartItemList();
  const { readyMutate } = usePaymentMutation();
  const { setOrderId } = useKakaoPayStore();
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
      setOrderId(orderId);
      deliveryForm.dispatch({ type: 'reset', payload: '' });
    },
  });

  return { postOrderMutate };
}

export function usePostOneOrder(
  productId: number | string,
  stockCount: number
) {
  const { readyMutate } = usePaymentMutation();
  const deliveryForm = useDeliveryFormFluxStore();
  const { setOrderId } = useKakaoPayStore();

  const postOneOrderMutate = useMutation({
    mutationFn: () =>
      service.order.postOrder({
        orderProductList: [{ productId, totalCount: stockCount }],
        deliveryReq: deliveryForm,
      }),
    onSuccess: ({ orderId }) => {
      readyMutate.mutate(orderId);
      setOrderId(orderId);
      deliveryForm.dispatch({ type: 'reset', payload: '' });
    },
  });

  return postOneOrderMutate;
}

export function useOrderHistories() {
  const suspenseRes = useSuspenseQuery({
    queryKey: ['histories'],
    queryFn: () => service.order.getOrderHistories(),
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnMount: 'always',
  });

  const queryRes = useQuery({
    queryKey: ['histories'],
    queryFn: () => service.order.getOrderHistories(),
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnMount: 'always',
  });

  return { suspenseRes, queryRes };
}

export function useOrderHistorySuspense() {
  const { startDate, endDate } = useOrderHistoryState();
  const suspenseRes = useSuspenseQuery({
    queryKey: ['histories', startDate + endDate],
    queryFn: async () => {
      const { data } = await axiosInstance.post<OrderHistory[]>(
        '/api/my/orderhistory',
        { startDate, endDate },
        {
          baseURL: whereIsHost(),
        }
      );
      return data;
    },
    refetchOnMount: 'always',
  });

  return suspenseRes;
}
