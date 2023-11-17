"use client";

import CaseListFilter from "@/components/ui/caselabelfilter";
import ListPageHeader from "@/components/ui/listpageheader";

export default function Case() {
  return (
    <>
      <div className="relative isolate mx-auto max-w-7xl px-6 mt-5">
        <div className="mx-auto max-w-3xl py-10">
          <ListPageHeader
            title="案例"
            description="丰富多样化的专业案例，融合数据、模型与财经知识，可广泛用于新文科的教学与科研活动"
            isSearchable={true}
          />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 my-6 gap-8">
        <CaseListFilter />
      </div>
    </>
  );
}
