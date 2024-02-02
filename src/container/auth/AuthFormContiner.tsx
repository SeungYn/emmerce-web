'use client';
import AuthLoginForm from '@/components/auth/AuthLoginForm';
import AuthRegisterForm from '@/components/auth/AuthRegisterForm';
import { AuthFormContextType } from '@/context/auth/AuthFormContext';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

type Props = {} & AuthFormContextType;

export default function AuthFormContiner({ isOpen, handleClose }: Props) {
  const [formState, setFormState] = useState<FormState>(FormState.login);
  return (
    <motion.div
      className='w-[580px] bg-white rounded-lg flex-shrink-0 text-black pb-10 '
      initial={'hidden'}
      animate={isOpen ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { delay: 0.3 },
        },
      }}
    >
      <header className='flex justify-between p-4 text-xl border-b-gray-300'>
        <p aria-hidden></p>
        <h2>{formState === FormState.login ? '로그인' : '회원가입'}</h2>
        <button className='cursor-pointer' onClick={handleClose}>
          <AiOutlineClose />
        </button>
      </header>
      <section className='p-8 max-h-[600px] overflow-y-auto'>
        {formState === FormState.login ? (
          <p className='text-3xl px-10'>
            이랜드보다
            <br />
            편리하게
          </p>
        ) : (
          <p className='text-3xl px-10'>
            환영합니다.
            <br />
            이랜드보단 이머스로
          </p>
        )}
        <nav className='text-lg text-gray-600 flex border-b border-gray-300'>
          <button
            className={`basis-[50%] flex-shrink-0 py-4 border-b-2 ${
              formState === FormState.login ? 'border-black' : ''
            }`}
            onClick={() => setFormState(FormState.login)}
          >
            로그인
          </button>
          <button
            className={`basis-[50%] flex-shrink-0 py-4 border-b-2 ${
              formState === FormState.register ? 'border-black' : ''
            }`}
            onClick={() => setFormState(FormState.register)}
          >
            회원가입
          </button>
        </nav>
        {formState === FormState.login ? (
          <AuthLoginForm />
        ) : (
          <AuthRegisterForm setFormState={setFormState} />
        )}
      </section>
    </motion.div>
  );
}

export enum FormState {
  login,
  register,
}
