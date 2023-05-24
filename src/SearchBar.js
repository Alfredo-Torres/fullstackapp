import React, { useState } from 'react';
import { fetchHorizonsData, fetchSearchResults } from './api';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const searchData = await fetchSearchResults();
      onSearch(searchTerm); // Pass the searchTerm to onSearch
    } catch (error) {
      console.error('Error searching:', error);
    }
  }

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div style={containerStyles}>
      <div style={boxStyles}>
        <form onSubmit={handleSubmit}>
          <input type="text" value={searchTerm} onChange={handleChange} placeholder="Enter search term" />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}

const containerStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '50vh',
};

const boxStyles = {
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  backgroundColor: '#f2f2f2',
};

export default SearchBar;
