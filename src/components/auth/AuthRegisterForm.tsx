import useAuthRegisterForm from '@/hooks/auth/useAuthRegisterForm';
import RegisterInput from './common/RegisterInput/RegisterInput';
import { Dispatch, SetStateAction } from 'react';
import { FormState } from '@/container/auth/AuthFormContiner';
import AuthSubmitBtn from './common/AuthSubmitBtn/AuthSubmitBtn';

type Props = {
  setFormState: Dispatch<SetStateAction<FormState>>;
};

export default function AuthRegisterForm({ setFormState }: Props) {
  const {
    formState,
    formValidState,
    duplicateName,
    isDuplicateName,
    isSamePassword,
    formDispatch,
    formValidDispatch,
    nameDuplicateMutate,
    checkEmpty,
    onSubmit,
  } = useAuthRegisterForm(setFormState);

  return (
    <form
      className='flex flex-col text-base text-gray-500 px-4 pt-10'
      onSubmit={onSubmit}
    >
      <div className='flex flex-col gap-4'>
        <div className='relative '>
          <span className='absolute text-red-400 text-xs'>
            {formValidState.name.message}
          </span>
          <input
            className={`p-6 border-b  border-gray-300 w-full ${
              formValidState.name.message === '' ? '' : 'border-red-300'
            } disabled:bg-slate-200`}
            type='text'
            placeholder='아이디'
            onChange={(e) => {
              formDispatch({ type: 'name', payload: e.target.value });
              formValidDispatch({ type: 'name', payload: e.target.value });
            }}
            onBlur={(e) =>
              formValidDispatch({ type: 'name', payload: e.target.value })
            }
            value={formState.name}
            disabled={
              duplicateName.check && !duplicateName.isDuplicate ? true : false
            }
          />
          <button
            type='button'
            className='text-sm bg-black text-white px-4 py-2 rounded-xl absolute right-0 top-1/2 -translate-y-1/2 disabled:bg-slate-300'
            disabled={formState.name.length < 4 ? true : false}
            onClick={() => nameDuplicateMutate(formState.name)}
          >
            중복검사
          </button>
          {formState.name && duplicateName.check ? (
            !isDuplicateName ? (
              <span className='text-green-500 block pt-2 absolute bottom-[0px]'>
                사용하실 수 있는 아이디 입니다.
              </span>
            ) : (
              <span className='text-red-500 block pt-2 absolute bottom-[0px]'>
                사용하실 수 없는 아이디 입니다.
              </span>
            )
          ) : (
            ''
          )}
        </div>
        <RegisterInput
          type='text'
          placeholder='이메일'
          onChange={(e) => {
            formDispatch({ type: 'email', payload: e.target.value });
            formValidDispatch({ type: 'email', payload: e.target.value });
          }}
          onBlur={(e) =>
            formValidDispatch({ type: 'email', payload: e.target.value })
          }
          value={formState.email}
          errMsg={formValidState.email.message}
        />
        <RegisterInput
          type='password'
          placeholder='비밀번호'
          onChange={(e) => {
            formDispatch({ type: 'password', payload: e.target.value });
            formValidDispatch({ type: 'password', payload: e.target.value });
          }}
          onBlur={(e) =>
            formValidDispatch({ type: 'password', payload: e.target.value })
          }
          value={formState.password}
          errMsg={formValidState.password.message}
        />
        <RegisterInput
          type='password'
          placeholder='비밀번호 확인'
          onChange={(e) => {
            formDispatch({ type: 'passwordCheck', payload: e.target.value });
            formValidDispatch({
              type: 'passwordCheck',
              payload: e.target.value,
            });
          }}
          onBlur={(e) =>
            formValidDispatch({
              type: 'passwordCheck',
              payload: e.target.value,
            })
          }
          value={formState.passwordCheck}
          errMsg={
            formValidState.passwordCheck.message ||
            (isSamePassword ? '' : '비밀번호와 다릅니다.')
          }
        />
        <RegisterInput
          type='text'
          placeholder='전화번호'
          onChange={(e) => {
            formDispatch({ type: 'tell', payload: e.target.value });
            formValidDispatch({ type: 'tell', payload: e.target.value });
          }}
          onBlur={(e) =>
            formValidDispatch({ type: 'tell', payload: e.target.value })
          }
          value={formState.tell}
          errMsg={formValidState.tell.message}
        />
        <RegisterInput
          type='text'
          placeholder='생년월일'
          onChange={(e) => {
            formDispatch({ type: 'birth', payload: e.target.value });
            formValidDispatch({ type: 'birth', payload: e.target.value });
          }}
          onBlur={(e) =>
            formValidDispatch({ type: 'birth', payload: e.target.value })
          }
          value={formState.birth}
          errMsg={formValidState.birth.message}
        />
      </div>

      <AuthSubmitBtn type='submit' disabled={!checkEmpty()}>
        회원가입
      </AuthSubmitBtn>
    </form>
  );
}
