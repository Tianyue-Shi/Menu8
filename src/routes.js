import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutSection from './components/AboutSection';
import AboutUs from './components/AboutUs';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AboutSection />} />  
      <Route path="/about-us" element={<AboutUs />} /> 
    </Routes>
  );
};

export default AppRoutes;
