// import axios from 'axios';
// import React, { useState } from 'react'

// const Seatavailability = () => {
//     const [seat, setSeat] = useState(
//         {
//             classType: "",
//             fromStationCode: "",
//             quota: "",
//             toStationCode: "",
//             trainNo: "",
//             date: ""
//         }
//     )

//     const [seatData,setSeatData]=useState([])

//     const Getrainavailable = async ({ classType, fromStationCode, quota, toStationCode, trainNo, date }) => {
//         const options = {
//             method: 'GET',
//             url: 'https://irctc1.p.rapidapi.com/api/v1/checkSeatAvailability',
//             params: {
//                 classType: `${classType}`,
//                 fromStationCode: `${fromStationCode}`,
//                 quota: `${quota}`,
//                 toStationCode: `${toStationCode}`,
//                 trainNo: `${trainNo}`,
//                 date: `${date}`
//             },
//             headers: {
//                 'X-RapidAPI-Key': 'f52b798797msh5a9752fbdd67123p121bcejsn8d3a907b329f',
//                 'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
//             }
//         };
//         try {
//             const response = await axios(options);
//             console.log(response?.data?.data);
//         } catch (error) {
//             console.error(error);
//         }
//     }

//     return (
//         <div>
//             <hr />
//             <form onSubmit={Getrainavailable}>
//                 <input type="text" name="classType" />
//                 <input type="text" name="fromStationCode"/>
//                 <input type="text" name="quota" />
//                 <input type="text" name="toStationCode"/>
//                 <input type="text" name="trainNo"/>
//                 <input type="date" name="date"/>
//             </form>
//             {/* <div>
//                 {
//                     seatData&&
//                     seatData.map()
//                 }
//             </div> */}
//         </div>
//     )
// }

// export default Seatavailability
import React, { useState } from 'react';
import axios from 'axios';
import './Seatavailability.css';


const Seatavailability = () => {
    const [seat, setSeat] = useState({
        classType: '',
        fromStationCode: '',
        quota: '',
        toStationCode: '',
        trainNo: '',
        date: '',
    });

    const [seatData, setSeatData] = useState([]);

    const getTrainAvailability = async (e) => {
        e.preventDefault();

        try {
            const options = {
                method: 'GET',
                url: 'https://irctc1.p.rapidapi.com/api/v1/checkSeatAvailability',
                params: {
                    classType: seat.classType,
                    fromStationCode: seat.fromStationCode,
                    quota: seat.quota,
                    toStationCode: seat.toStationCode,
                    trainNo: seat.trainNo,
                    date: seat.date,
                },
                headers: {
                    'X-RapidAPI-Key': '33d6a15353msh7d1ae0e781c35d0p1509d0jsn019a2a5fe875',
                    'X-RapidAPI-Host': 'irctc1.p.rapidapi.com',
                },
            };

            const response = await axios(options);
            console.log(response?.data?.data);
            setSeatData(response?.data?.data); // Assuming response.data.data is an array

        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSeat((prevState) => ({ ...prevState, [name]: value }));
    };

    return (
        <div>
           <h3>SeatAvalibility</h3>
            <form onSubmit={getTrainAvailability}>
                <label htmlFor="">Classtype:</label>
                <input type="text" name="classType" onChange={handleInputChange} />
                <label htmlFor="">fromStationCode:</label>
                <input type="text" name="fromStationCode" onChange={handleInputChange} />
                <label htmlFor="">quota:</label>
                <input type="text" name="quota" onChange={handleInputChange} />
                <label htmlFor="">toStationCode:</label>
                <input type="text" name="toStationCode" onChange={handleInputChange} />
                <label htmlFor="">trainNo:</label>
                <input type="text" name="trainNo" onChange={handleInputChange} />
                <label htmlFor="">Date:</label>
                <input type="date" name="date" onChange={handleInputChange} />
                <button type="submit">Check Availability</button>
            </form>
            <div>
                {seatData &&
                    seatData.map((availability, index) => (
                        <div key={index}>
                            {/* Display relevant seat availability information */}
                            <div>
                                {seatData &&
                                    seatData.map((availability, index) => (
                                        <div key={index}>

                                            <h5>Class Type: {availability?.classType}</h5>
                                            <h5>confirm_probability_percent: {availability?.confirm_probability_percent}</h5>
                                            <h5>confirm_probability: {availability?.confirm_probability}</h5>
                                            <h5>current_status: {availability?.current_status}</h5>
                                            {/* Add other relevant seat availability information 
                                            confirm_probability_percent:"93"
                                              confirm_probability:"High"*/}
                                        </div>
                                    ))}
                            </div>


                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Seatavailability;

