// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import MathIntroduction from './components/MathIntroduction'; // Import the new component
import HistoryPage from './components/HistoryPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/math-introduction" element={<MathIntroduction />} /> 
        <Route path="/history-resource" element={<HistoryPage/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
