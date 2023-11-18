import labeldata from "/data/caselabeldata.json";
import useCaseFilterStore from "@/store/caselabelstore";
import PaginatedCardList from "./paginatedcardlist";
import useCasePageStore from "@/store/casepagestore";

function LabelList() {
  const labels = labeldata.labels;
  const { reset, filterType } = useCaseFilterStore();
  const { setPageRandomKey, setItemOffset } = useCasePageStore();

  const totalClickHandle = () => {
    reset();
    setItemOffset(0);
    setPageRandomKey();
  };

  const labelClickHandle = (itemtype) => {
    filterType(itemtype);
    setItemOffset(0);
    setPageRandomKey();
  };

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
                  onClick={() => totalClickHandle()}
                  defaultChecked
                />
              ) : (
                <input
                  type="radio"
                  id={item.id}
                  name="choice"
                  value={item.value}
                  className="hidden peer"
                  onClick={() => labelClickHandle(item.type)}
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
    </>
  );
}

export default function CaseLabel() {
  const { labelRandomKey, pageRandomKey } = useCasePageStore();
  return (
    <>
      <div key={labelRandomKey}>
        <LabelList />
      </div>
      <div key={pageRandomKey}>
        <PaginatedCardList itemsPerPage={6} />
      </div>
    </>
  );
}
