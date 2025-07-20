import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import api from './api/api';

export default function Messages() {
  const [msgs, setMsgs] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api.get('/contacts')
       .then(r => setMsgs(r.data))
       .catch(console.error);
  }, []);

  const del = id => {
    if (!window.confirm('Delete this message?')) return;
    api.delete(`/contacts/${id}`)
       .then(() => setMsgs(ms => ms.filter(m => m._id !== id)))
       .catch(console.error);
  };

  if (user?.role !== 'admin') return <p>Access Denied</p>;

  return (
    <div className="messages">
      <h2>Contact Messages</h2>
      {msgs.map(m => (
        <div key={m._id} className="message-card">
          <p>
            <strong>{m.firstName} {m.lastName}</strong><br />
            {m.email}{m.phone && ` • ${m.phone}`}
          </p>
          <p>{m.message}</p>
          <button onClick={() => del(m._id)}>Delete</button>
          <hr/>
        </div>
      ))}
    </div>
  );
}
