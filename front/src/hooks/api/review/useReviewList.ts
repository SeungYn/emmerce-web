'use client';
import service from '@/service/client';
import { useSuspenseQuery } from '@tanstack/react-query';

export default function useReviewList(
  productId: number | string,
  page?: number,
  size: number = 5
) {
  const res = useSuspenseQuery({
    queryKey: ['reviews', productId],
    queryFn: () => service.review.getReviews(productId, page, size),
  });

  return { ...res };
}
