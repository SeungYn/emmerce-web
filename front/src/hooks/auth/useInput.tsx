import { Dispatch, SetStateAction, useState } from 'react';

export default function useInput(
  reg: RegExp
): [string, Dispatch<SetStateAction<string>>, boolean] {
  const [input, setInput] = useState('');

  const isValidate = input === '' ? true : reg.test(input);

  return [input, setInput, isValidate];
}
