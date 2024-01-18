import React, { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
    return(
      <div className='Header'>
        <div className='NavItems'>
          <ul> 
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Signup"><li>SignUp</li></Link></li>
            <li><Link to="/login"><li>Login</li></Link></li>
            <li><Link to="/about"><li>About</li></Link></li>
          </ul>
        </div>
      </div>
    )
  }
export default Header;