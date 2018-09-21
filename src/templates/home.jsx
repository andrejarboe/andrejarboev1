import React from 'react'
import Link from 'gatsby-link'

// const IndexPage = ({data}) => (

//   <div id="home">
//     <div>
//       <img src="https://source.unsplash.com/user/erondu/900x1600" alt="" />
//     </div>
//     <div>
//       <img src="https://source.unsplash.com/user/erondu/901x1601" alt="" />
//     </div>
//     <div>
//       <img src="https://source.unsplash.com/user/erondu/902x1602" alt="" />
//     </div>
//   </div>
// )

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

// export default IndexPage

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
