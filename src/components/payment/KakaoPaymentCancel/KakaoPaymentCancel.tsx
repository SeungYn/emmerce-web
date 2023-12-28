'use client';

import { whereIsHost } from '@/util/lib/util';
import { ImCancelCircle } from 'react-icons/im';

export default function KakaoPaymentCancel() {
  const onSendParentWindowMsg = (data: any) => {
    window.parent.postMessage(data, whereIsHost() || '');
  };

  return (
    <div className='flex flex-col items-center gap-2'>
      <ImCancelCircle className='text-9xl text-green-500' />
      <div className='text-center'>
        <p className='text-3xl font-bold'>결제가 취소됐습니다</p>
        <p className='text-sm'>다시 결제해 주시길 바랍니다</p>
      </div>
      <button
        onClick={() => {
          onSendParentWindowMsg({ approveResult: 'FAIL' });
        }}
        className='border border-black px-2 rounded text-xl font-bold'
      >
        확인
      </button>
    </div>
  );
}
