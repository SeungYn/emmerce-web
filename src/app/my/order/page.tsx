import OrderTable from '@/components/my/order/OrderTable/OrderTable';
import OrderHistoriesContiner from '@/container/my/order/OrderHistoriesContiner/OrderHistoriesContiner';
import { historyItems } from '@/util/mock/data/item';

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
