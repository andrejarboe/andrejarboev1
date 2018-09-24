import React from 'react'
import Link from 'gatsby-link'
import { Location } from '@reach/router'

// import { Router, Link } from '@reach/router'

// import '../../layouts/main.css'

const Navbar = () => (
  <nav className="wrapper" id="Navbar">
    <div className="actor">
      <Link exact to="/">
        <h1>Andre Jarboe</h1>
      </Link>
    </div>
    <div className="social">
      <a href="https://www.instagram.com/andrejarboeii/" target="_blank">
        <i className="fab fa-instagram " />
      </a>
      <a href="https://www.facebook.com/andrejarboeii/" target="_blank">
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
    <ul>
      <li>
        <Link exact to="/" activeClassName="active">
          Home
        </Link>
      </li>

      <li>
        <Link to="/about" activeClassName="active">
          About
        </Link>
      </li>
      <li>
        <Link to="/resume" activeClassName="active">
          Resume
        </Link>
      </li>
      <li>
        <Link to="/blog" activeClassName="active">
          Blog
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navbar