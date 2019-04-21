import React from "react"
import { Link } from "gatsby"
import LightDarkModeToggler from "./Toggler"
import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: 0,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
              backgroundImage: `none`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h2
          style={{
            marginTop: 0,
            boxShadow: `none`,
            textDecoration: `none`,
            backgroundImage: `none`,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h2>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: rhythm(1.5),
          }}
        >
          <div>{header}</div>
          <div style={{ position: "relative" }}>
            <LightDarkModeToggler />
          </div>
        </header>
        <main>{children}</main>
        <footer style={{ marginTop: `${rhythm(3.5)}` }}>
          Copyright © {new Date().getFullYear()}, <em>d||ell</em>. Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
