import { useState } from "react";

function Search({ onSearch, places }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value).toLowerCase;
  };

  return (
    <div className="">
      <div className="mb-2">
        <div className="mb-4 flex w-full flex-wrap items-stretch"></div>
        <input
          type="text"
          placeholder="Search for a place... "
          value={searchQuery}
          onChange={handleInputChange}
          className="m-0 -mr-0.5 block min-w-0 flex-auto shadow-lg border-solid border rounded-xl bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
        />
      </div>
    </div>
  );
}

export default Search;
