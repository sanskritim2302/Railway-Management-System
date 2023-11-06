import React, { useState } from 'react';
import axios from 'axios';

const AvailabilityCheck = () => {
  const [trainName, setTrainName] = useState('');
  const [date, setDate] = useState('');
  const [availability, setAvailability] = useState(null);

  const handleCheckAvailability = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/availability`, {
        params: {
          train_name: trainName,
          date: date,
        },
      });

      setAvailability(response.data.seats_available);
    } catch (error) {
      console.error('Error checking availability:', error.message);
    }
  };

  return (
    <div>
      <h2>Check Seat Availability</h2>
      <label>
        Train Name:
        <input type="text" value={trainName} onChange={(e) => setTrainName(e.target.value)} />
      </label>
      <br />
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <br />
      <button onClick={handleCheckAvailability}>Check Availability</button>
      {availability !== null && <p>Seats available: {availability}</p>}
    </div>
  );
};

export default AvailabilityCheck;
