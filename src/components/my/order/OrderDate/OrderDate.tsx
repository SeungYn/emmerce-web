'use client';

import { useOrderHistoryAction } from '@/store/my/order/dateStore';
import {
  getDifferenceDate,
  oneMonthMillseconds,
  oneWeekMillseconds,
  sixMonthMillseconds,
  threeMonthMillseconds,
  translateYYYYMMDD,
} from '@/util/lib/my/order';
import { ButtonHTMLAttributes, useState } from 'react';

export default function OrderDate() {
  const { setAlldate } = useOrderHistoryAction();
  const [state, setState] = useState<{ startDate: string; endDate: string }>({
    startDate: translateYYYYMMDD(
      getDifferenceDate(new Date(), oneWeekMillseconds)
    ),
    endDate: translateYYYYMMDD(new Date()),
  });

  const [currentDifferenceDate, setCurrentDifferenceDate] = useState<
    number | null
  >(null);

  const onSetStoreDate = () => {
    setAlldate(state.startDate, state.endDate);
  };

  return (
    <div className='mb-10'>
      <div className='flex justify-between items-center text-zinc-600 border border-gray-300 p-4'>
        <div className='flex items-center'>
          <span className='inline-block font-semibold pr-4'>・ 조회기간</span>
          <div className='flex'>
            <Button
              active={currentDifferenceDate === 0}
              onClick={() => {
                setCurrentDifferenceDate(0);
                setState((s) => ({
                  ...s,
                  startDate: translateYYYYMMDD(
                    getDifferenceDate(new Date(), oneWeekMillseconds)
                  ),
                  endDate: translateYYYYMMDD(new Date()),
                }));
              }}
            >
              1주일
            </Button>
            <Button
              active={currentDifferenceDate === 1}
              onClick={() => {
                setCurrentDifferenceDate(1);
                setState((s) => ({
                  ...s,
                  startDate: translateYYYYMMDD(
                    getDifferenceDate(new Date(), oneMonthMillseconds)
                  ),
                  endDate: translateYYYYMMDD(new Date()),
                }));
              }}
            >
              1개월
            </Button>
            <Button
              active={currentDifferenceDate === 2}
              onClick={() => {
                setCurrentDifferenceDate(2);
                setState((s) => ({
                  ...s,
                  startDate: translateYYYYMMDD(
                    getDifferenceDate(new Date(), threeMonthMillseconds)
                  ),
                  endDate: translateYYYYMMDD(new Date()),
                }));
              }}
            >
              3개월
            </Button>
            <Button
              active={currentDifferenceDate === 3}
              onClick={() => {
                setCurrentDifferenceDate(3);
                setState((s) => ({
                  ...s,
                  startDate: translateYYYYMMDD(
                    getDifferenceDate(new Date(), sixMonthMillseconds)
                  ),
                  endDate: translateYYYYMMDD(new Date()),
                }));
              }}
            >
              6개월
            </Button>
          </div>
        </div>
        <div>
          <input
            type='date'
            className='border border-gray-300'
            value={state.startDate}
            max={state.endDate}
            onChange={(e) => {
              setCurrentDifferenceDate(null);
              setState((s) => ({
                ...s,
                startDate: translateYYYYMMDD(new Date(e.target.value)),
              }));
            }}
          ></input>
          ~
          <input
            type='date'
            className='border border-gray-300'
            value={state.endDate}
            min={state.startDate}
            onChange={(e) => {
              setCurrentDifferenceDate(null);
              setState((s) => ({
                ...s,
                endDate: translateYYYYMMDD(new Date(e.target.value)),
              }));
            }}
          ></input>
          <button
            className='px-4 ml-2 leading-6 border border-gray-300'
            onClick={onSetStoreDate}
          >
            조회하기
          </button>
        </div>
      </div>
      <p className='text-red-800 pl-4'>
        ・ 기간을 선택하신 후에 조회하기 버튼을 클릭하시면 해당 기간의 주문/배송
        내역이 확인됩니다.
      </p>
    </div>
  );
}
type ButtonProps = {
  active?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ active = false, className, ...props }: ButtonProps) {
  return (
    <button
      className={`px-8 leading-8 border border-gray-300 ${
        active ? 'text-white bg-zinc-600' : ''
      } ${className}`}
      {...props}
    />
  );
}
