import React from 'react'

export default function IndexPage({ data }) {
  const post = data.markdownRemark

  return (
    <div id="home">
      {data.markdownRemark.frontmatter.headshots.map(image => {
        return (
          <div>
            <img key={image.path} src={image.path} alt="" />
          </div>
        )
      })}
    </div>
  )
}

export const query = graphql`
  query indexQuery {
    markdownRemark(frontmatter: { layout: { eq: "home" } }) {
      frontmatter {
        layout
        headshots {
          path
        }
      }
    }
  }
`
