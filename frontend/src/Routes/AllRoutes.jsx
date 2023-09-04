import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import FindTherapist from '../Pages/FindTherapist';
import About from '../Pages/About';

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/findyourtherapist" element={<FindTherapist />} />
        <Route path="/About" element={<About/>}></Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;
