import React from 'react';
import './App.css'; // Import your CSS for styling (optional for now)
import Header from './components/Header';
import AboutSection from './components/AboutSection';

import AppRoutes from './routes'; // Import your routes file

import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Header /> {/* Add the Header component */}

      {/* Rest of your main content goes here */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}> {/* Styling for image section */}
        <img src="/stock-image.png" alt="Business Name" style={{ width: '100%' }} /> {/* Replace with your image path */}
      </div>
      <div style={{ position: 'absolute', color: 'black', padding: 20 }}> {/* Text overlay on image */}
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
          Example Title{/* MENU 8 */}
        </Typography>
        <Typography variant="body1" component="p">
          Example Paragraphhhhh
          {/* EXPERIENCE CULINARY ARTISTRY */}
        </Typography>
      </div>

      <AboutSection />

      <AppRoutes /> {/* Render the routes */}

    </div>
  );
}

export default App;
