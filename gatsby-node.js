const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  // Redirects from old website URLS
  createRedirect({
    fromPath: "/personal/*",
    toPath: "/blog/archives/:splat",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/search-engine-optimization/*",
    toPath: "/blog/archives/:splat",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/web-development/*",
    toPath: "/blog/:splat",
    isPermanent: true,
  })

  // Fixes files that were from old WP sites
  createRedirect({
    fromPath: "https://www.dorelljames.com/wp-content/*",
    toPath: "http://archive.dorelljames.com/wp-content/:splat",
    isPermanent: false,
    force: true,
  })

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

        const basePath = post.node.frontmatter.categories.includes(
          "Web Development"
        )
          ? "blog"
          : "blog/archives"
        const path = `${basePath}${post.node.fields.slug}`

        createPage({
          path,
          component: blogPostTemplate,
          context: {
            basePath,
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
