/*contact.jsx
Name: Chun YU Clement Chan
Student ID: 301454624
Date: 27/5/2025*/


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', message: ''
  });
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    navigate('/');
  };

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>Email: cchan328@centennialcollege.com</p>
      <p>Phone: +1 234 567 8901</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          type="text"
          placeholder="Contact Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;

