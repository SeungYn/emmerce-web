import { PropsWithChildren } from 'react';

type Props = {
  className?: string;
};

export default function PaymentModalBackground({
  children,
  className,
}: PropsWithChildren<Props>) {
  return (
    <section
      className={`fixed w-full h-full z-50 top-0 left-0 flex justify-center items-center ${className}`}
      style={{ backgroundColor: 'rgba(0,0,0, 0.5)' }}
    >
      {children}
    </section>
  );
}
