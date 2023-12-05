import { Review } from '@/service/types/review';
import { translateStarScoreToPercent } from '@/util/lib/util';
import Image from 'next/image';

type Props = {
  review: Review;
};

export default function ReviewItem({ review }: Props) {
  const {
    reviewId,
    title,
    description,
    starScore,
    reviewImgList,
    writer,
    writeDate,
    memberId,
  } = review;

  review;

  console.log(translateStarScoreToPercent(starScore));
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
              width: `${translateStarScoreToPercent(starScore)}%`,
            }}
          ></span>
        </div>

        <p className='text-gray-400 pt-4'>{title}</p>
        <p className='whitespace-pre-line pt-4'>{description}</p>
        <ul>
          {reviewImgList && (
            <Image src={'/assets/slide/1.png'} alt={'상품이미지'} />
          )}
          {reviewImgList.map((img) => (
            <li key={img}>
              <Image src={img} width={100} height={100} alt={'상품이미지'} />
            </li>
          ))}
        </ul>
      </div>
      <div className='basis-[20%] p-6'>
        <p>
          <span className='text-gray-400'>작성자 : {writer} </span>
        </p>
        <p>
          <span className='text-gray-400'>등록일 : {writeDate.toString()}</span>
        </p>
      </div>
    </li>
  );
}
