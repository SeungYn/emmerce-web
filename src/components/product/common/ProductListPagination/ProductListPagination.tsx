'use client';

import { Paging } from '@/service/types/product';
import { PAGES_PER_BLOCK } from '@/util/lib/constant';
import NextURLSearchParams from '@/util/lib/urlSearchParams';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md';

type Props = {} & Paging;

export default function ProductListPagination({
  pageNumber,
  totalPages,
  totalElements,
  first,
  last,
}: Props) {
  const pathname = usePathname();
  const searchParam = new NextURLSearchParams(useSearchParams());

  const currentBlock = Math.floor(pageNumber / PAGES_PER_BLOCK) + 1;
  const pageArr = Array.from(
    {
      length: PAGES_PER_BLOCK >= totalPages ? totalPages : PAGES_PER_BLOCK,
    },
    (_, i) => i + currentBlock
  );

  return (
    <ul className='flex gap-4 items-center'>
      {!first && (
        <>
          <li>
            <Link
              href={`${pathname}?${searchParam.setQueryString(
                'page',
                (1).toString()
              )}`}
            >
              <MdKeyboardDoubleArrowLeft />
            </Link>
          </li>
          <li>
            <Link
              href={`${pathname}?${searchParam.setQueryString(
                'page',
                (pageNumber - 1).toString()
              )}`}
            >
              <MdKeyboardArrowLeft />
            </Link>
          </li>
        </>
      )}
      {pageArr.map((v) => (
        <li
          key={v}
          className={`${v === pageNumber ? 'text-black' : 'text-gray-400'}`}
        >
          <Link href=''>{v}</Link>
        </li>
      ))}
      {!last && (
        <>
          <li>
            <Link
              href={`${pathname}?${searchParam.setQueryString(
                'page',
                (pageNumber + 1).toString()
              )}`}
            >
              <MdKeyboardArrowRight />
            </Link>
          </li>
          <li>
            <Link
              href={`${pathname}?${searchParam.setQueryString(
                'page',
                totalPages.toString()
              )}`}
            >
              <MdKeyboardDoubleArrowRight />
            </Link>
          </li>
        </>
      )}
    </ul>
  );
}
