import React, { useState } from 'react';
import { fetchSearchResults } from './api';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  async function handleSearch(searchTerm) {
    try {
      const results = await fetchSearchResults(searchTerm);
      setSearchResults(results);
    } catch (error) {
      console.error('Error handling search:', error);
    }
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <SearchResults data={searchResults} />
    </div>
  );
}

export default App;


