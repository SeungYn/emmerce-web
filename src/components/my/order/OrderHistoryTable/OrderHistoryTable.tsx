import ProductReviewModalContainer from '@/container/my/review/ProductReviewModalContainer/ProductReviewModalContainer';
import { DeliveryStatus, OrderHistory } from '@/service/types/order';
import { translateYYYYMMDD } from '@/util/lib/my/order';
import Image from 'next/image';
import { PropsWithChildren, useState } from 'react';

export default function OrderHistoryTable({ children }: PropsWithChildren) {
  return <table className='w-full'>{children}</table>;
}
OrderHistoryTable.Header = Header;
OrderHistoryTable.Body = Body;

function Header() {
  return (
    <thead>
      <tr
        className='grid bg-white py-3  [&>*]:text-center w-full border-t-2 border-t-black  border-b border-b-gray-300'
        style={{
          gridTemplateColumns: '5fr 2fr 1fr 2fr 2fr 2fr',
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

function Body({ orderProductRespList, orderDate, orderId }: BodyProps) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <tbody>
      <tr className='bg-gray-100 block px-4 py-2 mt-2'>
        <td className='bold text-gray-500'>
          주문일 : {translateYYYYMMDD(new Date(orderDate))}
        </td>
      </tr>
      {orderProductRespList.map((item) => {
        const {
          name,
          discountPrice,
          productId,
          brand,
          originalPrice,
          quantity,
          titleImg,
          reviewStatus,
          deliveryStatus,
        } = item;
        return (
          <tr
            className='grid border-b border-gray-300'
            style={{
              gridTemplateColumns: '5fr  2fr 1fr 2fr 2fr 2fr',
              gridAutoRows: 'minmax(130px, 133px)',
              alignItems: 'center',
              justifyItems: 'center',
            }}
            key={productId + orderDate.toString()}
          >
            <td className='flex shrink-0 justify-self-start gap-4 p-2'>
              {/* eslint-disable @next/next/no-img-element */}
              <Image
                src={titleImg}
                alt='카트 상품 이미지'
                width={85}
                height={85}
                className='w-[85px] aspect-square shrink-0 grow-0'
              />
              <div className='flex-grow'>
                <p className='text-gray-500'>{brand}</p>
                <p className='font-blod line-clamp-2 leading-4'>{name}</p>
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
              {((originalPrice - discountPrice) * quantity).toLocaleString()}원
            </td>
            <td className='p-2'>
              {(discountPrice * quantity).toLocaleString()}원
            </td>
            <td className='p-2 text-sm'>
              <p className='text-center'>{getDeliveryStatus(deliveryStatus)}</p>
              {!reviewStatus ? (
                deliveryStatus === 'COMPLETE' ? (
                  <>
                    <button
                      className='bg-black text-white py-1 px-4'
                      onClick={() => setOpenModal(true)}
                    >
                      후기작성
                    </button>
                    <ProductReviewModalContainer
                      openModal={openModal}
                      setOpenModal={setOpenModal}
                      orderHistoryItem={item}
                      orderId={orderId as number}
                    />
                  </>
                ) : null
              ) : (
                <p>후기작성완료</p>
              )}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

function getDeliveryStatus(delivery: DeliveryStatus) {
  switch (delivery) {
    case 'CANCEL':
      return '배송취소';
    case 'READY':
      return '준비중';
    case 'COMPLETE':
      return '배송완료';
    case 'ING':
      return '배송중';
    default:
      return '배송확인불가';
  }
}
