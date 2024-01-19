import { create } from 'zustand';

interface InfoTab {
  currentTab: number;
  setCurrentTab: (n: number) => void;
}

export const useInfoTabStore = create<InfoTab>()((set) => ({
  currentTab: 0,
  setCurrentTab: (n: number) => {
    set({ currentTab: n });
  },
}));

export const useInfoTabState = () =>
  useInfoTabStore((state) => state.currentTab);
export const useInfoTabAction = () =>
  useInfoTabStore((state) => state.setCurrentTab);
