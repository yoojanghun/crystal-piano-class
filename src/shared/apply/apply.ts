import { create } from "zustand";

type ApplyPage = {
  applyPage: number;
  increasePage: () => void;
  decreasePage: () => void;
};

export const useApplyPage = create<ApplyPage>((set) => ({
  applyPage: 1,
  increasePage: () => {
    set((state) => ({ applyPage: state.applyPage + 1}));
  },
  decreasePage: () => {
    set((state) => ({ applyPage: state.applyPage - 1}));
  }
}))