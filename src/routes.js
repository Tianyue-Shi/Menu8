import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import HomePageBanner from './components/HomePageBanner';
import ContactPage from './components/ContactPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePageBanner />} />  
      <Route path="/about-us" element={<AboutUs />} /> 
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default AppRoutes;
