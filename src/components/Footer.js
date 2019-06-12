import React from "react"
import { rhythm } from "../utils/typography"

function Footer() {
  return (
    <footer
      style={{
        fontSize: rhythm(0.5),
        marginTop: rhythm(3.5),
        bottom: 0,
        marginBottom: rhythm(0.5),
      }}
    >
      Copyright © {new Date().getFullYear()},
      <strong
        style={{
          fontFamily: `Varela Round, sans-serif`,
          marginLeft: `5px`,
        }}
      >
        d||ell
      </strong>
      . Built with
      {` `}
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.gatsbyjs.org"
      >
        Gatsby
      </a>
      . Source on{" "}
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/dorelljames/dorellblog"
      >
        GitHub
      </a>
    </footer>
  )
}

export default Footer
