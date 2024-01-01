import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function CartTableHeaderBtn({ className, ...rest }: Props) {
  return <button className={`border p-1 px-3 ${className}`} {...rest} />;
}
