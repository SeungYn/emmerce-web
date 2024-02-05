'use client';

import ModalPortal from '@/components/common/modal/ModalPortal';
import ProductReview from '@/components/my/review/ProductReview/ProductReview';
import useReviewMutation from '@/hooks/api/review/useReviewMutation';
import { OrderHistoryItem } from '@/service/types/order';
import { Dispatch, SetStateAction, useCallback, useRef, useState } from 'react';

export type ReviewForm = {
  title: string;
  description: string;
  ratings: number;
  reviewImageFile: File[];
  reviewImageSrc: string[];
};

const initialForm: ReviewForm = {
  title: '',
  description: '',
  ratings: 0,
  reviewImageFile: [],
  reviewImageSrc: [],
};

type Props = {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  orderHistoryItem: OrderHistoryItem;
  orderId: number;
};

export default function ProductReviewModalContainer({
  openModal,
  setOpenModal,
  orderHistoryItem,
  orderId,
}: Props) {
  const hiddenFileRef = useRef<HTMLInputElement>(null);
  const [reviewForm, setReviewForm] = useState<ReviewForm>(initialForm);
  const { postReview } = useReviewMutation();

  const handleSubmit = () => {
    postReview.mutate({
      reviewForm,
      orderId,
      productId: orderHistoryItem.productId as number,
      successCB: () => {
        alert('리뷰 작성이 완료되었습니다.');
        setReviewForm({ ...initialForm });
        setOpenModal(false);
      },
      errorCB: () => {},
    });
  };

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.currentTarget;
      let files: FileList | null;
      if (e.currentTarget instanceof HTMLInputElement) {
        files = e.currentTarget.files;
      }

      switch (name) {
        case 'title':
          return setReviewForm((form) => ({ ...form, title: value }));
        case 'description':
          return setReviewForm((form) => ({ ...form, description: value }));
        case 'file':
          if (e.currentTarget instanceof HTMLInputElement) {
            files = e.currentTarget.files;
            if (files !== null) {
              setReviewForm((form) => ({
                ...form,
                reviewImageFile: [...files!],
                reviewImageSrc: [...files!].map((i) => URL.createObjectURL(i)),
              }));
            }
          }
          break;
        default:
          return;
      }
    },
    []
  );

  if (!openModal) return null;
  return (
    <ModalPortal targetId='review-portal'>
      <ProductReview
        hiddenFileRef={hiddenFileRef}
        reviewForm={reviewForm}
        onChange={onChange}
        setReviewForm={setReviewForm}
        orderHistoryItem={orderHistoryItem}
        handleCloseModal={() => setOpenModal(false)}
        handleSubmit={handleSubmit}
        isPending={postReview.isPending}
      />
    </ModalPortal>
  );
}
