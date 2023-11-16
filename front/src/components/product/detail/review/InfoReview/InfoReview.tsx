import { GetReviewsRes, Review } from '@/service/types/review';
import ReviewItem from '../ReviewItem/ReviewItem';

type Props = {
  currentPage: number;
} & GetReviewsRes;

export default function InfoReview({
  content: reviews,
  currentPage,
  pageNumber,
  totalPages,
  totalElements,
  first,
  last,
}: Props) {
  return (
    <div id='p-review'>
      <h3 className='text-lg font-normal border-b border-black py-6'>
        리뷰({totalElements})
      </h3>
      <ul className='[&>*]:border-b border-gray-300'>
        {reviews.map((r) => (
          <ReviewItem key={r.reviewId} review={r} />
        ))}
      </ul>
    </div>
  );
}
