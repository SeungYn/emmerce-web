import { create } from 'zustand';

interface KakaoPayPopUp {
  redirect_pc_url: string;
  setRedirect_pc_url: (nextUrl: string) => void;
}

const initial = {
  redirect_pc_url: '',
};

export const useKakaoPayPopUp = create<KakaoPayPopUp>()((set) => ({
  ...initial,
  setRedirect_pc_url: (nextUrl) =>
    set((state) => ({ ...state, redirect_pc_url: nextUrl })),
}));
