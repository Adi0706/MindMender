import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import FindTherapist from '../Pages/FindTherapist';

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/About' element={<About/>}></Route>
            <Route path='/Contact' element={<Contact/>}></Route>
            <Route path='/findyourtherapist' element={<FindTherapist/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes