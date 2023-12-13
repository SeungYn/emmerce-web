'use client';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface GlobalLoading {
  loading: boolean;
  visitedPath: string[];
  setLoading: (flag: boolean) => void;
  handleStartLoading: (path: string) => void;
  handleStopLoading: () => void;
}

const initail = {
  loading: false,
  visitedPath: [],
};

export const useGlobalLoading = create<GlobalLoading>()(
  devtools((set) => ({
    ...initail,
    setLoading: (flag: boolean) => set({ loading: flag }),
    handleStartLoading: (path: string) => {
      console.log('store path', path);
      set((store) => {
        if (store.visitedPath.includes(path)) {
          return { ...store, loading: false };
        }
        store.visitedPath.push(path);
        return { visitedPath: [...store.visitedPath], loading: true };
      });
    },
    handleStopLoading: () =>
      set((store) => ({ loading: false, visitedPath: [...store.visitedPath] })),
  }))
);

export const useGlobalLoadingEnd = () => {
  const setLoading = useGlobalLoading((s) => s.setLoading);
  setLoading(false);
};
