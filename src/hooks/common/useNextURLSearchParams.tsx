import NextURLSearchParams from '@/util/lib/urlSearchParams';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

export default function useNextURLSearchParams() {
  const readOnlySearchParams = useSearchParams();
  const searchParams = useMemo(
    () => new NextURLSearchParams(readOnlySearchParams),
    [readOnlySearchParams]
  );
  return searchParams;
}
