import DeliveryForm from '../DeliveryForm/DeliveryForm';
import FinalPaymentInfo from '../FinalPaymentInfo/FinalPaymentInfo';
import PaymentForm from '../Payment/PaymentForm';

export default function PaymentDelivery() {
  return (
    <div className='flex gap-4 border-t border-gray-400 pt-4'>
      <div className='w-[75%]'>
        <DeliveryForm />
        <PaymentForm />
      </div>
      <FinalPaymentInfo />
    </div>
  );
}
