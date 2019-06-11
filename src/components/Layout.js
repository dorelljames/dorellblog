import React from "react"
import { Link } from "gatsby"
import LightDarkModeToggler from "./Toggler"
import { rhythm, scale } from "../utils/typography"
import MessengerCustomerChat from "react-messenger-customer-chat"

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
      bottomMenu.classList.add("show")
      bottomMenu.classList.remove("hidden")
      primaryMenu.classList.add("hidden")
      primaryMenu.classList.remove("show")
    } else {
      bottomMenu.classList.add("hidden")
      bottomMenu.classList.remove("show")
      primaryMenu.classList.add("show")
      primaryMenu.classList.remove("hidden")
    }
  }

  handleScroll(event) {
    if (window && window.innerWidth <= 768) {
      const bottomMenu = document.querySelector(".bottomMenu")

      var st = window.pageYOffset || document.documentElement.scrollTop // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      if (st > this.state.lastScrollTop) {
        bottomMenu.classList.add("hidden")
        bottomMenu.classList.remove("show")
      } else {
        bottomMenu.classList.add("show")
        bottomMenu.classList.remove("hidden")
      }

      this.setState({
        lastScrollTop: st <= 0 ? 0 : st, // For Mobile or negative scrolling
      })
    }
  }

  render() {
    // const { location, title, children } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`
    const { children, title } = this.props
    let header

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
          {"d||ell" || title}
        </Link>
      </h1>
    )

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
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: rhythm(1.5),
            }}
          >
            <div style={{ display: `flex` }}>
              {header}
              <ul className="primaryMenu">
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/events">Events</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>
            <div style={{ position: "relative" }}>
              <LightDarkModeToggler />
            </div>
          </header>
          <main>{children}</main>
          <MessengerCustomerChat
            pageId="566722000166680"
            appId="1678638095724206"
          />
          <footer
            style={{
              fontSize: rhythm(0.5),
              marginTop: rhythm(3.5),
              position: `fixed`,
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
            <a href="https://www.gatsbyjs.org">Gatsby</a>. Source on{" "}
            <a href="https://github.com">GitHub</a>
          </footer>
        </div>
      </>
    )
  }
}

export default Layout
