import React, { useState } from 'react';

function RailwayApp() {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [showTrainList, setShowTrainList] = useState(false);

  const handleSearch = () => {
    setShowTrainList(true);
  };

  return (
    <div>
      <h1>Railway Management System</h1>
      <div>
        <label>
          Source:
          <input type="text" value={source} onChange={(e) => setSource(e.target.value)} />
        </label>
        <label>
          Destination:
          <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
        </label>
        <button onClick={handleSearch}>Search Trains</button>
      </div>
      {showTrainList && (
        <div>
          <h2>Train Management</h2>
          <h3>Trains from {source} to {destination}</h3>
          {/* Add your train list here */}
        </div>
      )}
    </div>
  );
}

export default RailwayApp;
