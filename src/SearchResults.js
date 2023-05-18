import React from 'react';

function SearchResults({ data }) {
  return (
    <div>
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
  );
}

export default SearchResults;
