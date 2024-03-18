import React from 'react';
import './App.css'; // Import your CSS for styling (optional for now)
import Header from './components/Header';
import AboutSection from './components/AboutSection';

import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Header /> {/* Add the Header component */}

      {/* Rest of your main content goes here */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}> {/* Styling for image section */}
        <img src="/SurfAndTurf.jpeg" alt="Business Name" style={{ width: '100%' }} /> {/* Replace with your image path */}
        <div style={{ position: 'absolute', color: 'white', padding: 20 }}> {/* Text overlay on image */}
          <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
            MENU 8
          </Typography>
          <Typography variant="body1" component="p">
            EXPERIENCE CULINARY ARTISTRY
          </Typography>
        </div>
      </div>

      <AboutSection />

    </div>
  );
}

export default App;

