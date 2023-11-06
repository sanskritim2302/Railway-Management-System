// import React from 'react'
// // import {useNavigate} from 'react-router-dom';
// import Stationbystation from '../../components/StationbyStation/Stationbystation';
// import Seatavailability from '../../components/Seatavailablity/Seatavailability'
// import Trainbtwstation from '../../components/Trainbtwstation/Trainbtwstation'

// const Train = () => {
//   return (
//     <div>
//        <Stationbystation/>
//        <Seatavailability/>
//        <Trainbtwstation/>

      
//     </div>
//   )
// }

// export default Train
import React from 'react';
import './Train.css'; // Adjust the path based on your file structure
import Stationbystation from '../../components/StationbyStation/Stationbystation';
import Seatavailability from '../../components/Seatavailablity/Seatavailability'
import Trainbtwstation from '../../components/Trainbtwstation/Trainbtwstation'
// import PNRComponent from '../../components/PRNComponent/PNRComponent';

const Train = () => {
  
  return (
    <div className="train-container" >
    <div className="Trainbg">
    </div>
      <h1>Enjoy Your Journey</h1>
      <div className="component-container stationbystation">
        <Stationbystation />
      </div>
      <div className="component-container seatavailability">
        <Seatavailability />
      </div>
      <div className="component-container trainbtwstation">
        <Trainbtwstation />
      </div>
      {/* <div className="component-container prn ">
        <PNRComponent />
      </div> */}
    </div>
    
  );
};

export default Train;

