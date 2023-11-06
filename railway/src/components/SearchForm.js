import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(source, destination); // Call the onSearch function
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Source:
        <input type="text" value={source} onChange={(e) => setSource(e.target.value)} />
      </label>
      <label>
        Destination:
        <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
      </label>
      <button type="submit">Search Trains</button>
    </form>
  );
}

export default SearchForm;
