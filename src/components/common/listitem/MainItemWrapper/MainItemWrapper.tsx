import { PropsWithChildren } from 'react';

type Props = {
  width: number;
  height: number;
  pl: number;
  pr: number;
  className?: string;
};

export default function MainItemWrapper({
  children,
  width,
  height,
  pl,
  pr,
  className,
}: PropsWithChildren<Props>) {
  return (
    <li
      className={`${className}`}
      style={{ width, height, paddingLeft: pl, paddingRight: pr }}
    >
      {children}
    </li>
  );
}
