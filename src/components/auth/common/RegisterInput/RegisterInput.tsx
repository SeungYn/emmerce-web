'use client';

import { InputHTMLAttributes } from 'react';

type Props = {
  isValid?: boolean;
  errMsg: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function RegisterInput({ errMsg, ...attr }: Props) {
  return (
    <div className='relative '>
      <span className='absolute text-red-400 text-xs'>{errMsg}</span>
      <input
        className={`p-6 border-b  border-gray-300 w-full ${
          errMsg === '' ? '' : 'border-red-300'
        }`}
        {...attr}
      />
    </div>
  );
}
