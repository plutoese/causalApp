import { create } from "zustand";
import casesdata from "/data/case.json";

const allCases = casesdata.cases;

const useCaseFilterStore = create((set, get) => ({
  cases: allCases,
  reset: () => set((state) => ({cases: allCases})),
  filterType: (labelType) =>
    set((state) => ({
      cases: allCases.filter((item) => {
        return item.type === labelType;
      }),
    })),
}));

export default useCaseFilterStore;
