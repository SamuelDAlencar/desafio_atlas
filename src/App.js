import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/user/:username/repos" element={ <User /> } />
    </Routes>
  );
}

export default App;
