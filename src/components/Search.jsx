import { useState } from "react";
import { IoIosSearch } from "react-icons/io";


function Search({ onSearch, places }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  return (
    <div className="shadow-lg border-solid border rounded-xl content-center justify-center w-36 h-12 lg:w-80">
      <div className="input-group mb-2 w-50">
        <div className="input-group-prepend">
          {/* <span className="input-group-text text-center text-xl mb-2" id="basic-addon1">
            Search
          </span> */}
        </div>
        <input
          type="text"
          placeholder="Search... 🔍"
          value={searchQuery}
          onChange={handleInputChange}
          className="form-control search-bar w-24 h-8 lg:w-64 "
        />

      </div>
    </div>
  );
}

export default Search;
