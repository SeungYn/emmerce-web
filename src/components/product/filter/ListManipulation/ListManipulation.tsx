'use client';

import useCustomRouter from '@/hooks/common/useCustomRouter';
import NextURLSearchParams from '@/util/lib/urlSearchParams';
import { usePathname, useSearchParams } from 'next/navigation';
import { ChangeEvent } from 'react';

export default function ListManipulation() {
  const router = useCustomRouter();
  const pathname = usePathname();
  const searchParams = new NextURLSearchParams(useSearchParams());

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    router.push(pathname + '?' + searchParams.setQueryString('limit', value));
  };

  const onClick = (sortKey: string) => {
    router.push(
      pathname + '?' + searchParams.setQueryString('sortkey', sortKey)
    );
  };

  return (
    <div className='flex justify-between text-sm text-gray-500 border-b border-gray-300 py-4'>
      <ul className='flex gap-8'>
        <li
          className={`cursor-pointer ${
            searchParams.getQueryString('sortkey') === '10'
              ? 'text-black font-bold'
              : 'text-text-gray-500'
          }`}
          onClick={() => onClick('10')}
        >
          낮은가격순
        </li>
        <li
          className={`cursor-pointer ${
            searchParams.getQueryString('sortkey') === '20'
              ? 'text-black font-bold'
              : 'text-text-gray-500'
          }`}
          onClick={() => onClick('20')}
        >
          높은가격순
        </li>
        <li
          className={`cursor-pointer ${
            searchParams.getQueryString('sortkey') === '30'
              ? 'text-black font-bold'
              : 'text-text-gray-500'
          }`}
          onClick={() => onClick('30')}
        >
          좋아요순
        </li>
        <li
          className={`cursor-pointer ${
            searchParams.getQueryString('sortkey') === '40'
              ? 'text-black font-bold'
              : 'text-text-gray-500'
          }`}
          onClick={() => onClick('40')}
        >
          할인율높은순
        </li>
      </ul>
      <select onChange={onChange}>
        <option value='40'>40개씩보기</option>
        <option value='60'>60개씩보기</option>
        <option value='80'>80개씩보기</option>
      </select>
    </div>
  );
}
