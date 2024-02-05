import Image from 'next/image';
import BrandIconItem from '../BrandIconItem/BrandIconItem';

export default function BrandIconList() {
  return (
    <section className='max-w-screen-xl w-[1280px] mx-auto mt-6'>
      <ul className='w-full flex justify-between flex-shrink-0'>
        <li className='flex flex-col items-center justify-center'>
          <BrandIconItem src='/assets/brand-icon/erun.gif' name='이런위크' />
        </li>
        <li className='flex flex-col items-center justify-center'>
          <BrandIconItem
            src='/assets/brand-icon/kidikidi-icon.jpeg'
            name='키디키디'
          />
        </li>
        <li className='flex flex-col items-center justify-center'>
          <BrandIconItem
            src='/assets/brand-icon/max-members.png'
            name='맥스멤버스'
          />
        </li>
        <li className='flex flex-col items-center justify-center'>
          <BrandIconItem src='/assets/brand-icon/spao.jpeg' name='스파오' />
        </li>
        <li className='flex flex-col items-center justify-center'>
          <BrandIconItem
            src='/assets/brand-icon/discount.png'
            name='이달의혜택'
          />
        </li>
        <li className='flex flex-col items-center justify-center'>
          <BrandIconItem
            src='/assets/brand-icon/modern-house.png'
            name='모던하우스'
          />
        </li>
        <li className='flex flex-col items-center justify-center'>
          <BrandIconItem src='/assets/brand-icon/shoopen.png' name='슈펜' />
        </li>
        <li className='flex flex-col items-center justify-center'>
          <BrandIconItem src='/assets/brand-icon/eblin.png' name='에블린' />
        </li>
        <li className='flex flex-col items-center justify-center'>
          <BrandIconItem src='/assets/brand-icon/mixxo.png' name='미쏘' />
        </li>
        <li className='flex flex-col items-center justify-center'>
          <BrandIconItem src='/assets/brand-icon/clovis.png' name='클라비스' />
        </li>
      </ul>
    </section>
  );
}
