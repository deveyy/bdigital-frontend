import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/client/Home';
import Showreel from 'pages/client/Showreel';
import Contact from 'pages/client/Contact';
import Notfound from 'pages/client/Notfound';
import UINavbar from 'components/client/navbar/UINavbar';

function App() {
  return (
    <div>
      <UINavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showreel" element={<Showreel />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
