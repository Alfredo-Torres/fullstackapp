import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(searchTerm);
  }

  return (
    <div style={containerStyles}>
      <div style={boxStyles}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter search term..."
            value={searchTerm}
            onChange={handleChange}
          />
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

