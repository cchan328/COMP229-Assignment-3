/*about.jsx
Name: Chun YU Clement Chan
Student ID: 301454624
Date: 27/5/2025*/

import React from 'react';
import profileImg from './assets/profile.jpg';
import CV from './assets/ClementCV.pdf';

function About() {
  return (
    <div className="about">
      <h2>About Me</h2>
      <img src={profileImg} alt="Profile" className="profile-img" />
      <p>Hi, I’m Clement Chan, a developer passionate about web technologies and user-centered design.</p>
      <a href={CV} target="_blank" download="ClementChan_Resume.pdf">Download Resume (PDF)</a>
    </div>
  );
}

export default About;
