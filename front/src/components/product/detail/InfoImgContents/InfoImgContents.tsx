import Image from 'next/image';

type Props = {
  imgList: string[];
};

export default function InfoImgContents({ imgList }: Props) {
  return (
    <div className='py-8'>
      {imgList.map((img) => (
        <p key={img} className='flex justify-center'>
          <img src={img} alt='상품 설명 이미지' />
        </p>
      ))}
    </div>
  );
}
