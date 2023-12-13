import { create } from 'zustand';

interface OrderLoading {
  loading: boolean;
  handleStartLoading: () => void;
  handleStopLoading: () => void;
}

const initialState = {
  loading: false,
};

export const useOrderLoadingStore = create<OrderLoading>()((set) => ({
  ...initialState,
  handleStartLoading: () => {
    set({ loading: true });
  },
  handleStopLoading: () => {
    set({ loading: false });
  },
}));
