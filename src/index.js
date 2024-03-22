import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'; // CSS Reset
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

const theme = createTheme({
  // Basic customization (more later) 
  palette: {
    primary: {
      main: '#008080' // Example primary color
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter> {/*  Wrap your App component with BrowserRouter */}
      <App />
    </BrowserRouter>
  </ThemeProvider>
);

reportWebVitals();
