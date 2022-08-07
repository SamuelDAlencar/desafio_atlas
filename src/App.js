import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import UserProvider from './providers/UserProvider';

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:username/repos" element={<User />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
