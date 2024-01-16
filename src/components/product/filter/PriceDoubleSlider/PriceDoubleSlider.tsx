'use client';

import { SliderState } from '@/container/product/filter/PriceDoubleSliderContainer';
import styles from './PriceDoubleSlider.module.css';
import { ChangeEventHandler } from 'react';

function toPercent({ value, min, max }: SliderState) {
  return ((value - min) / (max - min)) * 100;
}

type Props = {
  sliderState: { [key in 'left' | 'right']: SliderState };
  onLeftRangeChange: ChangeEventHandler<HTMLInputElement>;
  onRightRangeChange: ChangeEventHandler<HTMLInputElement>;
};

export default function PriceDoubleSlider({
  sliderState,
  onLeftRangeChange,
  onRightRangeChange,
}: Props) {
  return (
    <div className='relative  pt-4  px-2'>
      <p className='text-sm text-gray-500 mb-2'>
        - <span>{sliderState.left.value.toLocaleString()}</span>원 ~{' '}
        <span>{sliderState.right.value.toLocaleString()}</span>원
      </p>
      <div className='relative h-[4px] w-full'>
        <input
          type='range'
          min={sliderState.left.min}
          max={sliderState.left.max}
          value={sliderState.left.value}
          onChange={onLeftRangeChange}
          style={{ zIndex: sliderState.left.zIndex }}
          className={styles.rangeInput}
        />
        <input
          type='range'
          min={sliderState.right.min}
          max={sliderState.right.max}
          value={sliderState.right.value}
          onChange={onRightRangeChange}
          style={{ zIndex: sliderState.right.zIndex }}
          className={styles.rangeInput}
        />
      </div>

      <div className='relative h-[4px]'>
        <div className='absolute inset-0 bg-slate-300'></div>
        <div
          className='absolute top-0 bottom-0 bg-black'
          style={{
            left: toPercent(sliderState.left) + '%',
            right: 100 - toPercent(sliderState.right) + '%',
          }}
        ></div>
        <div
          className='absolute w-4 h-4 bg-white border-2 border-black rounded-full top-[50%] -translate-y-1/2 -translate-x-1/2'
          style={{ left: toPercent(sliderState.left) + '%' }}
        ></div>
        <div
          className='absolute w-4 h-4 bg-white border-2 border-black rounded-full top-[50%] -translate-y-1/2 translate-x-1/2'
          style={{ right: 100 - toPercent(sliderState.right) + '%' }}
        ></div>
      </div>
    </div>
  );
}
