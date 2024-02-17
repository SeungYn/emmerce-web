'use client';

import { useCallback, useEffect, useRef } from 'react';
import PaymentModalBackground from '../common/PaymentModalBackground/PaymentModalBackground';
import { useKakaoPayStore } from '@/store/payment/kakaoPayStore';
import { useRouter } from 'next/navigation';
import { useCartClear } from '@/hooks/api/cart/useCart';
import { useOrderLoadingStore } from '@/store/order/orderLoading';
import usePaymentMutation from '@/hooks/api/payment/usePaymentMutation';

export default function KakaoPaymentPopUp() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const router = useRouter();
  const { cancelMutate } = usePaymentMutation();
  const orderStore = useOrderLoadingStore();
  const { redirect_pc_url, reset } = useKakaoPayStore();
  const cartClearMutate = useCartClear();

  const approveSuccessCallback = useCallback(
    (orderId: number | string) => {
      reset();
      orderStore.handleStartLoading();
      router.push(`/o/complate?orderId=${orderId}`);
    },
    [reset, router, orderStore]
  );

  useEffect(() => {
    const receiveCallback = (e: MessageEvent<any>) => {
      if (
        e.origin === process.env.NEXT_PUBLIC_DEV_HOST ||
        e.origin === process.env.NEXT_PUBLIC_LOCAL_HOST ||
        e.origin === process.env.NEXT_PUBLIC_VERCEL_HOST ||
        e.origin === process.env.NEXT_PUBLIC_PRODUCTION_HOST
      ) {
        if (e.data.approveResult === 'SUCCESS') {
          approveSuccessCallback(e.data.orderId);
          cartClearMutate.mutate();
        }
        if (e.data.approveResult === 'FAIL') {
          alert('결제를 실패하였습니다. 다시 시도해주세요.');
          cancelMutate.mutate();
        }
      }
    };

    window.addEventListener('message', receiveCallback);

    return () => {
      window.removeEventListener('message', receiveCallback);
    };
  }, [approveSuccessCallback, cartClearMutate, reset, cancelMutate]);

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
