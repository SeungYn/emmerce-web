import { ReviewForm } from '@/container/my/review/ProductReviewModalContainer/ProductReviewModalContainer';
import service from '@/service/client';
import { pick } from '@/util/lib/util';

import { useMutation } from '@tanstack/react-query';

export default function useReviewMutation() {
  const postReview = useMutation({
    mutationFn: ({
      reviewForm,
      orderId,
      productId,
      cb,
    }: {
      reviewForm: ReviewForm;
      orderId: number;
      productId: number;
      cb: () => void;
    }) => {
      const data = {
        reviewReq: {
          ...pick(reviewForm, ['title', 'ratings', 'description']),
          orderId,
          productId,
        },
        reviewImages: reviewForm.reviewImageFile,
      };

      return service.review.postReview(data);
    },
    onMutate: (data) => data.cb(),
  });
  return { postReview };
}
