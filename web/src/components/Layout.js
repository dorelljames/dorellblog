import React from "react"
import { Link } from "gatsby"
import LightDarkModeToggler from "./Toggler"
import { rhythm, scale } from "../utils/typography"
import NavBottomMenu from "../components/NavBottomMenu"
import { isPathBlogPost } from "../utils/helpers"
import Emoji from "../components/Emoji"

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
    this.handleResize = this.handleResize.bind(this)
    this.state = {
      lastScrollTop: 0,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
    window.addEventListener("resize", this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
    window.removeEventListener("resize", this.handleResize)
  }

  handleResize(event) {
    const bottomMenu = document.querySelector(".bottomMenu")
    const primaryMenu = document.querySelector(".primaryMenu")

    if (window && window.innerWidth <= 768) {
      bottomMenu?.classList?.add("show")
      bottomMenu?.classList?.remove("hidden")
      primaryMenu?.classList?.add("hidden")
      primaryMenu?.classList?.remove("show")
    } else {
      bottomMenu?.classList?.add("hidden")
      bottomMenu?.classList?.remove("show")
      primaryMenu?.classList?.add("show")
      primaryMenu?.classList?.remove("hidden")
    }
  }

  handleScroll(event) {
    if (window && window.innerWidth <= 768) {
      const bottomMenu = document.querySelector(".bottomMenu")

      var st = window.pageYOffset || document.documentElement.scrollTop // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      if (st > this.state.lastScrollTop) {
        bottomMenu?.classList?.add("hidden")
        bottomMenu?.classList?.remove("show")
      } else {
        bottomMenu?.classList?.add("show")
        bottomMenu?.classList?.remove("hidden")
      }

      this.setState({
        lastScrollTop: st <= 0 ? 0 : st, // For Mobile or negative scrolling
      })
    }
  }

  render() {
    // const { location, title, children } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`
    const { children, title, location, pageContext } = this.props
    const isBlogPost =
      !location.pathname.startsWith("/blog") && location.pathname !== "/blog"
    let header

    header = (
      <h1
        style={{
          ...scale(1.25),
          marginBottom: 0,
          marginTop: 0,
          fontFamily: "Varela Round",
        }}
        className="header"
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
            backgroundImage: `none`,
            fontFamily: "Varela Round",
          }}
          to={`/`}
        >
          {"d||ell" || title}
        </Link>
      </h1>
    )

    if (pageContext.layout === "404") {
      return <div>{children}</div>
    }

    return (
      <>
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
              justifyContent: !isBlogPost ? "space-around" : "space-between",
              alignItems: "center",
              marginBottom: rhythm(4.5),
            }}
          >
            <div>{header}</div>
            {isBlogPost && (
              <div style={{ display: `flex`, position: "relative" }}>
                <ul className="primaryMenu">
                  <li>
                    <Link to="/events">Events</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                </ul>

                <LightDarkModeToggler />
              </div>
            )}
          </header>
          {location.pathname === "/" && (
            <div style={{ marginTop: rhythm(4) }}>
              <h1>
                <span style={{ display: `block` }}>
                  Hi, I'm Dorell James! <Emoji symbol="👋" label="hand-wave" />
                </span>
              </h1>
            </div>
          )}

          <main>{children}</main>
          {/*<MessengerCustomerChat
            pageId="566722000166680"
            appId="1678638095724206"
          />*/}

          <footer
            style={{
              fontSize: rhythm(0.55),
              marginTop: rhythm(7),
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
            .
          </footer>
        </div>

        {!isPathBlogPost(location.pathname) && (
          <NavBottomMenu location={location} />
        )}

        <div className="cursor" id="cursor"></div>
        <div className="cursor2" id="cursor2"></div>
        <div className="cursor3" id="cursor3"></div>
      </>
    )
  }
}

export default Layout
