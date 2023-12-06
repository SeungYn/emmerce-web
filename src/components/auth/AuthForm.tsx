'use client';
import { AuthFormContextType } from '@/context/auth/AuthFormContext';
import useAuth, { useAuthRegister } from '@/hooks/api/auth/useAuth';
import useInput from '@/hooks/auth/useInput';
import service from '@/service/client';
import { motion } from 'framer-motion';
import { FormEvent, useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

type Props = {} & AuthFormContextType;

export default function AuthForm({ isOpen, handleClose, handleOpen }: Props) {
  const [formState, setFormState] = useState<FormState>(FormState.login);
  const [name, setName, isNameValidate] = useInput(/''/);
  const [password, setPassword, isPasswordValidate] = useInput(/''/);
  const [email, setEmail, isEmailValidate] = useInput(/''/);
  const [passwordCheck, setPasswordCheck, isPasswordCheckValidate] =
    useInput(/''/);
  const [tell, setTell, isTellValidate] = useInput(/''/);
  const [birth, setBirth, isBirthValidate] = useInput(/''/);
  const { loginMutate } = useAuth();
  const registerMutate = useAuthRegister(setFormState);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formState === FormState.login) {
      loginMutate({ name, password });
    } else {
      registerMutate.mutate({
        name,
        password,
        passwordConfirm: passwordCheck,
        email,
        tel: tell,
        birth,
      });
    }
    setName('');
    setPassword('');
    setEmail('');
    setTell('');
    setBirth('');
  };

  return (
    <motion.div
      className='w-[580px] bg-white rounded-lg flex-shrink-0 text-black pb-10'
      initial={'hidden'}
      animate={isOpen ? 'visible' : 'hidden'}
      // variants={{
      //   hidden: { display: 'none' },
      //   visible: {
      //     display: 'block',
      //     transition: {
      //       when: 'beforeChildren',
      //       duration: 10,
      //     },
      //   },
      // }}

      transition={{ delay: 1000 }}
    >
      <header className='flex justify-between p-4 text-xl border-b-gray-300'>
        <p aria-hidden></p>
        <h2>로그인</h2>
        <button className='cursor-pointer' onClick={handleClose}>
          <AiOutlineClose />
        </button>
      </header>
      <section className='p-8  '>
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
          <form
            key={FormState.login}
            className='flex flex-col text-base text-gray-500 px-4'
            onSubmit={onSubmit}
          >
            <input
              type='text'
              name=''
              id=''
              className='p-4 border-b border-gray-300'
              placeholder='아이디'
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type='password'
              name=''
              id=''
              className='p-4 border-b border-gray-300'
              placeholder='비밀번호'
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className='flex justify-between pt-6'>
              <div>
                <label>
                  <input type='checkbox' name='' id='' />
                  <span>아이디 저장</span>
                </label>
              </div>
              <span>아이디/비밀번호 찾기</span>
            </div>
            <button className='w-full p-4 text-white bg-black text-lg rounded-full mt-4'>
              로그인
            </button>
          </form>
        ) : (
          <form
            key={FormState.register}
            className='flex flex-col text-base text-gray-500 px-4'
            onSubmit={onSubmit}
          >
            <input
              type='text'
              name=''
              id=''
              className='p-4 border-b border-gray-300'
              placeholder='아이디'
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type='email'
              name=''
              id=''
              className='p-4 border-b border-gray-300'
              placeholder='이메일'
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              name=''
              id=''
              className='p-4 border-b border-gray-300'
              placeholder='비밀번호'
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type='password'
              name=''
              id=''
              className='p-4 border-b border-gray-300'
              placeholder='비밀번호확인'
              onChange={(e) => setPasswordCheck(e.target.value)}
            />
            <input
              type='tel'
              name=''
              id=''
              className='p-4 border-b border-gray-300'
              placeholder='전화번호'
              onChange={(e) => setTell(e.target.value)}
            />
            <input
              type='text'
              name=''
              id=''
              className='p-4 border-b border-gray-300'
              placeholder='생년월일 6자리 ex)980629'
              onChange={(e) => setBirth(e.target.value)}
            />

            <button className='w-full p-4 text-white bg-black text-lg rounded-full mt-4'>
              회원가입
            </button>
          </form>
        )}
      </section>
    </motion.div>
  );
}

export enum FormState {
  login,
  register,
}
