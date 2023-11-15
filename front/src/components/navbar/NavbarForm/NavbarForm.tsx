'use client';

import { useState } from 'react';
import { SlMagnifier } from 'react-icons/sl';

export default function NavbarForm() {
  const [search, setSearch] = useState<string>('');
  return (
    <form className='flex items-center'>
      <input
        type='text'
        placeholder='만만한 검은티셔츠'
        className='text-sm'
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button>
        <SlMagnifier />
      </button>
    </form>
  );
}
