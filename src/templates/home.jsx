import React from 'react'

export default function IndexPage({ data }) {
  const post = data.markdownRemark

  return (
    <div id="home">
      <div>
        <img src={post.frontmatter.img1} alt="" />
      </div>
      <div>
        <img src={post.frontmatter.img2} alt="" />
      </div>
      <div>
        <img src={post.frontmatter.img3} alt="" />
      </div>
    </div>
  )
}

export const query = graphql`
  query homeQuery {
    markdownRemark(frontmatter: { layout: { eq: "home" } }) {
      frontmatter {
        layout
        img1
        img2
        img3
      }
    }
  }
`
