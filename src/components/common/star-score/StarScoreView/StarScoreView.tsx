import { translateStarScoreToPercent } from '@/util/lib/util';
import Image from 'next/image';

type Props = {
  starWidth: number;
  starHeight: number;
  score: number;
};

export default function StarScoreView({ starWidth, starHeight, score }: Props) {
  return (
    <div className='relative flex pb-1'>
      <div className='flex '>
        <Image
          src='/assets/icons/review_score_lg_blank.png'
          width={starWidth}
          height={starHeight}
          style={{ width: `${starWidth}px`, height: `${starHeight}px` }}
          alt='별점 이미지'
        />
        <Image
          src='/assets/icons/review_score_lg_blank.png'
          width={starWidth}
          height={starHeight}
          style={{ width: `${starWidth}px`, height: `${starHeight}px` }}
          alt='별점 이미지'
        />{' '}
        <Image
          src='/assets/icons/review_score_lg_blank.png'
          width={starWidth}
          height={starHeight}
          style={{ width: `${starWidth}px`, height: `${starHeight}px` }}
          alt='별점 이미지'
        />{' '}
        <Image
          src='/assets/icons/review_score_lg_blank.png'
          width={starWidth}
          height={starHeight}
          style={{ width: `${starWidth}px`, height: `${starHeight}px` }}
          alt='별점 이미지'
        />{' '}
        <Image
          src='/assets/icons/review_score_lg_blank.png'
          width={starWidth}
          height={starHeight}
          style={{ width: `${starWidth}px`, height: `${starHeight}px` }}
          alt='별점 이미지'
        />
      </div>
      <div
        className='z-10 absolute  overflow-hidden'
        style={{ width: `${translateStarScoreToPercent(score)}%` }}
      >
        <div className='flex '>
          <Image
            src='/assets/icons/review_score_lg_on.png'
            width={starWidth}
            height={starHeight}
            style={{ width: `${starWidth}px`, height: `${starHeight}px` }}
            alt='별점 이미지'
          />
          <Image
            src='/assets/icons/review_score_lg_on.png'
            width={starWidth}
            height={starHeight}
            style={{ width: `${starWidth}px`, height: `${starHeight}px` }}
            alt='별점 이미지'
          />{' '}
          <Image
            src='/assets/icons/review_score_lg_on.png'
            width={starWidth}
            height={starHeight}
            style={{ width: `${starWidth}px`, height: `${starHeight}px` }}
            alt='별점 이미지'
          />{' '}
          <Image
            src='/assets/icons/review_score_lg_on.png'
            width={starWidth}
            height={starHeight}
            style={{ width: `${starWidth}px`, height: `${starHeight}px` }}
            alt='별점 이미지'
          />{' '}
          <Image
            src='/assets/icons/review_score_lg_on.png'
            width={starWidth}
            height={starHeight}
            style={{ width: `${starWidth}px`, height: `${starHeight}px` }}
            alt='별점 이미지'
          />
        </div>
      </div>
    </div>
  );
}
