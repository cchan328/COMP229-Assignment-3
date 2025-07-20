import React, { useEffect, useState, useContext } from 'react';
import api from './api/api';
import { AuthContext } from './context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function EducationList() {
  const [eds, setEds] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/educations').then(r => setEds(r.data));
  }, []);

  const del = id => {
    if (!confirm('Delete?')) return;
    api.delete(`/educations/${id}`).then(() =>
      setEds(eds.filter(e => e._id !== id))
    );
  };

  return (
     <div>
       <h2>Education</h2>
       {eds.map(e => (
         <div key={e._id}>
           <h3>{e.title}</h3>
           <p>{e.description}</p>
           <p>Completed: {new Date(e.completion).toLocaleDateString()}</p>
          {user?.role === 'admin' && (
            <>
              <button onClick={() => del(e._id)}>Delete</button>
              {' '}
              <button onClick={() => navigate(`/edit-education/${e._id}`)}>
                Edit
              </button>
            </>
          )}
         </div>
       ))}
     </div>
   );
}

