import {
  getDifferenceDate,
  oneWeekMillseconds,
  translateYYYYMMDD,
} from '@/util/lib/my/order';
import { create } from 'zustand';

interface OrderHistoryDateStore {
  startDate: string;
  endDate: string;
  setStartDate: (date: string) => void;
  setEndDate: (date: string) => void;
  setAllDate: (startDate: string, endDate: string) => void;
}

const useOrderHistoryDateStore = create<OrderHistoryDateStore>()((set) => ({
  startDate: translateYYYYMMDD(
    getDifferenceDate(new Date(), oneWeekMillseconds)
  ),
  endDate: translateYYYYMMDD(new Date()),
  setStartDate: (date) => set((s) => ({ ...s, startDate: date })),
  setEndDate: (date) => set((s) => ({ ...s, endDate: date })),
  setAllDate: (startDate, endDate) =>
    set((s) => ({
      ...s,
      startDate: startDate,
      endDate: endDate,
    })),
}));

export const useOrderHistoryState = () =>
  useOrderHistoryDateStore((state) => ({
    startDate: state.startDate,
    endDate: state.endDate,
  }));
export const useOrderHistoryAction = () =>
  useOrderHistoryDateStore((state) => ({
    setStartDate: state.setStartDate,
    setEndDate: state.setEndDate,
    setAlldate: state.setAllDate,
  }));
