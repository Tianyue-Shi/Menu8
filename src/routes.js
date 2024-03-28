import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import HomePageBanner from './components/HomePageBanner';
import ContactPage from './components/ContactPage';
import ConfirmationPage from './components/ConfirmationPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePageBanner />} />  
      <Route path="/about-us" element={<AboutUs />} /> 
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/confirmation" element={<ConfirmationPage />} />
    </Routes>
  );
};

export default AppRoutes;
