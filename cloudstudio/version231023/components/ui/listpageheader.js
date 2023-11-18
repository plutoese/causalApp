import SearchToolbox from "./searchtoolbox";

export default function ListPageHeader({
  title,
  description,
  isSearchable = false,
}) {
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
