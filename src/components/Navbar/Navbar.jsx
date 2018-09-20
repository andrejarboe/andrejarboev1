import React from 'react'
import Link from 'gatsby-link'
import { Location } from '@reach/router'

// import { Router, Link } from '@reach/router'

// import '../../layouts/main.css'
import './navbar.css'

const Navbar = () => (
      <Location>
        {({ location }) => (
  <nav className="wrapper" id="Navbar">
    <div className="actor">
      <h1>Andre Jarboe</h1>
    </div>
    <div className="social">
      <a href="https://www.instagram.com/andrejarboeii/" target="_blank">
        <i className="fab fa-instagram " />
      </a>
      <a
        href="https://www.facebook.com/Andre-Jarboe-2074125976194302/"
        target="_blank"
      >
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
      {/* {pathname()} */}
      {/* {console.log("***********")}
      {console.log(apple)}
    {console.log("*****")} */}

          {/* <h1>
            HI
            {location.pathname}
          </h1> */}


      <li className={location.pathname === '/' ? 'active' : ''}>
        <Link to="/">Home</Link>
      </li>

      <li className={location.pathname === '/about' ? 'active' : ''}>
        <Link to="/about">About</Link>
      </li>
      <li className={location.pathname === '/resume' ? 'active' : ''}>
        <Link to="/resume">Resume</Link>
      </li>
      <li className={location.pathname === '/blog' ? 'active' : ''}>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  </nav>
)}
</Location>
)

export default Navbar

function pathname() {
  return (
    <Location>
      {({ location }) => {
        const apple = location.pathname
        console.log(apple)
      }}
    </Location>
  )
}
