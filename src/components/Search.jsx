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
    <div className="shadow-lg border-solid border rounded-xl w-96 h-44 flex-col content-center mb-12 p-8 mr-20">
      <div className="input-group mb-2 w-50">
        <div className="input-group-prepend">
          <span className="input-group-text text-center text-xl mb-2" id="basic-addon1">
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
