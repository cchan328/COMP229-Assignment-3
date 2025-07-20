import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from './api/api';

export default function Signup() {
  const [form, setForm] = useState({ name:'', email:'', password:'' });
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {

      await api.post('/users', { ...form, role: 'user' });
      setMsg('Account created! Redirecting to Sign In…');
      setTimeout(() => navigate('/signin'), 1000);
    } catch (err) {
      console.error(err);
      setMsg('Signup failed.');
    }
  };

  return (
    <div className="signin-page">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit">Create Account</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}
