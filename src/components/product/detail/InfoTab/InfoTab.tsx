'use client';

import {
  useInfoTabAction,
  useInfoTabState,
} from '@/store/product-detail/infoTabStore';
import { SCROLL_TARGET_ID, ScrollTargetName } from '@/util/lib/productDetail';
import { MouseEvent, useEffect, useState } from 'react';

export default function InfoTab() {
  const currentTab = useInfoTabState();
  const setCurrentTab = useInfoTabAction();
  const [domList, setDomList] = useState<{
    [key in ScrollTargetName]: Element | null;
  }>({ info: null, review: null });

  const onClick = (n: number, targetName: ScrollTargetName) => {
    return (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setCurrentTab(n);

      domList[targetName]?.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
      return domList.info ? false : true;
    };
  };

  useEffect(() => {
    const infoDom = document.querySelector(SCROLL_TARGET_ID.info);
    const reviewDom = document.querySelector(SCROLL_TARGET_ID.review);
    if (infoDom && reviewDom) {
      setDomList({ info: infoDom, review: reviewDom });
    }
  }, [currentTab]);

  return (
    <div className='sticky top-0 bg-white'>
      <ul className='flex text-base text-center  '>
        <li
          className={`basis-[25%]  font-semibold border  border-b border-b-black ${isActive(
            currentTab === 0
          )}`}
        >
          <a
            href='#p-info'
            className='inline-block py-4 w-full'
            onClick={onClick(0, 'info')}
          >
            상품 상세정보
          </a>
        </li>

        <li
          className={`basis-[25%]  font-semibold border  border-b border-b-black ${isActive(
            currentTab === 1
          )}`}
        >
          <a
            href='#p-review'
            className='inline-block py-4 w-full'
            onClick={onClick(1, 'review')}
          >
            고객리뷰
          </a>
        </li>

        <li
          className={`basis-[25%]  font-semibold border  border-b border-b-black ${isActive(
            currentTab === 2
          )}`}
        >
          <a
            href='#'
            className='inline-block py-4 w-full'
            onClick={() => setCurrentTab(2)}
          >
            상품 Q&A
          </a>
        </li>

        <li
          className={`basis-[25%]  font-semibold border  border-b border-b-black ${isActive(
            currentTab === 3
          )}`}
        >
          <a
            href='#'
            className='inline-block py-4 w-full'
            onClick={() => setCurrentTab(3)}
          >
            배송/반품/교환
          </a>
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
