'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MyNavigation() {
  const pathname = usePathname();
  return (
    <nav className='basis-[190px] flex-shrink-0'>
      <h2 className='pb-4 px-5 text-2xl font-bold'>마이페이지</h2>
      <div className='border border-gray-300'>
        <div>
          <div className='px-6 pt-4 text-lg'>
            <strong>나의 쇼핑정보</strong>
          </div>
          <ul className='pb-4 text-gray-500'>
            <li>
              <Link
                href='/my/order'
                className={`${LinkStyle} ${isActive(pathname, '/my/order')}`}
              >
                주문/배송조회
              </Link>
            </li>
            <li>
              <Link href='#' className={`${LinkStyle} `}>
                주문/배송조회
              </Link>
            </li>
            <li>
              <Link href='#' className={`${LinkStyle} `}>
                주문/배송조회
              </Link>
            </li>
          </ul>
          <div className='h-[1px] bg-gray-300 mx-6'></div>
        </div>

        <div>
          <div className='px-6 pt-4 text-lg'>
            <strong>나의 쇼핑정보</strong>
          </div>
          <ul className='pb-4 text-gray-500'>
            <li>
              <Link href='#' className={`${LinkStyle} `}>
                주문/배송조회
              </Link>
            </li>
            <li>
              <Link href='#' className={`${LinkStyle} `}>
                주문/배송조회
              </Link>
            </li>
            <li>
              <Link href='#' className={`${LinkStyle} `}>
                주문/배송조회
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

const isActive = (pathname: string, targetPathname: string) =>
  pathname === targetPathname ? active : notActive;
const LinkStyle =
  'px-6 py-1 block text-gray-500 bg-white hover:text-white hover:bg-zinc-500';
const active = 'text-white bg-zinc-500';
const notActive = 'text-gray-500 bg-white';
