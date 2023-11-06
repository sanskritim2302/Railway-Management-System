// import "./navbar.css";
// import logoImage from "./logo.png";
// const Navbar = () => {
//     return (
// <div className="navbar">
//     <div className="navContainer">
//     <img src={logoImage} alt="Logo" className="logo" width="80"  height="70"/>
//         <div className="navItems">
//             <button className="newButton">Register</button>
//             <button className="newButton">Login</button>
//         </div>
//     </div>
// </div>
    
//         )
// }

// export default Navbar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './navbar.css';
import logoImage from './logo.png';
import Login from './login/Login';
import Signup from './signup';

const Navbar = () => {
  const [isLoginFormOpen, setLoginFormOpen] = useState(false);
  const [isSignupFormOpen, setSignupFormOpen] = useState(false);

  const openLoginForm = () => {
    setLoginFormOpen(true);
  };

  const closeLoginForm = () => {
    setLoginFormOpen(false);
  };

  const openSignupForm = () => {
    setSignupFormOpen(true);
  };

  const closeSignupForm = () => {
    setSignupFormOpen(false);
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <img src={logoImage} alt="Logo" className="logo" width="100" height="90" />
        <div className="navItems">
          <button><Link to="/login" className="navLink">Login</Link></button>
          <button><Link to="/signup" className="navLink">Signup</Link></button>
        </div>
      </div>

      {isLoginFormOpen && <Login onClose={closeLoginForm} />}
      {isSignupFormOpen && <Signup onClose={closeSignupForm} />}
    </div>
  );
};

export default Navbar;
