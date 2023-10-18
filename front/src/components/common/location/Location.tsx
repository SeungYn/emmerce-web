'use client';
import { MdKeyboardArrowRight } from 'react-icons/md';

// 나중에 location 받아오면 HOME를 제외한 아이템 이전에 화살표 넣어주는 로직 필요
export default function Location() {
  return (
    <ul className='text-sm text-gray-400 flex items-center '>
      <a>
        <li>HOME</li>
      </a>
      <li className='px-4'>
        <MdKeyboardArrowRight />
      </li>
      <a>
        <li>캐주얼/유니섹스</li>
      </a>
      <li className='px-4'>
        <MdKeyboardArrowRight />
      </li>
      <a>
        <li>티셔츠</li>
      </a>
      <li className='px-4'>
        <MdKeyboardArrowRight />
      </li>
      {/* 마지막은 검은색 처리 */}
      <a className='text-black'>
        <li>맨투맨</li>
      </a>
    </ul>
  );
}
