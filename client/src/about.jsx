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
      <>
  <p>Hi, I’m Clement Chan, a developer passionate about web technologies and user-centered design.</p>
  
  <p>Over the past several years I’ve built everything from small static sites to full‐stack applications using React, Node.js, and MongoDB. I love taking an idea from wireframe all the way to production and continuously improving performance and usability.</p>
  
  <p>My background as a CPA in Hong Kong gives me a unique perspective on data integrity and security—skills I bring to every project to ensure reliability and maintainability. I’m always mindful of best practices, whether it’s writing clean code, setting up CI/CD pipelines, or designing intuitive UI components.</p>
  
  <p>Right now I’m studying Software Engineering Technology at Centennial College while working on real‐world portfolio projects. I enjoy collaborating with classmates on group assignments, mentoring newcomers to JavaScript, and sharing tips on agile workflows and Git branching strategies.</p>
  
  <p>Outside of coding, I’m an avid home chef and pizza enthusiast (ask me about sourdough crusts!). I’ve even been experimenting with sake brewing—combining my love of fermentation science with a passion for clean, modern interfaces in my web apps.</p>
  
  <p>If you’d like to connect, whether it’s to discuss a potential collaboration or just swap coding and cooking tips, feel free to drop me a line!</p>
</>

      
      <a href={CV} target="_blank" download="ClementChan_Resume.pdf">Download Resume (PDF)</a>
    </div>
  );
}

export default About;
