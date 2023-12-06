import PaymentSuccess from '@/components/payment/PaymentSuccess/PaymentSuccess';

//headers 를 이용하여 토큰을 얻고 Server service를 이용해 토큰과 함꼐 결제 승인 요청 api를 호출합니다.

export default async function Page({
  searchParams: { orderId, pg_token },
}: {
  searchParams: { orderId: string | number; pg_token: string };
}) {
  return (
    <section className='flex items-center justify-center h-screen'>
      <PaymentSuccess orderId={orderId} pg_token={pg_token} />
    </section>
  );
}
