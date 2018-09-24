import React from 'react'
import Headshot1 from '../../static/assets/headshot1.jpg'

export default function Template({ data }) {
  const about = data.markdownRemark

  return (
    <div id="about">
      <div className="container">
        <div className="headshot">
          <img src={Headshot1} alt="" />
        </div>
        <div className="content">
          <h1>{about.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: about.html }} />
          <a href="/resume" className="btn">See Resume</a>
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query aboutQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
