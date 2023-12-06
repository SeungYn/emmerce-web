import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface KakaoPayPopUp {
  redirect_pc_url: string | null;
  setRedirect_pc_url: (nextUrl: string) => void;
  reset: () => void;
}

const initial = {
  redirect_pc_url: null,
};

export const useKakaoPayStore = create<KakaoPayPopUp>()(
  devtools((set) => ({
    ...initial,
    setRedirect_pc_url: (nextUrl) =>
      set((state) => ({ ...state, redirect_pc_url: nextUrl })),
    reset: () => set({ ...initial }),
  }))
);
