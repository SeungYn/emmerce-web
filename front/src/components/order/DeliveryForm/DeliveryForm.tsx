export default function DeliveryForm() {
  return (
    <div className='my-8'>
      <h3 className='text-xl font-bold mb-4'>배송정보</h3>

      <table className='w-full'>
        <tbody className='border-t border-b border-gray-400'>
          {/* 행 */}
          <tr className='flex border-t border-b border-gray-400 border-collapse'>
            {/* 1열 */}
            <td className='basis-[20%] bg-gray-200  border-r border-gray-400 p-5 flex justify-center items-center'>
              받으시는 분
            </td>
            {/* 2열 */}
            <td className='flex-grow flex flex-col gap-3 p-5'>
              <div className='flex'>
                <div className='basis-[15%] '>
                  <p>이름</p>
                </div>
                <div className='basis-[75%]'>
                  <input
                    type='text'
                    name=''
                    id=''
                    className='border border-black '
                  />
                </div>
              </div>

              <div className='flex'>
                <div className='basis-[15%]'>
                  <span>휴대폰 번호</span>
                </div>
                <div className='flex-grow basis-[75%]'>
                  <input
                    type='text'
                    name=''
                    id=''
                    className='border border-black w-[20%]'
                  />
                  <span>-</span>
                  <input
                    type='text'
                    name=''
                    id=''
                    className='border border-black  w-[20%]'
                  />
                  <span>-</span>
                  <input
                    type='text'
                    name=''
                    id=''
                    className='border border-black  w-[20%]'
                  />
                </div>
              </div>
              <div className='flex'>
                <div className='basis-[15%] '>
                  <span>받으실 주소</span>
                </div>
                <div className='flex flex-col basis-[75%] gap-2'>
                  <div>
                    <input
                      type='text'
                      name=''
                      id=''
                      className='border border-black'
                    />
                    <button className=' ml-1 px-2 border border-black'>
                      주소찾기
                    </button>
                  </div>
                  <input
                    type='text'
                    name=''
                    id=''
                    className='border border-black'
                    placeholder='배송지 주소'
                  />
                  <input
                    type='text'
                    name=''
                    id=''
                    className='border border-black'
                    placeholder='배송지 상세주소'
                  />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
