// import './App.css'
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Login from "./components/login"
// import Signup from "./components/signup"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Featured from "./components/Featured";
// // import { useState } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//         <Route path="/">
//         <Header />
//         <Footer />
//           </Route>
//         <Route path="/" element={<Featured/>}/>

//           <Route path="/" element={<Login/>}/>
//           <Route path="/signup" element={<Signup/>}/>
          
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Navbar from './components/navbar/Navbar';
import Login from './components/navbar/login/Login';
import Signup from './components/navbar/signup';
import Train from "./pages/Train/Train";
// import PNRComponent from "./components/Trains/PNRComponent";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<PNRComponent/>}/>  */}
      <Route path="/" element={<Home/>}/>
      <Route path="/hotels" element={<List/>}/>
      <Route path="/hotels/:id/" element={<Hotel/>}/>
      <Route path="/" element={<Navbar />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/train" element={<Train />} />
    </Routes>
       </BrowserRouter>
      );
}

export default App;