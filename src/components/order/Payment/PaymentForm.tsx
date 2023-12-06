'use client';
import { useState } from 'react';

export default function PaymentForm() {
  const [currentPayment, setCurrnetPayment] = useState('kakao');
  return (
    <div className='my-8'>
      <div className='border-b border-black'>
        <h3 className='text-xl font-bold mb-4 '>결제 수단</h3>
      </div>

      <div className='py-4'>
        <button
          className={`w-[20%] p-4 flex justify-center border border-zinc-500 ${
            currentPayment === 'kakao' ? 'bg-yellow-300' : 'bg-white'
          } `}
          onClick={() => setCurrnetPayment('kakao')}
        >
          <div
            className='bg-paymentIcons w-[108px] h-[28px] '
            style={{
              backgroundPosition: '-324px -28px',
            }}
          ></div>
        </button>
      </div>

      <p>
        카카오톡앱에 카드나 카카오머니를 등록하여 결제비밀번호 또는 지문인증
        등으로 결제할 수 있는 간편결제 서비스입니다.
        <br />
        - 카드(신용/체크) : 카카오페이에 카드를 등록하여 사용가능합니다.
        <br />
        - 카카오머니 : 카카오페이에 계좌를 연결하여 사용가능합니다.
        <br />
        - 카카오페이에서 제공하는 카드사별 무이자, 할인혜택을 받을 수 있습니다.
        <br />
        (이랜드몰에서 제공하는 카드사 이벤트 및 제휴카드 혜택은 제공되지
        않습니다.)
      </p>
    </div>
  );
}
