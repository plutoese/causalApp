import ReactPaginate from "react-paginate";
import useCaseFilterStore from "@/store/caselabelstore";
import { useState } from "react";
import CaseCard from "@/components/cards/standard_card";
import useCasePageStore from "@/store/casepagestore";

function CardList({ currentItems }) {
  return (
    <>
      <div className="grid grid-cols-2 mx-auto max-w-7xl px-6 my-6 gap-8">
        {currentItems.map((item) => (
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

const PaginatedCardList = ({ itemsPerPage }) => {
  const { cases, queryCases } = useCaseFilterStore();
  const { itemOffset, setItemOffset } = useCasePageStore();
  const items = cases;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <CardList currentItems={currentItems} />
      <ReactPaginate
        breakLabel={<span className="mr-4">...</span>}
        nextLabel="下一页"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel="上一页"
        renderOnZeroPageCount={null}
        containerClassName="flex items-center justify-center mt-8 mb-4 gap-4"
        pageClassName="block border-solid border-lightGray hover:bg-lightGray w-6 h-6 flex items-center justify-center rounded-md m-2"
        activeClassName="bg-provence-lavender text-white"
      />
    </>
  );
};

export default PaginatedCardList;
