import CartTableHeaderBtn from '@/components/cart/cart-table/CartTableHeaderBtn';

export default function CartTableSkeletonContainer() {
  return (
    <div className='animate-pulse'>
      <div className='flex text-base gap-2 mb-3 '>
        <CartTableHeaderBtn>상품 전체선택</CartTableHeaderBtn>
        <CartTableHeaderBtn>상품 선택해지</CartTableHeaderBtn>
        <CartTableHeaderBtn>선택상품 삭제</CartTableHeaderBtn>
      </div>

      <div className='text-lg p-2 bg-zinc-600 text-white '>
        <span className='opacity-0'>카트 테이블 로딩 헤더</span>
      </div>
      <table>
        <thead>
          <tr
            className='grid bg-gray-200 py-3 '
            style={{
              gridTemplateColumns:
                '79px 457px 133px 79px 133px 133px 133px 133px',
            }}
          >
            <th className='text-center'>
              <input type='checkbox' name='all_cart_item' />
            </th>
            <th className='text-center'>상품명/선택사항</th>
            <th className='text-center'>상품금액</th>
            <th className='text-center'>수량</th>
            <th className='text-center'>할인금액</th>
            <th className='text-center'>주문금액</th>
            <th className='text-center'>배송정보</th>
            <th className='text-center'>주문하기</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 3 }).map((item, i) => (
            <tr
              key={i}
              className='grid'
              style={{
                gridTemplateColumns:
                  '79px 457px 133px 79px 133px 133px 133px 133px',
                gridAutoRows: '133px',
                alignItems: 'center',
                justifyItems: 'center',
              }}
            >
              <td>
                <input type='checkbox' name='all_cart_item' />
              </td>
              <td className='flex shrink-0 justify-self-start gap-4'>
                <div className='w-[85px] aspect-square bg-gray-300 rounded-md' />
                <div className='flex flex-col gap-2'>
                  <p className='bg-skeletonBG rounded-md w-52 h-5'></p>
                  <p className='bg-skeletonBG rounded-md w-52 h-5'></p>
                  <p className='bg-skeletonBG rounded-md w-52 h-5'></p>
                </div>
              </td>

              <td className='bg-skeletonBG rounded-md w-10 h-5'></td>
              <td className='flex items-center gap-2'>
                <p className='bg-skeletonBG rounded-md w-10 h-5'></p>
                <div className='flex flex-col'>
                  <button>🔼</button>
                  <button>🔽</button>
                </div>
              </td>
              <td className='bg-skeletonBG rounded-md w-10 h-5'></td>
              <td className='bg-skeletonBG rounded-md w-10 h-5'></td>
              <td className='bg-skeletonBG rounded-md w-10 h-5'></td>
              <td className='flex flex-col text-sm gap-1'>
                <button className='px-6 py-1 bg-black text-white rounded-3xl'>
                  바로구매
                </button>
                <button className='px-6 py-1 border border-gray-300 rounded-3xl'>
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* 총 결제금액 및 결제버튼 */}
      <div className=''>
        <div className='flex justify-center gap-4 border-4 border-zinc-600 text-xl py-10 text-zinc-500 items-center '>
          <div className='w-3/4 h-10 bg-slate-300 rounded-md'></div>
        </div>
      </div>
    </div>
  );
}
