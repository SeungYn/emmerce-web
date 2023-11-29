import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

/**
 * 주문페이지가 unMount될 때 카트 장바구니 데이터를 서버에서 다시 받아옴
 */

export default function useInvalidCart() {
  const queryClient = useQueryClient();
  useEffect(() => {
    return () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    };
  }, []);
}
