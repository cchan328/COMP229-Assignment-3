import React, { useState } from 'react';
import api from './api/api';

function AddProject() {
  const [project, setProject] = useState({
    title: '',
    firstname: '',
    lastname: '',
    email: '',
    completion: '',
    description: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/projects', project);
      setMessage('Project added successfully!');
      setProject({
        title: '',
        firstname: '',
        lastname: '',
        email: '',
        completion: '',
        description: ''
      });
    } catch (err) {
      console.error(err);
      setMessage('Failed to add project.');
    }
  };

  return (
    <div className="add-project">
      <h2>Add New Project</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" value={project.title} onChange={handleChange} placeholder="Project Title" required />
        <input name="firstname" value={project.firstname} onChange={handleChange} placeholder="First Name" />
        <input name="lastname" value={project.lastname} onChange={handleChange} placeholder="Last Name" />
        <input name="email" value={project.email} onChange={handleChange} placeholder="Email" />
        <input name="completion" type="date" value={project.completion} onChange={handleChange} />
        <textarea name="description" value={project.description} onChange={handleChange} placeholder="Project Description" />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default AddProject;
