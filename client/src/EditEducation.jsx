import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from './api/api';
import { AuthContext } from './context/AuthContext';

export default function EditEducation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  if (!user || user.role !== 'admin') return <p>Access Denied</p>;

  const [education, setEducation] = useState({
    title: '', firstname: '', lastname: '', email: '', completion: '', description: ''
  });
  const [msg, setMsg] = useState('');

  useEffect(() => {
    api.get(`/educations/${id}`)
       .then(res => {
         const e = res.data;
         setEducation({
           title: e.title,
           firstname: e.firstname,
           lastname: e.lastname,
           email: e.email,
           completion: e.completion.slice(0,10),
           description: e.description
         });
       })
       .catch(console.error);
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setEducation(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.put(`/educations/${id}`, education);
      setMsg('Education updated!');
      setTimeout(() => navigate('/educations'), 800);
    } catch (err) {
      console.error(err);
      setMsg('Update failed');
    }
  };

  return (
    <div className="add-education">
      <h2>Edit Education</h2>
      <form onSubmit={handleSubmit}>
        <input name="title"       placeholder="Title"       value={education.title}      onChange={handleChange} required />
        <input name="firstname"   placeholder="First Name"  value={education.firstname} onChange={handleChange} />
        <input name="lastname"    placeholder="Last Name"   value={education.lastname}  onChange={handleChange} />
        <input name="email"       type="email"           placeholder="Email"        value={education.email}     onChange={handleChange} />
        <input name="completion"  type="date"            value={education.completion} onChange={handleChange} />
        <textarea name="description" placeholder="Description" value={education.description} onChange={handleChange} />
        <button type="submit">Update</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}
