import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/Bio"
import SEO from "../components/SEO"
import moment from "moment"
import { rhythm, scale } from "../utils/typography"
import { formatReadingTime } from "../utils/helpers"
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
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          slug={slug}
        />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-2 / 5),
            color: `var(--textSecondary)`,
          }}
        >
          {moment(post.frontmatter.date).format("MMMM DD, YYYY")}
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

        <h2>Or, continue reading...</h2>
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
          <li>
            {previous && (
              <Link to={basePath + previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={basePath + next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
        <NavBottomMenu
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
      }
    }
  }
`
