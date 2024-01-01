'use client';
import SSRSuspense from '@/components/common/util/SSRSuspense';
import OrderTable from '@/components/my/order/OrderTable/OrderTable';
import { useOrderHistories } from '@/hooks/api/order/useOrder';
import OrderHistoriesSkeletonContainer from '../OrderHistoriesSkeletonContainer/OrderHistoriesSkeletonContainer';

export default function OrderHistoriesContiner() {
  return (
    <>
      <SSRSuspense fallback={<OrderHistoriesSkeletonContainer />}>
        <SuspenseOrderHistories />
      </SSRSuspense>
    </>
  );
}

function SuspenseOrderHistories() {
  const {
    suspenseRes: { data },
  } = useOrderHistories();

  return (
    <OrderTable>
      <OrderTable.Header />
      {data.length === 0 && <div>주문내역이 존재하지 않습니다.</div>}
      {data.map((item) => (
        <OrderTable.Body {...item} key={item.orderId} />
      ))}
    </OrderTable>
  );
}
