'use client';

import SSRSuspense from '@/components/common/\butil/SSRSuspense';
import InfoReview from '@/components/product/detail/review/InfoReview/InfoReview';
import useReviewList from '@/hooks/api/review/useReviewList';
import { useState } from 'react';

type ContainerProps = {
  productId: number | string;
};

export default function InfoReviewContainer({ productId }: ContainerProps) {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <SSRSuspense fallback={<div className='text-9xl'>로딩딩딩중</div>}>
      <InfoReviewSuspense currentPage={currentPage} productId={productId} />
    </SSRSuspense>
  );
}

type SuspenseProps = {
  productId: number | string;
  currentPage: number;
};

function InfoReviewSuspense({ productId, currentPage }: SuspenseProps) {
  const { data } = useReviewList(4, currentPage);

  return <InfoReview {...data} currentPage={currentPage} />;
}
