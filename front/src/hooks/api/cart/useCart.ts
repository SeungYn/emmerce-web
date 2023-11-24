import service from '@/service/client';
import { CartAddReq, CheckCartItem } from '@/service/types/cart';
import {
  useMutation,
  useQuery,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';

export function useCartItemList() {
  const res = useQuery({
    queryKey: ['cart'],
    queryFn: () => service.cart.getCartItemList(),
  });
  return res;
}

export function useCartItemListSuspense() {
  const res = useSuspenseQuery({
    queryKey: ['cart'],
    queryFn: () => service.cart.getCartItemList(),
    refetchOnMount: true,
  });
  return res;
}

export function useCartMutations() {
  const addMutate = useMutation({
    mutationFn: (req: CartAddReq) => service.cart.add(req),
  });

  const deleteMutate = useMutation({
    onMutate: () => {},
  });

  const clearMutate = useMutation({
    mutationFn: () => service.cart.clear(),
  });

  return { addMutate, deleteMutate, clearMutate };
}

// 장바구니 아이템 추가
export function useCartAdd(cb: () => void) {
  const addMutate = useMutation({
    mutationFn: (req: CartAddReq) => service.cart.add(req),
    onSuccess: () => {
      cb();
    },
  });
  return addMutate;
}

export function useCartDeleteItem() {
  const queryClient = useQueryClient();

  const deleteMutate = useMutation({
    mutationFn: (checkCartItem: CheckCartItem) =>
      service.cart.deleteByProductId(checkCartItem),
    onMutate: async (checkCartItem) => {
      await queryClient.cancelQueries({ queryKey: ['cart'] });
      const previousList = queryClient.getQueryData<CheckCartItem[]>(['cart'])!;

      queryClient.setQueryData(['cart'], () => {
        const result = previousList.filter(
          (item) => item.cartProductId !== checkCartItem.cartProductId
        );
        return result;
      });
      return { previousList, checkCartItem };
    },
    onError: (err, checkCartItem, context) => {
      queryClient.setQueryData(['cart'], context?.previousList);
    },
  });
  return deleteMutate;
}

export function useCheckAllCartItems() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    onMutate: () => {
      const previousList = queryClient.getQueryData<CheckCartItem[]>(['cart'])!;

      queryClient.setQueryData(['cart'], () => {
        const result = previousList.map((item) => ({
          ...item,
          isCheck: true,
        }));
        return result;
      });
      return { previousList };
    },
  });

  return mutate;
}

export function useUnCheckAllCartItems() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    onMutate: () => {
      const previousList = queryClient.getQueryData<CheckCartItem[]>(['cart'])!;

      queryClient.setQueryData(['cart'], () => {
        const result = previousList.map((item) => ({
          ...item,
          isCheck: false,
        }));
        return result;
      });
      return { previousList };
    },
  });

  return mutate;
}

export function useToggleCheckCartItem() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    onMutate: (checkCartItem: CheckCartItem) => {
      const previousList = queryClient.getQueryData<CheckCartItem[]>(['cart'])!;

      queryClient.setQueryData(['cart'], () => {
        const result = previousList.map((item) => {
          if (item.cartProductId === checkCartItem.cartProductId)
            return { ...item, isCheck: !item.isCheck };
          return { ...item };
        });

        return result;
      });
      return { previousList, checkCartItem };
    },
  });

  return mutate;
}

export function useUpCountCartItem() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    onMutate: (checkCartItem: CheckCartItem) => {
      const previousList = queryClient.getQueryData<CheckCartItem[]>(['cart'])!;

      queryClient.setQueryData(['cart'], () => {
        const result = previousList.map((item) => {
          if (item.cartProductId === checkCartItem.cartProductId) {
            return { ...item, totalCount: checkCartItem.totalCount + 1 };
          }
          return { ...item };
        });

        return result;
      });
      return { previousList, checkCartItem };
    },
  });

  return mutate;
}

export function useDownCountCartItem() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    onMutate: (checkCartItem: CheckCartItem) => {
      const previousList = queryClient.getQueryData<CheckCartItem[]>(['cart'])!;

      queryClient.setQueryData(['cart'], () => {
        const result = previousList.map((item) => {
          if (item.cartProductId === checkCartItem.cartProductId) {
            const countResult = checkCartItem.totalCount - 1;

            return { ...item, totalCount: countResult < 1 ? 1 : countResult };
          }
          return { ...item };
        });

        return result;
      });
      return { previousList, checkCartItem };
    },
  });

  return mutate;
}

export function useClearCart() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: () => service.cart.clear(),
  });

  return mutate;
}
