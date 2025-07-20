/* MainRouter.jsx
Name: Chun YU Clement Chan
Student ID: 301454624
Date: 27/5/2025 */

// MainRouter.jsx
import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Signin from './src/Signin';
import About from './src/about';
import Service from './src/service';
import Project from './src/project';
import Contact from './src/contact';
import EducationList from './src/Education';     
import { AuthContext } from './src/context/AuthContext';
import AddProject    from './src/AddProject.jsx';
import EditProject   from './src/EditProject.jsx';
import AddEducation  from './src/AddEducation.jsx';
import EditEducation from './src/EditEducation.jsx';
import Messages       from './src/Messages.jsx';
import Signup        from './src/Signup.jsx';

export default function MainRouter() {
  const { user } = useContext(AuthContext);

  return (
    <Layout>
      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/signin"      element={<Signin />} />
        <Route path="/about"       element={<About />} />
        <Route path="/service"     element={<Service />} />
        <Route path="/project"     element={<Project />} />
        <Route path="/contact"     element={<Contact />} />
        <Route path="/educations"  element={<EducationList />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {user?.role === 'admin' && (
          <>
            <Route path="/add-project"   element={<AddProject />} />
            <Route path="/edit-project/:id" element={<EditProject />} />
            <Route path="/add-education" element={<AddEducation />} />
            <Route path="/edit-education/:id" element={<EditEducation />} />
            <Route path="/messages"         element={<Messages />} />
          </>
        )}
      </Routes>
    </Layout>
  );
}




