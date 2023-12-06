'use client';

import NextURLSearchParams from '@/util/lib/urlSearchParams';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent } from 'react';

export default function ListManipulation() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = new NextURLSearchParams(useSearchParams());

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    router.push(pathname + '?' + searchParams.setQueryString('limit', value));
  };

  return (
    <div className='flex justify-between text-sm text-gray-500 border-b border-gray-300 py-4'>
      <ul className='flex gap-8'>
        <li>낮은가격순</li>
        <li>높은가격순</li>
        <li>상품평순</li>
        <li>인기상품순</li>
        <li>신상품순</li>
        <li>할인율높은순</li>
      </ul>
      <select onChange={onChange}>
        <option value='10'>10개씩보기</option>
        <option value='20'>20개씩보기</option>
        <option value='30'>30개씩보기</option>
        <option value='40'>40개씩보기</option>
        <option value='50'>50개씩보기</option>
        <option value='60'>60개씩보기</option>
      </select>
    </div>
  );
}
