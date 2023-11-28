'use client';

import { useRef } from 'react';
import PaymentModalBackground from '../common/PaymentModalBackground/PaymentModalBackground';

export default function KakaoPaymentPopUp() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <PaymentModalBackground>
      <div className='w-[600px] h-[600px] bg-white'>
        <iframe
          width={'100%'}
          height={'100%'}
          ref={iframeRef}
          id='kakao-iframe'
          src='https://online-pay.kakao.com/mockup/v1/d23c2b55a2644a1b5bac960942ef71a50a029f0a9bbd153917925f71a0b01a4e/info'
        ></iframe>
      </div>
    </PaymentModalBackground>
  );
}
