import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';  
import CssBaseline from '@mui/material/CssBaseline'; // CSS Reset
import App from './App';
import reportWebVitals from './reportWebVitals';

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
    <App />
  </ThemeProvider>
);

reportWebVitals();
// i want a header with business name, Menu 8, displayed on the left, on the right there is a navigaiton button, menu, and contact. below the header there is a main page with an image fitting the whole space w/ business name and paragraph description.