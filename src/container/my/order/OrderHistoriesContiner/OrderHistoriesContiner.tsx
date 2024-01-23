'use client';
import SSRSuspense from '@/components/common/util/SSRSuspense';
import OrderHistoryTable from '@/components/my/order/OrderHistoryTable/OrderHistoryTable';
import { useOrderHistorySuspense } from '@/hooks/api/order/useOrder';
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
  const { data } = useOrderHistorySuspense();

  return (
    <OrderHistoryTable>
      <OrderHistoryTable.Header />
      {data.length === 0 && (
        <tbody>
          <tr>
            <td className='text-center pt-10'>주문내역이 존재하지 않습니다.</td>
          </tr>
        </tbody>
      )}
      {data.map((item) => (
        <OrderHistoryTable.Body {...item} key={item.orderId} />
      ))}
    </OrderHistoryTable>
  );
}
