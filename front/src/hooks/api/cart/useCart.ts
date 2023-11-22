import service from '@/service/client';
import { CartAddReq } from '@/service/types/cart';
import { useMutation, useQuery, useSuspenseQuery } from '@tanstack/react-query';

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
  });
  return res;
}

export function useCartMutations() {
  const addMutate = useMutation({
    mutationFn: (req: CartAddReq) => service.cart.add(req),
  });

  const deleteMutate = useMutation({
    mutationFn: (productId: number) =>
      service.cart.deleteByProductId(productId),
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
