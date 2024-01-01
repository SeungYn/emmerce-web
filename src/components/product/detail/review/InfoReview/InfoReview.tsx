import { GetReviewsRes, Review } from '@/service/types/review';
import ReviewItem from '../ReviewItem/ReviewItem';
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md';

type Props = {
  currentPage: number;
  handlePageMove: (page: number) => void;
} & GetReviewsRes;

// 페이징은 데이터 더 넣어서 다음 다다음 적용시켜야함

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
  const currentBlock = Math.floor(pageNumber / 10) + 1;
  const pageArr = Array.from(
    { length: 10 >= totalPages ? totalPages : 10 },
    (_, i) => i + currentBlock
  );

  return (
    <div id='p-review'>
      <h3 className='text-lg font-normal border-b border-black py-6'>
        리뷰({totalElements})
      </h3>
      <ul className='[&>*]:border-b border-gray-300 '>
        {reviews.map((r) => (
          <ReviewItem key={r.reviewId} review={r} />
        ))}
      </ul>
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
