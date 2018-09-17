import React from 'react';
import Link from 'gatsby-link';

import './navbar.css'

 const Navbar = () => (
    <div style={{
        background: '#f4f4f4',
        paddingTop: '10px',
    }}>
    <div className="actor">
        <h1>Andre Jarboe</h1>
    </div>
    <div className="social">
    
    </div>
      <ul style={{
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'space-evenly'
      }}>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/resume">Resume</Link>
        </li>
        <li>
            <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  )

  export default Navbar
