"use client";

import labeldata from "/data/caselabeldata.json";
import CaseCard from "@/components/cards/standard_card";
import useCaseFilterStore from "@/store/caselabelstore";

export default function CaseListFilter() {
  const labels = labeldata.labels;
  const { cases, reset, filterType } = useCaseFilterStore();

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 my-6 gap-8">
        <div id="categories" className="relative flex flex-wrap gap-4">
          {labels.map((item) => (
            <div key={item.divid}>
              {item.id === "total" ? (
                <input
                  type="radio"
                  id={item.id}
                  name="choice"
                  value={item.value}
                  className="hidden peer"
                  onClick={() => reset()}
                  defaultChecked
                />
              ) : (
                <input
                  type="radio"
                  id={item.id}
                  name="choice"
                  value={item.value}
                  className="hidden peer"
                  onClick={() => filterType(item.type)}
                />
              )}
              <label
                htmlFor={item.id}
                className="inline-flex items-center justify-between w-full px-4 py-2.5 text-gray-500 border border-provence-mist rounded-2xl cursor-pointer peer-checked:border-provence-lavender peer-checked:bg-provence-lavender peer-checked:text-provence-linen hover:text-gray-600 hover:bg-gray-100"
              >
                <div className="w-full">{item.name}</div>
              </label>
            </div>
          ))}
        </div>
      </div>
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
}
