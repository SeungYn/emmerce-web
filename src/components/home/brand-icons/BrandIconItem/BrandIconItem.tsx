import Image from 'next/image';

type Props = {
  src: string;
  name: string;
};

export default function BrandIconItem({ src, name }: Props) {
  return (
    <>
      <Image src={src} width={80} height={80} alt={`${name} 아이콘 이미지`} />
      <span className='mt-2 text-sm'>{name}</span>
    </>
  );
}
