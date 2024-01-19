'use client';

import {
  useInfoTabAction,
  useInfoTabState,
} from '@/store/product-detail/infoTabStore';
import {
  INFOTAB_NUMBER,
  SCROLL_TARGET_ID,
  ScrollTargetName,
} from '@/util/lib/productDetail';
import { MouseEvent, useEffect, useRef } from 'react';

export default function InfoTab() {
  const currentTab = useInfoTabState();
  const setCurrentTab = useInfoTabAction();
  const domList = useRef<{
    [key in ScrollTargetName]: Element | null;
  }>();

  const onClick = (n: number, targetName: ScrollTargetName) => {
    return (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setCurrentTab(n);

      if (!domList.current) return true;

      domList.current[targetName]!.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
      return false;
    };
  };

  useEffect(() => {
    const infoDom = document.getElementById(SCROLL_TARGET_ID.info);
    const reviewDom = document.getElementById(SCROLL_TARGET_ID.review);
    const qnaDom = document.getElementById(SCROLL_TARGET_ID.qna);
    const deliveryDom = document.getElementById(SCROLL_TARGET_ID.delivery);

    if (infoDom && reviewDom && qnaDom && deliveryDom) {
      domList.current = {
        info: infoDom,
        review: reviewDom,
        qna: qnaDom,
        delivery: deliveryDom,
      };
    }
  }, []);

  return (
    <div className='sticky top-0 bg-white'>
      <ul className='flex text-base text-center text-gray-300'>
        <li
          className={`basis-[25%]  font-semibold border  border-b border-b-black ${isActive(
            currentTab === INFOTAB_NUMBER.info
          )}`}
        >
          <a
            href='#p-info'
            className='inline-block py-4 w-full'
            onClick={onClick(INFOTAB_NUMBER.info, 'info')}
          >
            상품 상세정보
          </a>
        </li>

        <li
          className={`basis-[25%]  font-semibold border  border-b border-b-black ${isActive(
            currentTab === INFOTAB_NUMBER.review
          )}`}
        >
          <a
            href='#p-review'
            className='inline-block py-4 w-full'
            onClick={onClick(INFOTAB_NUMBER.review, 'review')}
          >
            고객리뷰
          </a>
        </li>

        <li
          className={`basis-[25%]  font-semibold border  border-b border-b-black ${isActive(
            currentTab === INFOTAB_NUMBER.qna
          )}`}
        >
          <a
            href='#'
            className='inline-block py-4 w-full'
            onClick={onClick(INFOTAB_NUMBER.qna, 'qna')}
          >
            상품 Q&A
          </a>
        </li>

        <li
          className={`basis-[25%]  font-semibold border  border-b border-b-black ${isActive(
            currentTab === INFOTAB_NUMBER.delivery
          )}`}
        >
          <a
            href='#'
            className='inline-block py-4 w-full'
            onClick={onClick(INFOTAB_NUMBER.delivery, 'delivery')}
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
    ? 'border border-black border-b-0 border-t-4 border-x-1 text-black'
    : 'border-gray-300';
};
