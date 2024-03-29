'use client';
import service from '@/service/client';
import { useSuspenseQuery } from '@tanstack/react-query';

export default function useReviewList(
  productId: number | string,
  page?: number,
  size: number = 5
) {
  const res = useSuspenseQuery({
    queryKey: ['reviews', productId, page],
    queryFn: () => service.review.getReviews(productId, page, size),
    staleTime: 30 * 60 * 1000,
  });

  return { ...res };
}
