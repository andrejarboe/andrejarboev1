// import React from 'react'
// import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'

// import Header from '../components/header'
// import Navbar from '../components/Navbar/Navbar'

// const Layout = ({ children, data }) => (
//   <div>

//       {/* {console.log("****************")}
//       {console.log({data})}
//       {console.log("****************")} */}

//     <Helmet
//       title={data.site.siteMetadata.title}
//       meta={[
//         { name: 'description', content: 'Sample' },
//         { name: 'keywords', content: 'sample, something' },
//       ]}
//     />
//     <Header siteTitle={data.site.siteMetadata.title} />
//     <Navbar/>
//     <div
//       style={{
//         margin: '0 auto',
//         maxWidth: 960,
//         padding: '0px 1.0875rem 1.45rem',
//         paddingTop: 0,
//       }}
//     >
//       {children()}
//     </div>
//   </div>
// )

// Layout.propTypes = {
//   children: PropTypes.func,
// }

// export default Layout

// export const query = graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
// ************************************************************************************************
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// import Header from '../components/Header/Header';
// import {Main} from './components/Main';

import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import './main.css'
import './index.css'

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
        </Helmet>
        <Navbar />
      </div>
      <div className="main">
        {/* <Main /> */}
        {children()}
      </div>
    </div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}
export default Layout
