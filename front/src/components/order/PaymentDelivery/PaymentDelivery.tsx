'use client';

import FinalPaymentInfoContainer from '@/container/order/FinalPaymentInfoContainer';
import DeliveryForm from '../DeliveryForm/DeliveryForm';
import PaymentForm from '../Payment/PaymentForm';

export default function PaymentDelivery() {
  return (
    <div className='flex gap-4 border-t border-gray-400 pt-4'>
      <div className='w-[75%]'>
        <DeliveryForm />
        <PaymentForm />
      </div>
      <FinalPaymentInfoContainer />
    </div>
  );
}
