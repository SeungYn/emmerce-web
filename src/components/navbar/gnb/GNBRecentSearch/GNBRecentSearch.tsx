'use client';

import CustomGlobalLoadingLink from '@/components/common/customlink/CustomGlobalLoadingLink/CustomGlobalLoadingLink';
import useHydrateStore from '@/hooks/common/useHydrateStore';
import useRefOutClickHelper from '@/hooks/common/useRefOutClickHelper';
import {
  RecentSearchStore,
  useRecentSearchStore,
  useRecentSearchStoreAction,
} from '@/store/common/recentSearchStore';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  setOpenState: Dispatch<SetStateAction<boolean>>;
};

export default function GNBRecentSearch({ setOpenState }: Props) {
  const { clear, removeItem } = useRecentSearchStoreAction();
  const recentSearchList = useHydrateStore(
    useRecentSearchStore,
    (state: RecentSearchStore) => state.recentSearchList
  );

  return (
    <div className='absolute w-full top-full text-sm mt-2'>
      <div className='bg-gray-100 border border-gray-300 py-2 px-4 flex items-center justify-between'>
        <strong className='font-semibold'>최근 검색어</strong>
        <button
          className='text-xs text-gray-400'
          type='button'
          onClick={(e) => {
            e.stopPropagation();
            clear();
          }}
        >
          전체 삭제
        </button>
      </div>
      <div className='max-h-60 overflow-y-scroll z-[9999] py-2 px-4 bg-white border-r border-l border-gray-300'>
        <ul className='flex flex-col'>
          {(!recentSearchList ||
            (recentSearchList && recentSearchList.length === 0)) && (
            <p>최근 검색어가 없습니다.</p>
          )}
          {recentSearchList?.map((v) => (
            <li key={v} className='flex items-center'>
              <CustomGlobalLoadingLink
                href={`/search?keyword=${v}`}
                className='flex-grow'
              >
                {v}
              </CustomGlobalLoadingLink>
              <button
                className='text-lg'
                type='button'
                onClick={() => removeItem(v)}
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className='bg-gray-50 border border-gray-300 py-2 px-4 flex justify-end rounded-b-md'>
        <button
          className='text-xs text-gray-400'
          type='button'
          onClick={() => setOpenState(false)}
        >
          닫기
        </button>
      </div>
    </div>
  );
}
