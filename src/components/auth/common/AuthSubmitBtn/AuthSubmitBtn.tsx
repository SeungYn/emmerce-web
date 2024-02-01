import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;
export default function AuthSubmitBtn({ ...props }: Props) {
  return (
    <button
      className={`w-full p-4 text-white bg-black text-lg rounded-full mt-10 disabled:bg-slate-300`}
      {...props}
    />
  );
}
