import {
  Dispatch,
  FormEventHandler,
  SetStateAction,
  useCallback,
  useReducer,
  useState,
} from 'react';
import { useAuthRegister, useNameCheckDuplicate } from '../api/auth/useAuth';
import { FormState } from '@/container/auth/AuthFormContiner';

type ActionTypeName =
  | 'name'
  | 'password'
  | 'passwordCheck'
  | 'email'
  | 'tell'
  | 'birth'
  | 'reset';

type RegisterFormAction = { type: ActionTypeName; payload: string };

const initialState = {
  name: '',
  password: '',
  passwordCheck: '',
  email: '',
  tell: '',
  birth: '',
};

const initailVlidateState: {
  [key in keyof typeof initialState]: { message: string; isValid: boolean };
} = {
  name: { message: '', isValid: true },
  password: { message: '', isValid: true },
  passwordCheck: { message: '', isValid: true },
  email: { message: '', isValid: true },
  tell: { message: '', isValid: true },
  birth: { message: '', isValid: true },
};

export default function useAuthRegisterForm(
  setFormState: Dispatch<SetStateAction<FormState>>
) {
  const [formState, formDispatch] = useReducer(
    registerFormReducer,
    initialState
  );
  const [formValidState, formValidDispatch] = useReducer(
    registerValidReducer,
    initailVlidateState
  );
  const [duplicateName, setDuplicateName] = useState<{
    check: boolean;
    isDuplicate: boolean;
  }>({ check: false, isDuplicate: false });

  const nameDuplicateMutate = useNameCheckDuplicate(setDuplicateName);

  const isSamePassword = (() =>
    formState.password === formState.passwordCheck)();

  const isDuplicateName = (() => {
    if (formState.name) {
      if (!duplicateName.isDuplicate) {
        return false;
      }
      return true; // form에 name이 존재하고 중복인 경우에만 중복됬다고 표시
    }
    return false;
  })();

  // true 통과
  const checkEmpty = useCallback(
    () => Object.entries(formState).every((v) => v[1] !== ''),
    [formState]
  );

  // 최종 유효성 검사
  // empty, reg, duplicate가 다 만족해여 true
  const checkValid = () => {
    const isRegValid = Object.entries(formValidState).every(
      (v) => v[1].isValid
    );

    return (
      checkEmpty() &&
      isRegValid &&
      duplicateName.check &&
      !duplicateName.isDuplicate
    );
  };

  const resetForm = useCallback(() => {
    formDispatch({ type: 'reset', payload: '' });
    formValidDispatch({ type: 'reset', payload: '' });
  }, []);

  const registerMutate = useAuthRegister(setFormState, resetForm);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (checkValid()) {
      return registerMutate.mutate({
        name: formState.name,
        password: formState.password,
        passwordConfirm: formState.passwordCheck,
        email: formState.email,
        tel: formState.tell,
        birth: formState.birth,
      });
    }
    alert('양식을 확인해주시길 바랍니다.');
  };

  return {
    formState,
    formValidState,
    isDuplicateName,
    duplicateName,
    isSamePassword,
    formDispatch,
    formValidDispatch,
    nameDuplicateMutate,
    checkEmpty,
    onSubmit,
  };
}

function registerFormReducer(
  state: typeof initialState,
  action: RegisterFormAction
) {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.payload };
    case 'password':
      return { ...state, password: action.payload };
    case 'passwordCheck':
      return { ...state, passwordCheck: action.payload };
    case 'email':
      return { ...state, email: action.payload };
    case 'tell':
      return { ...state, tell: action.payload };
    case 'birth':
      return { ...state, birth: action.payload };
    case 'reset':
      return { ...initialState };
  }
}

const RegExps = {
  name: {
    reg: /^[a-zA-Z0-9_]{4,20}$/,
    errMsg: '영문 또는 숫자만 가능하며, 4자리 이상 20자리 이하를 입력해주세요.',
  },
  password: {
    reg: /^[a-zA-Z0-9_!@#$]{4,20}$/,
    errMsg:
      '영문 또는 숫자, !@#$ 특수기호만 가능하며, 4자리 이상 20자리 이하를 입력해주세요.',
  },
  passwordCheck: {
    reg: /^[a-zA-Z0-9_!@#$]{4,20}$/,
    errMsg:
      '영문 또는 숫자, !@#$ 특수기호만 가능하며, 4자리 이상 20자리 이하를 입력해주세요.',
  },
  email: {
    reg: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
    errMsg: '이메일 형식을 입력해주세요.',
  },
  tell: {
    reg: /^\d{11}$/,
    errMsg: '11자리 전화번호를 입력해주세요.',
  },
  birth: {
    reg: /^\d{6}$/,
    errMsg: '생년월일 6자리를 입력해주세요.',
  },
};

function registerValidReducer(
  state: typeof initailVlidateState,
  action: RegisterFormAction
) {
  const isEmpty = ((str: string) => str === '')(action.payload);

  switch (action.type) {
    case 'name':
      if (isEmpty) return createInValidEmptyState(state, 'name');
      if (validRegExp(RegExps.name.reg, action.payload))
        return createValidState(state, 'name');
      return {
        ...state,
        name: { message: RegExps.name.errMsg, isValid: false },
      };
    case 'password':
      if (isEmpty) return createInValidEmptyState(state, 'password');
      if (validRegExp(RegExps.password.reg, action.payload))
        return createValidState(state, 'password');
      return {
        ...state,
        password: { message: RegExps.password.errMsg, isValid: false },
      };
    case 'passwordCheck':
      if (isEmpty) return createInValidEmptyState(state, 'passwordCheck');
      if (validRegExp(RegExps.passwordCheck.reg, action.payload))
        return createValidState(state, 'passwordCheck');
      return {
        ...state,
        passwordCheck: {
          message: RegExps.passwordCheck.errMsg,
          isValid: false,
        },
      };
    case 'email':
      if (isEmpty) return createInValidEmptyState(state, 'email');
      if (validRegExp(RegExps.email.reg, action.payload))
        return createValidState(state, 'email');
      return {
        ...state,
        email: { message: RegExps.email.errMsg, isValid: false },
      };
    case 'tell':
      if (isEmpty) return createInValidEmptyState(state, 'tell');
      if (validRegExp(RegExps.tell.reg, action.payload))
        return createValidState(state, 'tell');
      return {
        ...state,
        tell: { message: RegExps.tell.errMsg, isValid: false },
      };
    case 'birth':
      if (isEmpty) return createInValidEmptyState(state, 'birth');
      if (validRegExp(RegExps.birth.reg, action.payload))
        return createValidState(state, 'birth');
      return {
        ...state,
        birth: { message: RegExps.birth.errMsg, isValid: false },
      };
    case 'reset':
      return { ...initailVlidateState };
  }
}

const emptyValid = Object.freeze({
  message: '값을 입력해주세요.',
  isValid: false,
});

const successValid = Object.freeze({
  message: '',
  isValid: true,
});

// {...state, key: {message, isValid}} 리턴하는 함수
function createInValidEmptyState(
  state: typeof initailVlidateState,
  key: ActionTypeName
) {
  return { ...state, [key]: emptyValid };
}

function createValidState(
  state: typeof initailVlidateState,
  key: ActionTypeName
) {
  return { ...state, [key]: successValid };
}

function validRegExp(reg: RegExp, value: string) {
  return reg.test(value);
}
