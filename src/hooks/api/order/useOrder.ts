import service from '@/service/client';
import { useMutation, useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { useCartItemList } from '../cart/useCart';
import { useDeliveryFormFluxStore } from '@/store/order';
import usePaymentMutation from '../payment/usePaymentMutation';
import { useOrderHistoryState } from '@/store/my/order/dateStore';
import { OrderHistory } from '@/service/types/order';
import { axiosInstance } from '@/network/http';
import { whereIsHost } from '@/util/lib/util';

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
