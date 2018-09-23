import React from 'react'

export default function IndexPage({ data }) {
  const post = data.markdownRemark

  return (
    <div id="home">
      {data.markdownRemark.frontmatter.images.map(image => {
        return(
        <div>
          <img key={image} src={image} alt="" />
        </div>
        )
      })}
    </div>
  )
}

export const query = graphql`
  query home2Query {
    markdownRemark(frontmatter: { layout: { eq: "home" } }) {
      frontmatter {
        layout
        images
      }
    }
  }
`
