import React from 'react'
import Link from 'gatsby-link'

const BlogPage = ({ data }) => (
  <div>
    <h1>"Actors's Name" latest Blog Post</h1>
    {data.allMarkdownRemark.edges.map(post => {
      console.log(post)
      return (
        <div key={post.node.id}>
          <h3>{post.node.frontmatter.title}</h3>
          <p>{post.node.frontmatter.date}</p>
          <p>Id:</p>
          <p>{post.node.frontmatter.date}</p>
          <Link to={post.node.fields.slug}>Read More</Link>
          <br />
          <br />
          <hr />
        </div>
      )
    })}
  </div>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "blog-post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            layout
            path
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

export default BlogPage
