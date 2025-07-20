
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from './api/api';
import { AuthContext } from './context/AuthContext';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { data } = await api.post('/auth/signin', { email, password });

      login(data.user);
      localStorage.setItem('token', data.token);
      navigate('/'); 
    } catch (err) {
      alert(err.response?.data?.error || 'Signin failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
}
