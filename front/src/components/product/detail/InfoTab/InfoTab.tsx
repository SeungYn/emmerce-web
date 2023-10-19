'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function InfoTab() {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div className='pt-10'>
      <ul className='flex text-base text-center'>
        <li
          className={`basis-[25%]  font-semibold border  border-b border-b-black ${isActive(
            currentTab === 0
          )}`}
        >
          <Link
            href='#'
            className='inline-block py-4 w-full'
            onClick={() => setCurrentTab(0)}
          >
            상품 상세정보
          </Link>
        </li>

        <li
          className={`basis-[25%]  font-semibold border  border-b border-b-black ${isActive(
            currentTab === 1
          )}`}
        >
          <Link
            href='#'
            className='inline-block py-4 w-full'
            onClick={() => setCurrentTab(1)}
          >
            고객리뷰(265)
          </Link>
        </li>

        <li
          className={`basis-[25%]  font-semibold border  border-b border-b-black ${isActive(
            currentTab === 2
          )}`}
        >
          <Link
            href='#'
            className='inline-block py-4 w-full'
            onClick={() => setCurrentTab(2)}
          >
            상품 Q&A(23)
          </Link>
        </li>

        <li
          className={`basis-[25%]  font-semibold border  border-b border-b-black ${isActive(
            currentTab === 3
          )}`}
        >
          <Link
            href='#'
            className='inline-block py-4 w-full'
            onClick={() => setCurrentTab(3)}
          >
            배송/반품/교환
          </Link>
        </li>
      </ul>
    </div>
  );
}
const isActive = (flag: boolean) => {
  return flag
    ? 'border border-black border-b-0 border-t-4 border-x-1  '
    : 'border-gray-300';
};
