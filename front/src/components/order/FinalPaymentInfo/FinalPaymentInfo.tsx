'use client';

type Props = {
  originPrice: number;
  discountPrice: number;
  discoutedPrice: number;
  deliverPrice: number;
  handlePostOrder: () => void;
};

export default function FinalPaymentInfo({
  originPrice,
  deliverPrice,
  discountPrice,
  discoutedPrice,
  handlePostOrder,
}: Props) {
  return (
    <div className='flex-grow'>
      <div className=' border-[3px] border-zinc-600'>
        <div className='p-4 flex flex-col flex-grow '>
          <h3 className='text-center text-xl font-bold border-b border-gray-400 pb-3'>
            최종결제정보
          </h3>
          <div className='flex-grow flex justify-between border-b border-gray-200 py-2'>
            <span>상품금액</span>
            <span>{originPrice.toLocaleString()}원</span>
          </div>
          <div className='flex-grow flex justify-between border-b border-gray-200 py-2'>
            <span>쿠폰/할인금액</span>
            <span>{discountPrice.toLocaleString()}원</span>
          </div>
          <div className='flex-grow flex justify-between border-b border-gray-200 py-2'>
            <span>배송비</span>
            <span>{deliverPrice.toLocaleString()}원</span>
          </div>
          <div className='flex flex-col py-2 text-red-600 '>
            <span className=''>총 결제금액</span>
            <span className='self-end '>
              {discoutedPrice.toLocaleString()}원
            </span>
          </div>
        </div>
        <p className='text-center border-t border-gray-400 bg-gray-200 py-2'>
          구매를 희망합니다.
        </p>
      </div>
      <button
        className='text-xl py-4  text-white brightness-95 w-full mt-2'
        style={{
          background:
            'linear-gradient(90deg, rgba(255,85,9,1) 0%, rgba(255,0,0,1) 49%, rgba(255,0,247,1) 100%)',
        }}
        onClick={handlePostOrder}
      >
        구매하기
      </button>
    </div>
  );
}
