import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Bio from "../../components/Bio"
import SEO from "../../components/SEO"
import { formatDistanceToNow } from "date-fns"
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
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
        <ul style={{ listStyle: `none`, marginLeft: 0 }}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <li key={node.fields.slug} style={{ marginBottom: rhythm(1.9) }}>
                <h2
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link
                    style={{ boxShadow: `none` }}
                    to={"/blog" + node.fields.slug}
                  >
                    {node.frontmatter.featured_image && (
                      <GatsbyImage
                        image={
                          node.frontmatter.featured_image.childImageSharp
                            .gatsbyImageData
                        }
                        alt={node.frontmatter.title}
                        style={{ marginBottom: `1em` }}
                      />
                    )}
                    {title}
                  </Link>
                </h2>
                <small
                  style={{
                    marginBottom: rhythm(1 / 4),
                    display: "inline-block",
                  }}
                >
                  {formatDistanceToNow(new Date(node.frontmatter.date), {
                    addSuffix: true,
                  })}
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
              </li>
            )
          })}
        </ul>
        <hr
          style={{
            borderTop: `1px dotted var(--textPrimary)`,
            marginTop: `5rem`,
          }}
        />
        <p>
          It seems you have reached the end and have gone through all the blog
          posts. Didn't you find what you're looking for? Perhaps{" "}
          <Link to="/blog/archives">try going to the archives</Link>.
        </p>
      </>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          categories: { eq: "Web Development" }
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
            description
            featured_image {
              childImageSharp {
                gatsbyImageData(
                  width: 913
                  placeholder: BLURRED
                  layout: CONSTRAINED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`
