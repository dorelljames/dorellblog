const escapeStringRegexp = require("escape-string-regexp")
const pagePath = `content`
const indexName = `siteData`

// @todo: In https://www.gatsbyjs.com/docs/adding-search-with-algolia/ revisit escape-string-regexp and see what's wrong that it doesn't work on our setup
const pageQuery = `{
  pages: allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          title
          categories
        }
        fields {
          slug
        }
        excerpt(pruneLength: 5000)
        rawMarkdownBody
      }
    }
  }
}`
function pageToAlgoliaRecord({ node: { id, frontmatter, fields, ...rest } }) {
  return {
    objectID: id,
    ...frontmatter,
    ...fields,
    ...rest,
  }
}
const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]
module.exports = queries
