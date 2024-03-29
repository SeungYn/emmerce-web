import { serverService } from '@/service/server';
import { OrderHistory } from '@/service/types/order';
import { GlobalErrorException } from '@/util/lib/exception';
import { oneDayMillseconds } from '@/util/lib/my/order';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const cookieStore = cookies();
  let body: { startDate: string; endDate: string };

  try {
    body = await request.json();
  } catch (e) {
    return NextResponse.json(
      { message: '요청 값이 유효하지 않습니다.' },
      { status: 400 }
    );
  }

  const accessToken = cookieStore.get('access-token')?.value;

  if (!accessToken)
    return NextResponse.json(
      { message: '토큰이 유효하지 않습니다.' },
      { status: 401 }
    );

  let data;
  try {
    data = await serverService.my.getOrderHistory({
      headers: { Authorization: `Bearer ${accessToken}` },
      cache: 'no-store',
    });
  } catch (e) {
    const error = e as GlobalErrorException;
    return Response.json(
      {
        message: error.message,
        status: error.status,
      },
      {
        status: error.status! > 599 ? 599 : error.status,
      }
    );
  }

  const filteredData = filterOrderHistory(
    new Date(body.startDate),
    new Date(body.endDate),
    data!
  );

  return NextResponse.json(filteredData, { status: 200 });
}

function filterOrderHistory(
  startDate: Date,
  endDate: Date,
  orderHistory: OrderHistory[]
) {
  const filtered = orderHistory.filter((item) => {
    const itemDate = new Date(item.orderDate.split('T')[0]).getTime();

    return itemDate >= startDate.getTime() &&
      itemDate < endDate.getTime() + oneDayMillseconds
      ? true
      : false;
  });

  return filtered;
}
