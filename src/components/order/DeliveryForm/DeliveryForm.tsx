'use client';

import { DaumPostRes } from '@/service/types';
import { DeliveryForm, useDeliveryFormFluxStore } from '@/store/order';
import { ChangeEventHandler } from 'react';

export default function DeliveryForm() {
  const {
    street,
    telFirst,
    telSecond,
    telThird,
    name,
    zipcode,
    email,
    city,
    dispatch,
  } = useDeliveryFormFluxStore();

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    dispatch({ type: name as keyof DeliveryForm, payload: value });
  };

  const onGetAddress = () => {
    console.log('daum click');
    new window.daum.Postcode({
      oncomplete: (data: DaumPostRes) => {
        const { roadAddress, zonecode } = data;
        dispatch({ type: 'city', payload: roadAddress });
        dispatch({ type: 'zipcode', payload: zonecode });
      },
    }).open();
  };

  return (
    <div className='mb-8'>
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
                    name='name'
                    className='border border-black'
                    value={name}
                    onChange={onChange}
                  />
                </div>
              </div>

              <div className='flex'>
                <div className='basis-[15%] '>
                  <p>이메일</p>
                </div>
                <div className='basis-[75%]'>
                  <input
                    type='email'
                    name='email'
                    value={email}
                    onChange={onChange}
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
                    name='telFirst'
                    value={telFirst}
                    onChange={onChange}
                    className='border border-black w-[20%]'
                  />
                  <span>-</span>
                  <input
                    type='text'
                    name='telSecond'
                    value={telSecond}
                    onChange={onChange}
                    className='border border-black  w-[20%]'
                  />
                  <span>-</span>
                  <input
                    type='text'
                    name='telThird'
                    value={telThird}
                    onChange={onChange}
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
                      name='zipcode'
                      value={zipcode}
                      onChange={onChange}
                      className='border border-black'
                      placeholder='우편번호'
                      readOnly
                    />
                    <button
                      className=' ml-1 px-2 border border-black'
                      onClick={onGetAddress}
                    >
                      주소찾기
                    </button>
                  </div>
                  <input
                    type='text'
                    name='city'
                    value={city}
                    onChange={onChange}
                    className='border border-black'
                    placeholder='배송지 주소'
                    readOnly
                  />
                  <input
                    type='text'
                    name='street'
                    value={street}
                    onChange={onChange}
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
