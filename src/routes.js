import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import HomePageBanner from './pages/HomePageBanner';
import ContactPage from './pages/ContactPage';
import ConfirmationPage from './pages/ConfirmationPage';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePageBanner />} />  
      <Route path="/about-us" element={<AboutUs />} /> 
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/confirmation" element={<ConfirmationPage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/cart" element={<CartPage />} />

    </Routes>
  );
};

export default AppRoutes;
