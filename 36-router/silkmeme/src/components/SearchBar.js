import React from 'react';

function SearchBar(props) {

    return (
      <div className={`search-bar ${ props.searchInput.length > 0 ? "search-bar-animate" : ""}`}>
          <input
            value={props.searchInput}
            onChange={props.handleSearchInput} 
            placeholder="Search all the silkmemes" 
            className="search-input"/>
      </div>
    );
  }
  
  export default SearchBar;