import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/assets/logo.jpg'; 

export default function Layout() {
  return (
    <>
      <h1>My Portfolio</h1>
      <nav className="navbar">
        <span className="logo">
          {/* Local JPG Logo from public folder */}
          <img src={logo} alt="Logo" className="logo-img" />
        </span>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link> |
        <Link to="/service">Service</Link> |
        <Link to="/project">Project</Link> |
        <Link to="/contact">Contact</Link>
      </nav>
      <hr />
    </>
  );
}


