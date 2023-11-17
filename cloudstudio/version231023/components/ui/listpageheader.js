"use client";

function SearchToolbox() {
  return (
    <form action="/" method="GET">
      <input
        name="search"
        id="search"
        value=""
        type="text"
        placeholder="搜索主题"
        className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
      />
      <svg
        className="absolute w-5 h-5 text-gray-400 right-3 top-8 dark:text-gray-300"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLlinecap="round"
          strokeLlinejoin="round"
          strokeLwidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
    </form>
  );
}


export default function ListPageHeader({ title, description, isSearchable = false }) {
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          {title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
      </div>
      {isSearchable && (
        <div className="relative mx-auto max-w-lg pt-5">
          <SearchToolbox />
        </div>
      )}
    </>
  );
}
