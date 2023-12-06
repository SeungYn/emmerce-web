import service from '@/service/client';
import { useQuery } from '@tanstack/react-query';

export default function useRecommendProductsPrefetch(categoryId: number) {
  useQuery({
    queryKey: ['products', 'recommend', categoryId],
    queryFn: () => service.product.getRecommentProducts(categoryId),
  });
}
