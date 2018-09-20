import React from 'react';
import Link from 'gatsby-link';

 const Footer = () => (
    <footer>
      <ul>
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
    </footer>  
  )

  export default Footer
