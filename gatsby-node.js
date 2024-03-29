/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

 const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                layout
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(
            `./src/templates/${String(node.frontmatter.layout)}.jsx`
          ),
          context: {
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
    })
    if(node.frontmatter.layout === 'blog-post'){
  
      createNodeField({
        node,
        name: 'slug',
        value: `blog${slug}`,
      })
    }else{
        createNodeField({
          node,
          name: 'slug',
          value: `${slug}`,
        })
    }
  }
}