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
