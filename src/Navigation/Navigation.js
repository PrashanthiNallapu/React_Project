
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home.js';
import AboutUs from '../pages/About.js';
import ProjectNavbar from '../components/Navbar.js';

import Donate from '../pages/Donate.js';
import ImpactPage from '../pages/impact.js';

import Actions from '../pages/Actions.js';
import Footer from '../Footer.js';
import EducationDetail from '../components/Extension.js';
import HealthDetail from '../components/Healthextension.js';
import ContactUs from '../pages/contact.js';


const Navigation = () => {
  return (
    <Router>
      <ProjectNavbar />
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/Donate" element={<Donate/>}/>
          <Route path="/impact" element={<ImpactPage/>}/>
          <Route path="/Actions" element={<Actions/>}/>
          <Route path="/Extension" element={<EducationDetail />} />
          <Route path="/Healthextension" element={<HealthDetail/>}/>
        
        </Routes>

      </main>
      <Footer/>
    </Router>
  );
};

export default Navigation;
