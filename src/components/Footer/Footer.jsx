import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
  <footer>
    <div className="container">
      <section className="footer-info">
        <h3>Andre Jarboe</h3>
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
          <a href="https://www.jarboestudios.com/" target="_blank">
            <h3>Designed and coded by Jarboe Studios</h3>
          </a>
        </div>
      </section>
      <ul className="site-map">
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
    <section className="copyright">
        <p>	&copy; 2018 Andre Jarboe</p>
    </section>
  </footer>
)

export default Footer
