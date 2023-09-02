import React from 'react'
import { Link } from 'react-router-dom'
import MindMender from '../Media/MindMender.png';

function NavBar() {
  return (
    <div>
        <nav className='navbar'>
            <ul className='nav-items'>
               <Link to="/"> <img src={MindMender} alt="logo" className='img-logo'/></Link>
              <Link to="/"><li className='item'> HOME </li></Link>
               <Link to='/About'> <li className='item'> ABOUT US  </li></Link>
               <Link to='/Contact'> <li className='item'> CONTACT US </li></Link>
              <Link to='/findyourTherapist'> <li className='item'> FIND A THERAPIST</li></Link>
              <Link to='/'> <li className='item'> MAGAZINE </li></Link>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar