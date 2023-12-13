import { useVisitedPathStore } from '@/store/common/visitedPath';

export default function useVisitedPath() {
  const visitedPathStore = useVisitedPathStore();

  const isVisitedPath = (path: string) => {
    const filter = path.split('?')[0];
    const reg = new RegExp(/(\/[\D]*)/);
    const match = reg.exec(filter);
    if (!match) return false;

    const filteredPath = match[0];
    const isVisited = visitedPathStore.path.includes(filteredPath);

    if (!isVisited) {
      appendPath(filteredPath);
      return false;
    }

    return true;
  };

  const appendPath = (path: string) => {
    visitedPathStore.append(path);
  };

  return { isVisitedPath };
}
