import React from 'react';

import { Link } from 'react-router-dom';



const Navbar = () => {

  return (

    <nav id='nav'>

      <ul>
      <li><img alt="Wolfpack-icon" src="favicon.ico" /></li>

        <li><Link to="/">Home</Link></li>

        <li><Link to="/about">About</Link></li>

        <li><Link to="/projects">Projects</Link></li>

        <li><Link to="/services">Services</Link></li>

        <li><Link to="/contact">Contact</Link></li>

      </ul>

    </nav>

  );

}



export default Navbar;