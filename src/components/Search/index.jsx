import React, { useState } from "react";
import { navigate } from "gatsby";

//
import { Search as SearchIcon } from "../icons";
import "./index.scss";

const Search = ({ searchOpen, setSearchOpen }) => {
  const [query, setQuery] = useState();

  const searchHandler = (e) => {
    e.preventDefault();

    if (query) {
      navigate(`/search?q=${query}`);
      setSearchOpen(false);
    }
  };

  return (
    <div className={`search-modal ${searchOpen ? "" : "hidden"}`}>
      <div className="search-modal-controls">
        <button onClick={() => setSearchOpen(false)}>X</button>
      </div>
      <form
        className="search-modal-content"
        onSubmit={searchHandler}
        autoComplete="off"
      >
        <div className="search-modal-input">
          <input
            placeholder="Search..."
            name="search"
            id="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button>
            <SearchIcon color="#fff" size={32} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
