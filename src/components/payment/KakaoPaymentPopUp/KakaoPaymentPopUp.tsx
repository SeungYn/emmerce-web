'use client';

import { useCallback, useEffect, useRef } from 'react';
import PaymentModalBackground from '../common/PaymentModalBackground/PaymentModalBackground';
import { useKakaoPayStore } from '@/store/payment/kakaoPayStore';
import { useRouter } from 'next/navigation';
import { useCartClear } from '@/hooks/api/cart/useCart';

export default function KakaoPaymentPopUp() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const router = useRouter();
  const { redirect_pc_url, reset } = useKakaoPayStore();
  const cartClearMutate = useCartClear();

  const approveSuccessCallback = useCallback(
    (orderId: number | string) => {
      reset();
      router.push(`/o/complate?orderId=${orderId}`);
    },
    [reset, router]
  );

  useEffect(() => {
    const receiveCallback = (e: MessageEvent<any>) => {
      console.log(e);
      if (e.origin === 'http://localhost:3000') {
        if (e.data.approveResult === 'SUCCESS') {
          approveSuccessCallback(e.data.orderId);
          cartClearMutate.mutate();
        }
        if (e.data.approveResult === 'FAIL') {
          reset();
        }
      }
    };

    window.addEventListener('message', receiveCallback);

    return () => {
      window.removeEventListener('message', receiveCallback);
    };
  }, [approveSuccessCallback, cartClearMutate, reset]);

  if (!redirect_pc_url) return <></>;

  return (
    <PaymentModalBackground
      className={`${redirect_pc_url ? 'block' : 'hidden'}`}
    >
      <div className='w-[500px] h-[600px] bg-white '>
        <iframe
          ref={iframeRef}
          width={'100%'}
          height={'100%'}
          id='kakao-iframe'
          src={redirect_pc_url}
        ></iframe>
      </div>
    </PaymentModalBackground>
  );
}