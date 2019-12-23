const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
  const createBlogPostsWithPagination = query => {
    return graphql(query).then(result => {
      if (result.errors) {
        throw result.errors
      }

      // Create blog posts pages.
      const posts = result.data.allMarkdownRemark.edges

      posts.forEach((post, index) => {
        const previous =
          index === posts.length - 1 ? null : posts[index + 1].node
        const next = index === 0 ? null : posts[index - 1].node

        createPage({
          path: "blog" + post.node.fields.slug,
          component: blogPostTemplate,
          context: {
            slug: post.node.fields.slug,
            categories: post.node.frontmatter.categories,
            previous,
            next,
          },
        })
      })

      return null
    })
  }

  const blogQuery = `
    {
      allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {categories: {eq: "Web Development"}, draft: {ne: true}}}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              categories
            }
          }
        }
      }
    }
  `

  const blogArchivesQuery = `
    {
      allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {categories: {ne: "Web Development"}, draft: {ne: true}}}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              categories
            }
          }
        }
      }
    }
  `

  return Promise.all([
    createBlogPostsWithPagination(blogQuery),
    createBlogPostsWithPagination(blogArchivesQuery),
  ])
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
