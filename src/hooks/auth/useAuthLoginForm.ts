import useInput from '@/hooks/auth/useInput';
import { FormEventHandler, useCallback } from 'react';
import { useAuthLogin } from '../api/auth/useAuth';

export default function useAuthLoginForm() {
  const [name, setName] = useInput(/''/);
  const [password, setPassword] = useInput(/''/);

  const resetForm = useCallback(() => {
    setName('');
    setPassword('');
    //eslint-disable-next-line
  }, []);

  const loginMutate = useAuthLogin(() => {
    resetForm();
  });

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    loginMutate({ name, password });
  };

  return { name, setName, password, setPassword, onSubmit };
}
