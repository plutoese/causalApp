"use client";

import CaseCard from "@/components/cards/standard_card";
import useCaseFilterStore from "@/store/caselabelstore";

const CaseCardList = () => {
  const { cases } = useCaseFilterStore();

  return (
    <>
      <div className="grid grid-cols-2 mx-auto max-w-7xl px-6 my-6 gap-8">
        {cases.map((item) => (
          <div key={item.id}>
            <CaseCard
              type={item.type}
              date={item.date}
              title={item.title}
              abstract={item.abstract}
              author={item.author}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default CaseCardList;
