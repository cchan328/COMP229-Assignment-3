import React, { useState, useContext } from 'react';
import api from './api/api';
import { AuthContext } from './context/AuthContext';

export default function AddEducation() {
  const { user } = useContext(AuthContext);

  // Protect this page — only admins see it
  if (!user || user.role !== 'admin') {
    return <p>Access Denied</p>;
  }

  const [education, setEducation] = useState({
    title: '',
    firstname: '',
    lastname: '',
    email: '',
    completion: '',
    description: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setEducation(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.post('/educations', education); 
      setMessage('Education added!');
      setEducation({
        title: '',
        firstname: '',
        lastname: '',
        email: '',
        completion: '',
        description: ''
      });
    } catch (err) {
      console.error(err);
      setMessage('Failed to add education.');
    }
  };

  return (
    <div className="add-education">
      <h2>Add Education</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={education.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <input
          name="firstname"
          value={education.firstname}
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          name="lastname"
          value={education.lastname}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <input
          name="email"
          type="email"
          value={education.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          name="completion"
          type="date"
          value={education.completion}
          onChange={handleChange}
        />
        <textarea
          name="description"
          value={education.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <button type="submit">Save</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

