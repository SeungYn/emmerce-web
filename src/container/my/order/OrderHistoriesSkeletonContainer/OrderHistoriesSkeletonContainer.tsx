export default function OrderHistoriesSkeletonContainer() {
  return (
    <table className='w-full animate-pulse'>
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

      <tbody>
        <tr className='bg-gray-100 block px-4 py-2 mt-2'>
          <td className='bold text-gray-500'>주문일</td>
        </tr>
        {Array.from({ length: 3 }).map((item, i) => {
          return (
            <tr
              className='grid border-b border-gray-300'
              style={{
                gridTemplateColumns: '5fr  2fr 1fr 2fr 2fr 2fr',
                gridAutoRows: '133px',
                alignItems: 'center',
                justifyItems: 'center',
              }}
              key={i}
            >
              <td className='flex shrink-0 justify-self-start gap-4 p-2'>
                {/* eslint-disable @next/next/no-img-element */}
                <div className='w-[85px] aspect-square bg-skeletonBG rounded-md' />
                <div className='flex flex-col gap-2'>
                  <p className='bg-skeletonBG rounded-md w-52 h-5'></p>
                  <p className='bg-skeletonBG rounded-md w-52 h-5'></p>
                  <p className='bg-skeletonBG rounded-md w-52 h-5'></p>
                </div>
              </td>

              <td className='bg-skeletonBG rounded-md w-10 h-5'></td>
              <td className='bg-skeletonBG rounded-md w-10 h-5'></td>
              <td className='bg-skeletonBG rounded-md w-10 h-5'></td>
              <td className='bg-skeletonBG rounded-md w-10 h-5'></td>
              <td className='p-2 text-sm'>
                <p className='text-center'>무료배송</p>
                <button className='bg-black text-white py-1 px-4'>
                  후기작성
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
