import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TrainManagement({ source, destination }) {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // Define the URL for your API endpoint
    const apiUrl = `/api/trains?source=${source}&destination=${destination}`;

    // Fetch data from the API using axios
    axios.get(apiUrl)
      .then((response) => {
        setTrains(response.data); // Update state with the fetched data
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [source, destination]);

  return (
    <div>
      <h2>Train Management</h2>
      {source && destination && (
        <h3>Trains from {source} to {destination}</h3>
      )}
      <ul>
        {trains.map((train) => (
          <li key={train._id}>
            <strong>{train.name}</strong> (Capacity: {train.capacity}, Type: {train.type})
            <br />
            Availability: {train.availability}, Available Seats: {train.availableSeats}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrainManagement;
