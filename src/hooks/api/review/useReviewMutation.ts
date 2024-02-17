import { ReviewForm } from '@/container/my/review/ProductReviewModalContainer/ProductReviewModalContainer';
import service from '@/service/client';
import { pick } from '@/util/lib/util';

import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useReviewMutation() {
  const queryClient = useQueryClient();
  const postReview = useMutation({
    mutationFn: ({
      reviewForm,
      orderProductId,
      successCB,
      errorCB,
    }: {
      reviewForm: ReviewForm;
      orderProductId: number | string;
      successCB: () => void;
      errorCB: () => void;
    }) => {
      const data = {
        reviewReq: {
          ...pick(reviewForm, ['title', 'ratings', 'description']),
          orderProductId,
        },
        reviewImages: reviewForm.reviewImageFile,
      };

      return service.review.postReview(data);
    },
    onSuccess: (req, variables) => {
      variables.successCB();
      queryClient.invalidateQueries({ queryKey: ['reviews'] });
    },
    onError: (err, variables) => {
      alert(err.message);
      variables.errorCB();
    },
  });
  return { postReview };
}
