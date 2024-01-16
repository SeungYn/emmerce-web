'use client';

import PriceDoubleSlider from '@/components/product/filter/PriceDoubleSlider/PriceDoubleSlider';
import NextURLSearchParams from '@/util/lib/urlSearchParams';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
  ChangeEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

export type SliderState = {
  min: number;
  max: number;
  value: number;
  zIndex: 20 | 10;
};

const initialSliderState: {
  [key in 'left' | 'right']: SliderState;
} = {
  left: {
    min: 0,
    max: 1000000,
    value: 0,
    zIndex: 10,
  },
  right: {
    min: 0,
    max: 1000000,
    value: 1000000,
    zIndex: 10,
  },
};

export default function PriceDoubleSliderContainer() {
  const pathname = usePathname();
  const readOnlySearchParams = useSearchParams();
  const searchParams = useMemo(
    () => new NextURLSearchParams(readOnlySearchParams),
    [readOnlySearchParams]
  );
  const router = useRouter();
  const [sliderState, setSliderState] = useState<{
    [key in 'left' | 'right']: SliderState;
  }>(initialSliderState);

  const onLeftChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const currentValue = e.target.value;

      setSliderState((v) => ({
        left: {
          ...v.left,
          value:
            parseInt(currentValue) >= v.right.value
              ? v.right.value
              : parseInt(currentValue),
          zIndex: 20,
        },
        right: { ...v.right, zIndex: 10 },
      }));
    },
    []
  );

  const onRightChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const currentValue = e.target.value;
      setSliderState((v) => ({
        right: {
          ...v.right,
          value:
            parseInt(currentValue) <= v.left.value
              ? v.left.value
              : parseInt(currentValue), //Math.max(parseInt(currentValue), v.left.value + 10),
          zIndex: 20,
        },
        left: { ...v.left, zIndex: 10 },
      }));
    },
    []
  );

  // trigger debounce
  useEffect(() => {
    // 초기 state와 같으면 이동시키지 않음
    if (initialSliderState === sliderState) return;

    const timeoutId = setTimeout(() => {
      searchParams.setQueryString(
        'minPrice',
        sliderState.left.value.toString()
      );
      searchParams.setQueryString(
        'maxPrice',
        sliderState.right.value.toString()
      );

      router.push(pathname + '?' + searchParams.toString());
    }, 600);

    return () => {
      clearTimeout(timeoutId);
    };

    //eslint-disable-next-line
  }, [sliderState]);

  return (
    <PriceDoubleSlider
      sliderState={sliderState}
      onLeftRangeChange={onLeftChange}
      onRightRangeChange={onRightChange}
    />
  );
}
