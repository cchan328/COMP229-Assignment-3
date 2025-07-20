// client/components/Layout.jsx

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/assets/logo.jpg';
import { AuthContext } from '../src/context/AuthContext';

export default function Layout({ children }) {
  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <header>
        <h1>My Portfolio</h1>
        <nav className="navbar">
          <span className="logo">
            <img src={logo} alt="Logo" className="logo-img" />
          </span>
          <Link to="/">Home</Link> |
          <Link to="/about">About</Link> |
          <Link to="/service">Service</Link> |
          <Link to="/project">Project</Link> |
          <Link to="/educations">Education</Link> |
          <Link to="/contact">Contact</Link>

          {user ? (
            <>
              {user.role === 'admin' && (
                <>
                  {' '}| <Link to="/add-project">Add Project</Link>
                  {' '}| <Link to="/add-education">Add Education</Link>
                  {' '}| <Link to="/messages">Messages</Link>
                </>
              )}
              {' '}| <button onClick={logout}>Sign Out</button>
            </>
          ) : (
            <>
              {' '}| <Link to="/signin">Sign In</Link>
              {' '}| <Link to="/signup">Sign Up</Link>
            </>
          )}
        </nav>
      </header>

      <hr />

      <main>{children}</main>
    </>
  );
}








