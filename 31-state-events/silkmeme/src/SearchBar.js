import React from 'react';

function SearchBar() {
    return (
      <div className="search-bar">
        <form id="search-form">
          <input placeholder="Search all the silkmemes" className="search-input"/>
          <button>🔎</button>
        </form>
      </div>
    );
  }
  
  export default SearchBar;