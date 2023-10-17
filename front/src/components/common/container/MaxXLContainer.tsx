import { PropsWithChildren } from 'react';

type Props = {
  className?: string;
};

export default function MaxXLContainer({
  children,
  className,
}: PropsWithChildren<Props>) {
  return (
    <div className={`max-w-screen-xl mx-auto ${className}`}>{children}</div>
  );
}
