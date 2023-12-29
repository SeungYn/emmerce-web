import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface RecentSearchStore {
  recentSearchList: string[];
  addItem: (item: string) => void;
  removeItem: (item: string) => void;
  clear: () => void;
}

export const useRecentSearchStore = create<RecentSearchStore>()(
  persist(
    (set, get) => ({
      recentSearchList: [],
      addItem: (item) => {
        const keywordSet = new Set([item, ...get().recentSearchList]);
        set({ recentSearchList: Array.from(keywordSet.values()) });
      },
      removeItem: (item) =>
        set({
          recentSearchList: get().recentSearchList.filter((v) => v !== item),
        }),
      clear: () => set({ recentSearchList: [] }),
    }),
    {
      name: 'recent-search-list',
    }
  )
);

export const useRecentSearchStoreState = () =>
  useRecentSearchStore((state) => ({
    recentSearchList: state.recentSearchList,
  }));

export const useRecentSearchStoreAction = () =>
  useRecentSearchStore((state) => ({
    addItem: state.addItem,
    removeItem: state.removeItem,
    clear: state.clear,
  }));
