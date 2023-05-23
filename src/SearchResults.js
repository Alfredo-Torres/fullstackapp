import React from 'react';

const SearchResults = ({ data }) => {
  return (
    <div style={containerStyles}>
      <div style={boxStyles}>
        <h2>Search Results</h2>
        {data ? (
          <ul>
            {data.map((result) => (
              <li key={result.id}>{result.name}</li>
            ))}
          </ul>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

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

export default SearchResults;

