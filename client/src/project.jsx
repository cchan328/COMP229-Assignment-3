

import React, { useEffect, useState, useContext } from 'react';
import api from './api/api';
import { AuthContext } from './context/AuthContext';
import { useNavigate } from 'react-router-dom';

import project1Img from './assets/project1.jpg';
import project2Img from './assets/project2.jpg';
import project3Img from './assets/project3.jpg';

const staticProjects = [
  {
    title: 'Linux server',
    image: project1Img,
    description:
      'Building a Linux SSH server allowing computers to log in with username/password to transfer files.',
  },
  {
    title: 'Fitness App design',
    image: project2Img,
    description:
      'Built a cross-platform tracker in React Native featuring workout logs, progress charts, and social sharing.',
  },
  {
    title: 'Multiple Choice APP',
    image: project3Img,
    description:
      'Interactive multiple-choice quiz application in Java, with answer validation, score tracking, and user feedback.',
  },
];

export default function Projects() {
  const [serverProjects, setServerProjects] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get('/projects')
      .then((res) => setServerProjects(res.data))
      .catch((err) => {
        console.error('Failed to fetch projects:', err);
        setServerProjects([]);
      });
  }, []);

  const handleDelete = (id) => {
    if (!window.confirm('Delete this project?')) return;
    api
      .delete(`/projects/${id}`)
      .then(() =>
        setServerProjects((prev) => prev.filter((p) => p._id !== id))
      )
      .catch((err) => console.error('Delete failed:', err));
  };


  const projectsToShow = [...staticProjects, ...serverProjects];

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectsToShow.map((proj, idx) => (
          <div
            key={proj._id ?? `static-${idx}`}
            className="project-card"
          >
            {}
            {!proj._id && (
              <div className="img-wrapper">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="project-img"
                />
              </div>
            )}

            <h3>{proj.title}</h3>
            <p>{proj.description}</p>

            {}
            {user?.role === 'admin' && proj._id && (
              <>
                <button onClick={() => handleDelete(proj._id)}>Delete</button>
                {' '}
               <button onClick={() => navigate(`/edit-project/${proj._id}`)}>
                Edit
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


