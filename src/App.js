import React from 'react';
import './App.css'; // Import your CSS for styling (optional for now)
import Header from './components/Header';
import AppRoutes from './routes'; // Import your routes file


function App() {
  return (
    <div className="App">
      <Header /> 
      <AppRoutes /> {/* Render the routes */}
      {/* <AboutSection /> */}
    </div>
  );
}

export default App;
