import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/Bio"
import SEO from "../components/SEO"
import moment from "moment"
import { rhythm } from "../utils/typography"
import { formatReadingTime } from "../utils/helpers"
import posed from "react-pose"

const List = posed.section({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 20, staggerDirection: -1 },
})

const Item = posed.div({
  enter: { x: 0, opacity: 1 },
  exit: { x: 100, opacity: 0 },
})

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    // const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />

        <List>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Item key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link
                    style={{ boxShadow: `none` }}
                    to={"blog" + node.fields.slug}
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
              </Item>
            )
          })}
        </List>
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
