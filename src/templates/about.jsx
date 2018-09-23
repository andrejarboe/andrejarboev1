import React from 'react'
import Link from 'gatsby-link'

export default function Template({ data }) {
  const about = data.markdownRemark

  return (
    <div>
      <Link to="/about">Back to Blog Post</Link>
      <hr />
      <h1>{about.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: about.html }} />
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
