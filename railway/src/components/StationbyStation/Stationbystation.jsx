// import React, { useState } from 'react';
// import axios from 'axios';

// const Stationbystation = () => {
//     const [station, setStation] = useState('');
//     const [TrainData, setTrainData] = useState([]);

//     const getTrains = async (e) => {
//         e.preventDefault();
//         try {
//             const options = {
//                 method: 'GET',
//                 url: 'https://irctc1.p.rapidapi.com/api/v3/getTrainsByStation',
//                 params: {
//                     stationCode: station,
//                 },
//                 headers: {
//                     'X-RapidAPI-Key': '914a280eb9msh214f247ae018c11p1bd09bjsn6c12727f89ea',
//                     'X-RapidAPI-Host': 'irctc1.p.rapidapi.com',
//                 },
//             };

//             try {
                
//                 const response = await axios(options);
//                 console.log(response.data);
//                 setTrainData(response?.data?.data?.passing);
//             } catch (error) {
//                 console.error(error);
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={getTrains}>
//                 <input type="text" onChange={(e) => setStation(e.target.value)} />
//                 <button type="submit">Get Trains</button>
//             </form>
//             <div className="card">


//                 {TrainData &&
//                     TrainData?.map((train, i) => (
//                         <div key={i}>
//                             <h5>{train?.arrivalTime}</h5>
//                             <h5>{train?.departureTime}</h5>
//                             <h5>{train?.trainName}</h5>
//                             <h5>{train?.trainNo}</h5>
//                             <div>
//                                 {train?.classes &&
//                                     train?.classes?.map((classItem, j) => (
//                                         <h5 key={j}>{classItem}</h5>
//                                     ))}
//                             </div>
//                         </div>  
//                     ))}
//             </div>
//         </div>
//     );
// };

// export default Stationbystation;
import React, { useState } from 'react';
import axios from 'axios';
import "./Stationby.css"

const Stationbystation = () => {
    const [station, setStation] = useState('');
    const [TrainData, setTrainData] = useState([]);

    const getTrains = async (e) => {
        e.preventDefault();
        try {
            const options = {
                method: 'GET',
                url: 'https://irctc1.p.rapidapi.com/api/v3/getTrainsByStation',
                params: {
                    stationCode: station,
                },
                headers: {
                    'X-RapidAPI-Key': '33d6a15353msh7d1ae0e781c35d0p1509d0jsn019a2a5fe875',
                    'X-RapidAPI-Host': 'irctc1.p.rapidapi.com',
                },
            };

            try {
                const response = await axios(options);
                console.log(response.data);
                setTrainData(response?.data?.data?.passing);
            } catch (error) {
                console.error(error);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="">
            <h3>Train Name </h3>
            <form onSubmit={getTrains}>
                <input type="text" onChange={(e) => setStation(e.target.value)} />
                <button type="submit">Get Trains</button>
            </form>
            
            <div className="card" >
                
                {TrainData &&
                    TrainData?.map((train, i) => (
                        <div key={i} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
                            <h5>Arrival Time: {train?.arrivalTime}</h5>
                            <h5>Departure Time: {train?.departureTime}</h5>
                            <h5>Train Name: {train?.trainName}</h5>
                            <h5>Train No: {train?.trainNo}</h5>
                            <div>
                                <h5>Classes:</h5>
                                {train?.classes &&
                                    train?.classes?.map((classItem, j) => (
                                        <span key={j} style={{ marginRight: '5px' }}>{classItem}</span>
                                    ))}
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Stationbystation;

