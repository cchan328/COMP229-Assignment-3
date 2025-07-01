/*service.jsx
Name: Chun YU Clement Chan
Student ID: 301454624
Date: 27/5/2025*/

import React from 'react';

function Service() {
  const servicesOffered = [
    'General Programming',
    'Web Development',
    'Mobile App Development',
    'UI/UX Design'
  ];

  return (
    <div className="services">
      <h2>Services I Offer</h2>
      <ul>
        {servicesOffered.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </div>
  );
}

export default Service;
