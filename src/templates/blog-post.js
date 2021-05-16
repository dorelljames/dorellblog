import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/Bio"
import Seo from "../components/Seo"
import { rhythm, scale } from "../utils/typography"
import { formatReadingTime } from "../utils/helpers"
import { format } from "date-fns"
import NavBottomMenu from "../components/NavBottomMenu"
import Emoji from "../components/Emoji"
import { DiscussionEmbed } from "disqus-react"

class BlogPostTemplate extends React.Component {
  render() {
    const { markdownRemark: post, site } = this.props.data
    const { previous, next, slug, basePath } = this.props.pageContext

    const disqusShortname = process.env.GATSBY_DISQUS_NAME || `dorelljames-site`
    const disqusConfig = {
      url: `${site.siteMetadata.siteUrl}/blog${slug}`,
      identifier: slug,
      title: post.frontmatter.title,
    }

    return (
      <>
        <Seo
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          slug={slug}
          image={`${site.siteMetadata.siteUrl}${post.frontmatter?.featured_image?.publicURL}`}
        />
        <h1 style={{ marginBottom: rhythm(0.3) }}>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(2),
            marginTop: rhythm(-2 / 5),
            color: `var(--textSecondary)`,
          }}
        >
          {format(new Date(post.frontmatter.date), "MMMM dd, yyyy", {
            addSuffix: true,
          })}
          <span> &middot; </span>
          <em>{formatReadingTime(post.timeToRead)}</em>
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />

        <h2>
          Let me know your thoughts... <Emoji symbol="😊" label="happy-face" />
        </h2>
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />

        <h2 style={{ marginBottom: rhythm(1 / 3) }}>What's next?</h2>
        <p style={{ marginBottom: rhythm(2) }}>
          <em>Continue reading articles using the links below...</em>
        </p>
        <ul
          style={{
            display: `flex`, // @todo: hide when on mobile
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
            marginLeft: 0,
            marginTop: `1.565rem`,
          }}
        >
          <li style={{ width: `calc(48% - 15px)`, marginRight: `15px` }}>
            {previous && (
              <>
                <span
                  style={{
                    border: `1px solid var(--textInteractive)`,
                    padding: 8,
                    borderRadius: 5,
                    marginBottom: rhythm(1 / 2),
                    display: `inline-block`,
                    fontSize: rhythm(0.25),
                  }}
                >
                  YOU MIGHT ENJOY
                </span>
                <br />
                <Link to={`/${basePath}${previous.fields.slug}`} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              </>
            )}
          </li>
          <li style={{ width: `calc(48% - 15px)`, marginLeft: `15px` }}>
            {next && (
              <>
                <span
                  style={{
                    border: `1px solid var(--textInteractive)`,
                    padding: 8,
                    borderRadius: 5,
                    marginBottom: rhythm(1 / 2),
                    display: `inline-block`,
                    fontSize: rhythm(0.25),
                  }}
                >
                  RECOMMENDED FOR YOU
                </span>
                <br />
                <Link to={`/${basePath}${next.fields.slug}`} rel="next">
                  {next.frontmatter.title} →
                </Link>
              </>
            )}
          </li>
        </ul>
        <NavBottomMenu
          basePath={basePath}
          location={this.props.location}
          previous={previous}
          next={next}
        />
      </>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
        defaultImage
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      frontmatter {
        title
        date
        description
        featured_image {
          publicURL
        }
      }
    }
  }
`
