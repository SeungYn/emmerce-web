'use client';

import { PropsWithChildren, useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { SlMagnifier } from 'react-icons/sl';

export default function FIlterFormAccordion({ children }: PropsWithChildren) {
  return <ul>{children}</ul>;
}

FIlterFormAccordion.Item = Item;

type ItemProps = {
  title: string;
};

function Item({ children, title }: PropsWithChildren<ItemProps>) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <li className='border-b border-gray-300 py-4'>
      <p
        className='font-semibold flex justify-between items-center cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}{' '}
        {isOpen ? (
          <AiOutlineMinus className='text-xl' />
        ) : (
          <AiOutlinePlus className='text-xl' />
        )}
      </p>

      {isOpen && children}
    </li>
  );
}
