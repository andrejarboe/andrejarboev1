import React from 'react'
import Link from 'gatsby-link'

// import '../../layouts/main.css'
import './navbar.css'

const Navbar = () => (
  <nav  className="wrapper" id="Navbar">
    <div className="actor">
      <h1>Andre Jarboe</h1>
    </div>
    <div className="social">
    <a href="https://www.instagram.com/andrejarboeii/" target="_blank">
      <i className="fab fa-instagram " />
    </a>
    <a href="https://www.facebook.com/Andre-Jarboe-2074125976194302/" target="_blank">
      <i className="fab fa-facebook " />
    </a>
    <a href="https://www.instagram.com/andrejarboeii/" target="_blank">
      <i className="fab fa-twitter " />
    </a>
    <a href="https://www.instagram.com/andrejarboeii/" target="_blank">
    <i className="fab fa-imdb" />
    </a>
    <a href="https://www.instagram.com/andrejarboeii/" target="_blank">
      <i className="fab fa-youtube " />
    </a>
    <a href="https://www.instagram.com/andrejarboeii/" target="_blank">
      <i className="fab fa-instagram " />
    </a>
    </div>
    <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
    >
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
  </nav>
)

export default Navbar
