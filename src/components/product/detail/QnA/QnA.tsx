'use client';

import useInfoTabIntersectionObserver from '@/hooks/product-detail/useInfoTabIntersectionObserver';
import { INFOTAB_NUMBER, SCROLL_TARGET_ID } from '@/util/lib/productDetail';

export default function QnA() {
  const containerRef = useInfoTabIntersectionObserver<HTMLDivElement>({
    intersectionOption: { threshold: 1 },
    targetNumber: INFOTAB_NUMBER.qna,
  });
  return (
    <div ref={containerRef} id={SCROLL_TARGET_ID.qna} className='mb-20'>
      {/* <div></div> */}
      <div className='flex justify-between pb-8  '>
        <h3 className='text-base font-normalpy-6'>전체(0)</h3>
        <button
          className='bg-black text-white px-4 py-1  text-xs'
          onClick={() => alert('준비중입니다..!')}
        >
          문의하기
        </button>
      </div>
      <div className='text-center py-40 text-lg border-b border-b-gray-300 border-t border-t-black'>
        등록된 상품 Q&A가 없습니다.
      </div>
    </div>
  );
}
