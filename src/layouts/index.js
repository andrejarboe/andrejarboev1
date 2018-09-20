import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import './main.css'

const Layout = ({ children, data }) => (
  <div className="App Site">
    <div className="Site-content">
      <div className="App-header">
        {/* <Header /> */}
        <Helmet>
          <script
            defer
            src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
            integrity="sha384-kW+oWsYx3YpxvjtZjFXqazFpA7UP/MbiY4jvs+RWZo2+N94PFZ36T6TFkc9O3qoB"
            crossorigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat|Roboto:100"
            rel="stylesheet"
          />
        </Helmet>
        <Navbar />
      </div>
      <div className="main">
        {children()}
      </div>
    </div>
    <Footer />
  </div>
)

// Layout.propTypes = {
//   children: PropTypes.func,
// }
export default Layout
