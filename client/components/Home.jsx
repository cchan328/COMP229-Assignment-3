import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>Mission Statement: Crafting innovative, user-centered digital solutions that make an impact.</p>
      <Link to="/about" className="btn">About Me</Link>
      <Link to="/projects" className="btn" style={{ marginLeft: '1rem' }}>My Projects</Link>
    </div>
  );
}

export default Home;