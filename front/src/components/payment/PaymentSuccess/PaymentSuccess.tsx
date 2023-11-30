'use client';

import { usePaymentApproveMutate } from '@/hooks/api/payment/usePaymentMutation';
import { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

type Props = {
  orderId: number | string;
  pg_token: string;
};

export default function PaymentSuccess({ orderId, pg_token }: Props) {
  const [approveResult, setApproveResult] = useState<ApproveResult>({
    isLoading: true,
    result: 'PENDING',
  });
  const approveMutate = usePaymentApproveMutate(setApproveResult);

  const onSendParentWindowMsg = (data: any) => {
    window.parent.postMessage(data);
  };

  useEffect(() => {
    approveMutate.mutate({ orderId, pg_token });
  }, []);

  if (approveResult.isLoading)
    return (
      <div className='flex flex-col justify-center items-center'>
        <BeatLoader color='#626262' size='40px' />
        <h2 className='text-2xl font-bold mt-4'>결제 승인 요청 중입니다.</h2>
      </div>
    );

  return (
    <div className='flex flex-col items-center gap-2'>
      <IoMdCheckmarkCircleOutline className='text-9xl text-green-500' />
      <div className='text-center'>
        <p className='text-3xl font-bold'>결제가 완료됐습니다!!</p>
        <p className='text-sm'>확인을 누르시면 주문 완료 페이지로 이동합니다</p>
      </div>
      <button
        onClick={() => {
          onSendParentWindowMsg({ approveResult: 'SUCCESS' });
        }}
        className='border border-black px-2 rounded text-xl font-bold'
      >
        확인
      </button>
    </div>
  );
}

export type ApproveResult = {
  isLoading: boolean;
  result: 'SUCCESS' | 'FAIL' | 'PENDING';
};
