import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface KakaoPayPopUp {
  redirect_pc_url: string | null;
  orderId: string | number | null;
  setOrderId: (orderId: string | number | null) => void;
  setRedirect_pc_url: (nextUrl: string) => void;
  reset: () => void;
}

const initial = {
  redirect_pc_url: null,
  orderId: null,
};

export const useKakaoPayStore = create<KakaoPayPopUp>()(
  devtools((set) => ({
    ...initial,
    setOrderId: (orderId) => set((s) => ({ ...s, orderId })),
    setRedirect_pc_url: (nextUrl) =>
      set((state) => ({ ...state, redirect_pc_url: nextUrl })),
    reset: () => set({ ...initial }),
  }))
);
