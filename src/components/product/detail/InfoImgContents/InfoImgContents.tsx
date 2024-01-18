import Image from 'next/image';

type Props = {
  imgList: string[];
};

export default function InfoImgContents({ imgList }: Props) {
  return (
    <div id='p-info' className='py-8'>
      {imgList.map((img, i) => (
        <p key={img + i} className='flex justify-center'>
          {/* eslint-disable-next-line */}
          <img src={img} alt='상품 설명 이미지' />
        </p>
      ))}
    </div>
  );
}
