import React, { useState } from 'react';
import './searchBar.scss';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform search functionality here
    console.log('Search term:', searchTerm);
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar-wrapper">
        <form className="search-bar" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;