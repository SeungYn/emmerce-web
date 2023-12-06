import service from '@/service/client';
import { useSuspenseQuery } from '@tanstack/react-query';

export default function useRecommendProducts(categoryId: number) {
  const res = useSuspenseQuery({
    queryKey: ['products', 'recommend', categoryId],
    queryFn: () => service.product.getRecommentProducts(categoryId),
  });

  return { ...res };
}
