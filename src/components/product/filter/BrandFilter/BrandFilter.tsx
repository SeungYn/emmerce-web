'use client';
import { BrandState } from '@/container/product/filter/BrandFilterContainer';
import { ChangeEventHandler } from 'react';
import { SlMagnifier } from 'react-icons/sl';

type Props = {
  brandList: BrandState[];
  brandListByKeyword: BrandState[];
  keyword: string;
  onChangeKeyword: ChangeEventHandler<HTMLInputElement>;
  onChangeCheckBox: ChangeEventHandler<HTMLInputElement>;
};

export default function BrandFilter({
  brandList,
  brandListByKeyword,
  keyword,
  onChangeKeyword,
  onChangeCheckBox,
}: Props) {
  return (
    <>
      <div className='flex border-b border-black mt-4'>
        <input
          type='text'
          className='w-full text-sm py-2 '
          placeholder='브랜드를 검색하세요'
          onChange={onChangeKeyword}
          value={keyword}
        />
        <SlMagnifier
          className='text-2xl '
          style={{ stroke: 'black', strokeWidth: '5' }}
        />
      </div>
      <ul className='mt-4'>
        {keyword === '' &&
          brandList.map((v) => (
            <li key={v.name} className='flex gap-2 items-center'>
              <label className='flex gap-2 items-center pl-2 text-sm text-gray-600 cursor-pointer'>
                <input
                  id='brand-checkbox'
                  type='checkbox'
                  name='brand'
                  checked={v.checked}
                  value={v.name}
                  onChange={onChangeCheckBox}
                />{' '}
                {v.name}
              </label>
            </li>
          ))}
        {keyword !== '' &&
          brandListByKeyword.map((v) => (
            <li key={v.name} className='flex gap-2 items-center'>
              <label className='flex gap-2 items-center pl-2 text-sm text-gray-600 cursor-pointer'>
                <input
                  id='brand-checkbox'
                  type='checkbox'
                  name='brand'
                  checked={v.checked}
                  value={v.name}
                  onChange={onChangeCheckBox}
                />{' '}
                {v.name}
              </label>
            </li>
          ))}
      </ul>
    </>
  );
}
