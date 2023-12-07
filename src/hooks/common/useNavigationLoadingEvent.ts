'use client';
import { useGlobalLoading } from '@/store/common/globalLoading';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function useNavigationLoadingEvent() {
  const loadingStore = useGlobalLoading();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 첫번쨰 방법 Url이 클릭 동시에 안바뀌어서 실패...
  // useEffect(() => {
  //   const url = pathname + searchParams.toString();
  //   //sendSomewhere(url);
  //   console.log('url move', pathname, 'current ref []', pathRef.current);
  //   if (pathRef.current.length === 0) {
  //     pathRef.current.push(pathname);
  //     return;
  //   }
  //   //if (pathRef.current.length === 0 && pathname !== '/') return;s

  //   if (!pathRef.current.includes(pathname)) {
  //     pathRef.current.push(pathname);
  //     testLoading.setLoading(true);
  //   }

  //   return () => {};
  // }, [pathname, searchParams]);

  // 두번쨰 방법 해당 이펙트는 url이 변경되면 로딩을 false로 바꿔줌
  useEffect(() => {
    loadingStore.setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]);

  return loadingStore.loading;
}
