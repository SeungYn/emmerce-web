import { PropsWithChildren } from 'react';

export default function PaymentModalBackground({
  children,
}: PropsWithChildren) {
  return (
    <section
      className='fixed w-full h-full z-50 top-0 left-0 flex justify-center items-center'
      style={{ backgroundColor: 'rgba(0,0,0, 0.5)' }}
    >
      {children}
    </section>
  );
}
