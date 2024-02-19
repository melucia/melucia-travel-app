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
    <div className="d-inline-flex justify-content-center align-items-center w-100 p-4">
      <div className="input-group mb-2 w-50">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Search
          </span>
        </div>
        <IoIosSearch/>
        <input
          type="text"
          placeholder= "Search... 🔍" 
          value={searchQuery}
          onChange={handleInputChange}
          className="form-control search-bar"
        />
        
      </div>
    </div>
  );
}

export default Search;
