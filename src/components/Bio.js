/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { rhythm } from "../utils/typography"

function Bio(props) {
  console.log("🚀 ~ file: Bio.js ~ line 15 ~ Bio ~ props", props)
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const { author, social } = data.site.siteMetadata
        const authorImage = getImage(data.avatar)
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(1),
            }}
          >
            <GatsbyImage
              image={authorImage}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            {(props.heading && (
              <p>
                {props.heading}
                <br />
                {props.subHeading}
              </p>
            )) || (
              <p>
                Personal blog by{" "}
                <a href={social.twitter}>
                  <strong>{author}</strong>
                </a>
                <br />I love you and coding!
              </p>
            )}
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        gatsbyImageData(
          width: 75
          height: 75
          layout: FIXED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
