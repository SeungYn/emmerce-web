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
      successCB,
      errorCB,
    }: {
      reviewForm: ReviewForm;
      orderId: number;
      productId: number;
      successCB: () => void;
      errorCB: () => void;
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
    onSuccess: (req, variables) => variables.successCB(),
    onError: (err, variables) => {
      alert(err.message);
      variables.errorCB();
    },
  });
  return { postReview };
}
