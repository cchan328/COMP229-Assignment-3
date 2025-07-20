import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from './api/api';
import { AuthContext } from './context/AuthContext';

export default function EditProject() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  if (!user || user.role !== 'admin') return <p>Access Denied</p>;

  const [project, setProject] = useState({
    title: '', firstname: '', lastname: '', email: '', completion: '', description: ''
  });
  const [msg, setMsg] = useState('');

  useEffect(() => {
    api.get(`/projects/${id}`)
       .then(res => {
         const p = res.data;
         setProject({
           title: p.title,
           firstname: p.firstname,
           lastname: p.lastname,
           email: p.email,
           completion: p.completion.slice(0,10),
           description: p.description
         });
       })
       .catch(console.error);
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setProject(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.put(`/projects/${id}`, project);
      setMsg('Project updated!');
      setTimeout(() => navigate('/project'), 800);
    } catch (err) {
      console.error(err);
      setMsg('Update failed');
    }
  };

  return (
    <div className="add-project">
      <h2>Edit Project</h2>
      <form onSubmit={handleSubmit}>
        <input name="title"        placeholder="Title"      value={project.title}      onChange={handleChange} required />
        <input name="firstname"    placeholder="First Name" value={project.firstname}  onChange={handleChange} />
        <input name="lastname"     placeholder="Last Name"  value={project.lastname}   onChange={handleChange} />
        <input name="email"        type="email"           placeholder="Email"       value={project.email}      onChange={handleChange} />
        <input name="completion"   type="date"            value={project.completion} onChange={handleChange} />
        <textarea name="description" placeholder="Description" value={project.description} onChange={handleChange} />
        <button type="submit">Update</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}
