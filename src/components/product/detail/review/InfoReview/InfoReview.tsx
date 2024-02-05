import { GetReviewsRes } from '@/service/types/review';
import ReviewItem from '../ReviewItem/ReviewItem';
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md';
import useInfoTabIntersectionObserver from '@/hooks/product-detail/useInfoTabIntersectionObserver';
import { INFOTAB_NUMBER } from '@/util/lib/productDetail';

type Props = {
  currentPage: number;
  handlePageMove: (page: number) => void;
} & GetReviewsRes;

export default function InfoReview({
  content: reviews,
  currentPage,
  pageNumber,
  totalPages,
  totalElements,
  first,
  last,
  handlePageMove,
}: Props) {
  const containerRef = useInfoTabIntersectionObserver<HTMLDivElement>({
    intersectionOption: { threshold: 1 },
    targetNumber: INFOTAB_NUMBER.review,
  });
  const currentBlock = Math.floor(pageNumber / 10) + 1;
  const pageArr = Array.from(
    { length: 10 >= totalPages ? totalPages : 10 },
    (_, i) => i + currentBlock
  );

  return (
    <div className='mb-20'>
      <div ref={containerRef}></div>
      <h3 className='text-base font-normal border-b border-black py-6'>
        리뷰({totalElements})
      </h3>
      {reviews.length === 0 && (
        <div className='text-center py-40 text-lg border-b border-b-gray-300 border-t '>
          등록된 상품 리뷰가 없습니다.
        </div>
      )}
      {reviews.length > 0 && (
        <ul className='[&>*]:border-b border-gray-300 '>
          {reviews.map((r, i) => (
            <ReviewItem key={r.reviewId} review={r} />
          ))}
        </ul>
      )}
      <div className='flex justify-center mt-4'>
        <ul className='flex gap-3 items-center [&>li]:flex'>
          {!first && (
            <>
              <li>
                <button onClick={() => handlePageMove(1)}>
                  <MdKeyboardDoubleArrowLeft />
                </button>
              </li>
              <li>
                <button onClick={() => handlePageMove(currentPage - 1)}>
                  <MdKeyboardArrowLeft />
                </button>
              </li>
            </>
          )}
          {pageArr.map((v) => (
            <li
              key={v}
              className={`${v === pageNumber ? 'text-black' : 'text-gray-400'}`}
            >
              <button onClick={() => handlePageMove(v)}>{v}</button>
            </li>
          ))}
          {!last && (
            <>
              <li>
                <button onClick={() => handlePageMove(currentPage + 1)}>
                  <MdKeyboardArrowRight />
                </button>
              </li>
              <li>
                <button onClick={() => handlePageMove(totalPages)}>
                  <MdKeyboardDoubleArrowRight />
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
