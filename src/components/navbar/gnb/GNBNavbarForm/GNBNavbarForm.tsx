'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { SlMagnifier } from 'react-icons/sl';

export default function GNBNavbarForm() {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/search?keyword=' + search);
  };

  return (
    <form
      className='flex items-center w-[600px] border-b border-black absolute left-[50%] translate-x-[-50%]'
      onSubmit={onSubmit}
    >
      <input
        type='text'
        placeholder='검색어를 입력해 주세요.'
        className='text-base flex-grow  py-2'
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button>
        <SlMagnifier className='text-xl' />
      </button>
    </form>
  );
}
