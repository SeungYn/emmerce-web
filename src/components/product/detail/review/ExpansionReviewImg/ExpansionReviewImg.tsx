'use client';

import Image from 'next/image';
import { useState } from 'react';

type Props = {
  imgSrc: string;
};

export default function ExpansionReviewImg({ imgSrc }: Props) {
  const [isExpasion, setIsExpasion] = useState(false);
  const onClick = () => setIsExpasion((f) => !f);
  if (isExpasion)
    return (
      <div className='relative w-[400px] h-[400px]' onClick={onClick}>
        <Image
          src={imgSrc}
          style={{ objectFit: 'contain' }}
          fill
          sizes='400px'
          alt={'상품이미지'}
        />
      </div>
    );
  return (
    <div className='relative w-[200px] h-[200px]' onClick={onClick}>
      <Image
        src={imgSrc}
        style={{ objectFit: 'contain' }}
        fill
        sizes='200px'
        alt={'상품이미지'}
      />
    </div>
  );
}
