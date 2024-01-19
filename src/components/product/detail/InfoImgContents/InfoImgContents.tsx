'use client';
import useInfoTabIntersectionObserver from '@/hooks/product-detail/useInfoTabIntersectionObserver';
import { INFOTAB_NUMBER } from '@/util/lib/productDetail';

type Props = {
  imgList: string[];
};

export default function InfoImgContents({ imgList }: Props) {
  const containerPrevRef = useInfoTabIntersectionObserver<HTMLDivElement>({
    intersectionOption: { threshold: 1 },
    targetNumber: INFOTAB_NUMBER.info,
  });
  const containerAfterRef = useInfoTabIntersectionObserver<HTMLDivElement>({
    intersectionOption: { threshold: 1 },
    targetNumber: INFOTAB_NUMBER.info,
  });

  return (
    <div id='p-info' className='py-8 mb-20'>
      <div ref={containerPrevRef}></div>
      {imgList.map((img, i) => (
        <p key={img + i} className='flex justify-center'>
          {/* eslint-disable-next-line */}
          <img src={img} alt='상품 설명 이미지' />
        </p>
      ))}
      <div ref={containerAfterRef}></div>
    </div>
  );
}
