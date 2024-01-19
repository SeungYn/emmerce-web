'use client';
import useInfoTabIntersectionObserver from '@/hooks/product-detail/useInfoTabIntersectionObserver';
import { INFOTAB_NUMBER } from '@/util/lib/productDetail';

type Props = {
  imgList: string[];
};

export default function InfoImgContents({ imgList }: Props) {
  const containerRef = useInfoTabIntersectionObserver<HTMLDivElement>({
    intersectionOption: { threshold: 0.01 },
    targetNumber: INFOTAB_NUMBER.info,
  });

  return (
    <div ref={containerRef} id='p-info' className='py-8 mb-20'>
      {imgList.map((img, i) => (
        <p key={img + i} className='flex justify-center'>
          {/* eslint-disable-next-line */}
          <img src={img} alt='상품 설명 이미지' />
        </p>
      ))}
    </div>
  );
}
