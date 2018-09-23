import React from 'react'

export default function IndexPage({ data }) {
  const post = data.markdownRemark

  return (
    <div id="home">
      {console.log(data.markdownRemark.frontmatter.headshots[0].images)}
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
  query homeQuery {
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
