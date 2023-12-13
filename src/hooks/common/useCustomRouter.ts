import { useRouter } from 'next/navigation';
import useVisitedPath from './useVisitedPath';
import { useGlobalLoading } from '@/store/common/globalLoading';

export default function useCustomRouter() {
  const router = useRouter();
  const { isVisitedPath } = useVisitedPath();
  const globalLoadingStore = useGlobalLoading();

  const push = (path: string) => {
    if (!isVisitedPath(path)) {
      globalLoadingStore.setLoading(true);
    }
    router.push(path);
  };

  return { push };
}
