import OrderHistoriesContiner from '@/container/my/order/OrderHistoriesContiner/OrderHistoriesContiner';

export default function page() {
  return (
    <div>
      <h2 className='px-5 pb-4 text-xl'>
        <strong>주문/배송 조회</strong>
      </h2>

      <OrderHistoriesContiner />
    </div>
  );
}
