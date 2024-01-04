import Image from 'next/image';

type Props = {
  className: string;
  src: string;
  description?: { title1: string; title2: string; text: string };
};

export default function SliderBannerItem({
  className,
  src,
  description,
}: Props) {
  return (
    <div className={className}>
      <Image src={src} className='brightness-75' fill alt='배너 이미지' />
      {description && (
        <div className='text-white z-[99] absolute flex flex-col justify-end h-full w-full items-start px-8 py-10 gap-6'>
          <strong className='block text-3xl font-medium leading-8 text-left'>
            {description.title1}
            <br />
            {description.title2}
          </strong>
          <span className='text-sm opacity-70'>{description.text}</span>
        </div>
      )}
    </div>
  );
}
