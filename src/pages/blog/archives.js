import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../../components/Bio"
import SEO from "../../components/SEO"
import { formatDistanceToNow } from 'date-fns';
import { rhythm } from "../../utils/typography"
import { formatReadingTime } from "../../utils/helpers"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    // const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <>
        <SEO
          title="Archived Posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`, `archived`]}
        />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link
                  style={{ boxShadow: `none` }}
                  to={"/blog/archives" + node.fields.slug}
                >
                  {title}
                </Link>
              </h3>
              <small
                style={{
                  marginBottom: rhythm(1 / 4),
                  display: "inline-block",
                }}
              >
                {formatDistanceToNow(new Date(node.frontmatter.date), { addSuffix: true })}
              </small>{" "}
              &middot;{" "}
              <small>
                <em>{formatReadingTime(node.timeToRead)}</em>
              </small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          )
        })}

        <hr style={{ borderTop: `2px dotted var(--textInteractive)` }} />
        <p>
          It seems you have reached the end of all these blog archives. Didn't
          you find what you're looking for? Perhaps{" "}
          <Link to="/blog">try going to the latest blog posts</Link>.
        </p>
      </>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          categories: { ne: "Web Development" }
          draft: { ne: true }
        }
      }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date
            title
          }
        }
      }
    }
  }
`
