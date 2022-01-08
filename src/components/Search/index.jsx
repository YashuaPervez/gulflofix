import React from "react";

//
import { Search as SearchIcon } from "../icons";
import "./index.scss";

const Search = ({ searchOpen, setSearchOpen }) => {
  return (
    <div className={`search-modal ${searchOpen ? "" : "hidden"}`}>
      <div className="search-modal-controls">
        <button onClick={() => setSearchOpen(false)}>X</button>
      </div>
      <form
        className="search-modal-content"
        action="https://www.gulflogix.ae"
        method="GET"
      >
        <div className="search-modal-input">
          <input placeholder="Search..." name="s" id="search" />
          <button>
            <SearchIcon color="#fff" size={32} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
