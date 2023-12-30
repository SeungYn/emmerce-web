'use client';

import SSRSuspense from '@/components/common/util/SSRSuspense';
import InfoReview from '@/components/product/detail/review/InfoReview/InfoReview';
import ReviewSkeleton from '@/components/product/detail/review/ReviewSkeleton/ReviewSkeleton';
import useReviewList from '@/hooks/api/review/useReviewList';
import { useCallback, useState } from 'react';

type ContainerProps = {
  productId: number | string;
};

export default function InfoReviewContainer({ productId }: ContainerProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageMove = useCallback(
    (page: number) => setCurrentPage(page),
    []
  );

  return (
    <SSRSuspense fallback={<ReviewSkeleton />}>
      <InfoReviewSuspense
        currentPage={currentPage}
        productId={productId}
        handlePageMove={handlePageMove}
      />
    </SSRSuspense>
  );
}

type SuspenseProps = {
  productId: number | string;
  currentPage: number;
  handlePageMove: (page: number) => void;
};

function InfoReviewSuspense({
  productId,
  currentPage,
  handlePageMove,
}: SuspenseProps) {
  const { data } = useReviewList(productId, currentPage);

  return (
    <InfoReview
      {...data}
      currentPage={currentPage}
      handlePageMove={handlePageMove}
    />
  );
}
