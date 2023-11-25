import DeliveryForm from '../DeliveryForm/DeliveryForm';
import PaymentForm from '../Payment/PaymentForm';

export default function PaymentDelivery() {
  return (
    <div className='w-[75%]'>
      <DeliveryForm />
      <PaymentForm />
    </div>
  );
}
