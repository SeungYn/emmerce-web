import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface VisitedPath {
  path: string[];
  append: (path: string) => void;
}

const initial = {
  path: [],
};

export const useVisitedPathStore = create<VisitedPath>()(
  devtools((set) => ({
    ...initial,
    append: (path: string) => {
      set((state) => ({ path: [...state.path, path] }));
    },
  }))
);
