import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/Bio"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import moment from "moment"
import { rhythm } from "../utils/typography"
import { formatReadingTime } from "../utils/helpers"
import BottomMenu from "../components/BottomMenu/Index"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <>
        <Layout location={this.props.location} title={siteTitle}>
          <SEO
            title="All posts"
            keywords={[`blog`, `gatsby`, `javascript`, `react`]}
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
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small
                  style={{
                    marginBottom: rhythm(1 / 4),
                    display: "inline-block",
                  }}
                >
                  {moment(node.frontmatter.date).fromNow()}
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
        </Layout>
        <BottomMenu location={this.props.location} />
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
      filter: { frontmatter: { draft: { ne: true } } }
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
