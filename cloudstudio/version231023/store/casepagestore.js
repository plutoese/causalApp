import { create } from "zustand";

const useCasePageStore = create((set, get) => ({
  labelRandomKey: 0,
  pageRandomKey: 0,
  itemOffset: 0,
  forcePageNum: 0,
  setlabelRandomKey: () => set((state) => ({ labelRandomKey: Math.random() })),
  setPageRandomKey: () => set((state) => ({ pageRandomKey: Math.random() })),
  setItemOffset: (offsets) => set((state) => ({ itemOffset: offsets })),
  setForcePageNum: (num) => set((state) => ({ forcePageNum: num })),
}));

export default useCasePageStore;
