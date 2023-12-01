'use client';

import { useState } from 'react';
import { SlMagnifier } from 'react-icons/sl';

export default function NavbarForm() {
  const [search, setSearch] = useState<string>('');
  return (
    <form className='flex items-center w-[600px] border-b border-black'>
      <input
        type='text'
        placeholder='메이플 지작 스칸다 60% 할인 판매중'
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
