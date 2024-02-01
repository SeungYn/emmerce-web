import useAuthLogin from '@/hooks/auth/useAuthLoginForm';
import { FormEventHandler } from 'react';
import AuthSubmitBtn from './common/AuthSubmitBtn/AuthSubmitBtn';

export default function AuthLoginForm() {
  const { name, setName, password, setPassword, onSubmit } = useAuthLogin();

  return (
    <form
      className='flex flex-col text-base text-gray-500 px-4 pt-10'
      onSubmit={onSubmit}
    >
      <div className='flex flex-col gap-4'>
        <input
          type='text'
          name=''
          id=''
          className='p-4 border-b border-gray-300'
          placeholder='아이디'
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type='password'
          name=''
          id=''
          className='p-4 border-b border-gray-300'
          placeholder='비밀번호'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      <AuthSubmitBtn type='submit' disabled={name === '' || password === ''}>
        로그인
      </AuthSubmitBtn>
    </form>
  );
}
