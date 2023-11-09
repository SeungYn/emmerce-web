'use client';

import Image from 'next/image';
import Category from '../category/Category/Category';
import NavbarForm from '../NavbarForm/NavbarForm';
import { useAuthFormContext } from '@/context/auth/AuthFormContext';
import { useUserContext } from '@/context/auth/UserContext';
import useAuth from '@/hooks/api/auth/useAuth';

type Props = {
  isLogo: boolean;
};

export default function Navbar({ isLogo = true }: Props) {
  const { handleOpen } = useAuthFormContext();
  const { userInfo } = useUserContext();
  const { logoutMutate } = useAuth();

  return (
    <nav className='w-full' suppressHydrationWarning>
      {/* top section */}
      <section className='border-b border-gray-300 py-2 '>
        <div className='flex justify-between max-w-screen-xl mx-auto px-1'>
          <NavbarForm />
          <ul className='flex [&>*:not(:last-child)]:border-r text-gray-400 text-xs items-center'>
            <li className='border-gray-200 px-4'>NOTICE</li>
            <li className='border-gray-200 px-4'>MY</li>
            <li className='border-gray-200 px-4'>CART</li>
            {userInfo?.token ? (
              <li
                className='border-gray-200 px-4'
                onClick={() => {
                  logoutMutate();
                  console.log(123123);
                }}
              >
                LOGOUT
              </li>
            ) : (
              <li
                className='border-gray-200 px-4 cursor-pointer'
                onClick={handleOpen}
              >
                LOGIN
              </li>
            )}
          </ul>
        </div>
      </section>

      {/* middle section */}
      {isLogo && (
        <section className='w-full border-b border-gray-300 py-2'>
          <Image
            className='mx-auto'
            src='/assets/eland-logo.png'
            width={200}
            height={100}
            alt='이머스 로고'
          />
        </section>
      )}

      {/* bottom section */}
      <Category />
    </nav>
  );
}
