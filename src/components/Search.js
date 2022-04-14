import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchText }) => {
  return (
    <div className="search">
      <MdSearch size="1.3em" className="search-icons" />
      <input
        type="text"
        placeholder="type to search..."
        onChange={(e) => handleSearchText(e.target.value)}
      />
    </div>
  );
};

export default Search;
