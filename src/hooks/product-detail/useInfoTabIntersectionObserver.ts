import { useInfoTabAction } from '@/store/product-detail/infoTabStore';
import { INFOTAB_NUMBER } from '@/util/lib/productDetail';
import { useEffect, useRef } from 'react';

type Props = {
  intersectionOption: IntersectionObserverInit;
  targetNumber: number;
};

export default function useInfoTabIntersectionObserver<T extends Element>({
  intersectionOption,
  targetNumber,
}: Props) {
  const containerRef = useRef<T>(null);
  const setCurrentTab = useInfoTabAction();

  useEffect(() => {
    const containerDom = containerRef.current;
    if (!containerDom) return;
    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        setCurrentTab(targetNumber);
      });
    }, intersectionOption);

    intersectionObserver.observe(containerDom);

    return () => {
      intersectionObserver.unobserve(containerDom);
    };
  }, [containerRef, setCurrentTab, targetNumber, intersectionOption]);

  return containerRef;
}
