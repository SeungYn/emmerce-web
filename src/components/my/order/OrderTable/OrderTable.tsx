import { OrderHistory, OrderHistoryItem } from '@/service/types/order';
import { PropsWithChildren, ReactNode } from 'react';

export default function OrderTable({ children }: PropsWithChildren) {
  return <table className='w-full'>{children}</table>;
}
OrderTable.Header = Header;
OrderTable.Body = Body;

function Header() {
  return (
    <thead>
      <tr
        className='grid bg-white py-3  [&>*]:text-center w-full border-t-2 border-t-black  border-b border-b-gray-300'
        style={{
          gridTemplateColumns: '5fr  2fr 1fr 2fr 2fr 2fr',
        }}
      >
        <th>상품명/선택사항</th>
        <th>상품금액</th>
        <th>수량</th>
        <th>할인금액</th>
        <th>주문금액</th>
        <th>배송정보</th>
      </tr>
    </thead>
  );
}

type BodyProps = OrderHistory;

function Body({ orderProductRespList, orderDate }: BodyProps) {
  return (
    <tbody>
      <tr className='bg-gray-100 block px-4 py-2 mt-2'>
        <td className='bold text-gray-500'>
          주문일 : {new Date(orderDate).toISOString()}
        </td>
      </tr>
      {orderProductRespList.length === 0 && (
        <div>주문내역이 존재하지 않습니다.</div>
      )}
      {orderProductRespList.map((item) => {
        const {
          name,
          discountPrice,
          brand,
          originalPrice,
          quantity,
          titleImg,
          reviewStatus,
        } = item;
        return (
          <>
            <tr
              className='grid border-b border-gray-300'
              style={{
                gridTemplateColumns: '5fr  2fr 1fr 2fr 2fr 2fr',
                gridAutoRows: '133px',
                alignItems: 'center',
                justifyItems: 'center',
              }}
            >
              <td className='flex shrink-0 justify-self-start gap-4 p-2'>
                <img
                  src={titleImg}
                  alt='카트 상품 이미지'
                  width={85}
                  className='w-[85px] aspect-square'
                />
                <div className='flex-grow'>
                  <p className='text-gray-500'>{brand}</p>
                  <p className='font-blod'>{name}</p>
                  <p>옵션</p>
                </div>
              </td>

              <td className='p-2'>
                {(originalPrice * quantity).toLocaleString()}원
              </td>
              <td className='flex items-center gap-2 p-2'>
                <div>{quantity}개</div>
              </td>
              <td className='p-2'>
                {' '}
                {((originalPrice - discountPrice) * quantity).toLocaleString()}
                원
              </td>
              <td className='p-2'>
                {(discountPrice * quantity).toLocaleString()}원
              </td>
              <td className='p-2 text-sm'>
                <p className='text-center'>무료배송</p>
                {!reviewStatus ? (
                  <button className='bg-black text-white py-1 px-4'>
                    후기작성
                  </button>
                ) : (
                  <p>후기작성완료</p>
                )}
              </td>
            </tr>
          </>
        );
      })}
    </tbody>
  );
}
