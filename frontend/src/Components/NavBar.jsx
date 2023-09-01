import React from 'react'
import { Link } from 'react-router-dom'
import MindMender from '../Media/MindMender.png';

function NavBar() {
  return (
    <div>
        <nav className='navbar'>
            <ul className='nav-items'>
                <img src={MindMender} alt="logo" className='img-logo'/>
              <Link to="/Home"><li className='item'> HOME </li></Link>
               <Link to='/About'> <li className='item'> ABOUT US  </li></Link>
               <Link to='/Contact'> <li className='item'> CONTACT US </li></Link>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar