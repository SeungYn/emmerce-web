import { Review } from '@/service/types/review';
import { translateStarScoreToPercent } from '@/util/lib/util';
import ExpansionReviewImg from '../ExpansionReviewImg/ExpansionReviewImg';
import { parseReviewDate } from '@/util/lib/review';

type Props = {
  review: Review;
};

export default function ReviewItem({ review }: Props) {
  const {
    reviewId,
    title,
    description,
    ratings,
    reviewImgList,
    writer,
    writeDate,
    memberId,
  } = review;

  return (
    <li className='flex'>
      <div className='flex-grow p-6'>
        <div
          className='bg-no-repeat w-[140px] h-[30px] block bg-icons relative'
          style={{
            backgroundPosition: '-331px -110px',
          }}
        >
          <span
            className={` bg-no-repeat h-[30px] block bg-icons absolute t-0 l-0`}
            style={{
              backgroundPosition: '-331px -68px',
              width: `${translateStarScoreToPercent(ratings)}%`,
            }}
          ></span>
        </div>

        <p className='text-gray-400 pt-4'>{title}</p>
        <p className='whitespace-pre-line pt-4'>{description}</p>
        <ul className='flex flex-wrap mt-4'>
          {reviewImgList.map((img, i) => (
            <li key={img + i}>
              <ExpansionReviewImg imgSrc={img} />
            </li>
          ))}
        </ul>
      </div>
      <div className='basis-[20%] p-6 text-sm'>
        <p>
          <span className='text-gray-400'>작성자 : {writer} </span>
        </p>
        <p>
          <span className='text-gray-400'>
            등록일 : {parseReviewDate(writeDate)}
          </span>
        </p>
      </div>
    </li>
  );
}
