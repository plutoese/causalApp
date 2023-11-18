import { create } from "zustand";
import casesdata from "/data/case.json";

const allCases = casesdata.cases;

const useCaseFilterStore = create((set, get) => ({
  queryCases: allCases,
  cases: allCases,
  reset: () => set((state) => ({ cases: state.queryCases })),
  setCases: (data) => set((state) => ({ cases: data })),
  setQueryCases: (data) => set((state) => ({ queryCases: data })),
  filterType: (labelType) =>
    set((state) => ({
      cases: state.queryCases.filter((item) => {
        return item.type === labelType;
      }),
    })),
}));

export default useCaseFilterStore;
