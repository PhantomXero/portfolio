import React from "react";

function SearchBar(props) {
  return (
    <input
      type="search"
      name="bar"
      id="search_bar"
      placeholder="Search for {props.placeholder}"
    />
  );
}

export default SearchBar;
