'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { SlMagnifier } from 'react-icons/sl';
import GNBRecentSearch from '../GNBRecentSearch/GNBRecentSearch';
import { useRecentSearchStoreAction } from '@/store/common/recentSearchStore';
import useRefOutClickHelper from '@/hooks/common/useRefOutClickHelper';
import useCustomRouter from '@/hooks/common/useCustomRouter';

export default function GNBNavbarForm() {
  const [search, setSearch] = useState<string>('');
  const [openRecentSearch, setOpenRecentSearch] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { ref } = useRefOutClickHelper<HTMLFormElement>({
    setOpenState: setOpenRecentSearch,
  });
  const { addItem } = useRecentSearchStoreAction();
  const router = useCustomRouter();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search === '') return;
    addItem(search);
    setOpenRecentSearch(false);

    if (inputRef.current) {
      inputRef.current.blur();
    }

    router.push('/search?keyword=' + search);
  };

  return (
    <form
      ref={ref}
      className='flex items-center w-[600px] border-b border-black absolute left-[50%] translate-x-[-50%] z-10'
      onSubmit={onSubmit}
    >
      <input
        type='text'
        ref={inputRef}
        placeholder='검색어를 입력해 주세요.'
        className='text-base flex-grow  py-2'
        onChange={(e) => setSearch(e.target.value)}
        onFocus={(e) => {
          setOpenRecentSearch(true);
        }}
        value={search}
      />
      <button>
        <SlMagnifier className='text-xl' />
      </button>
      {openRecentSearch && (
        <GNBRecentSearch setOpenState={setOpenRecentSearch} />
      )}
    </form>
  );
}
