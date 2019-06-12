import React from "react"
import { Link } from "gatsby"
import LightDarkModeToggler from "./Toggler"
import { rhythm, scale } from "../utils/typography"
import MessengerCustomerChat from "react-messenger-customer-chat"
import BottomMenu from "../components/BottomMenu/Index"
import Footer from "./Footer"
import posed, { PoseGroup } from "react-pose"

// const Transition = posed.div({
//   enter: { opacity: 1, delay: 300, beforeChildren: true },
//   exit: { opacity: 0 },
// })

const Transition = posed.div()

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
    const { children, title, location } = this.props
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
            // location && location.pathname.includes("/blog")
            //   ? rhythm(24)
            //   : rhythm(60),
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
          <PoseGroup>
            <Transition key={location && location.key}>
              <main>{children}</main>
              <Footer />
            </Transition>
          </PoseGroup>
        </div>

        <BottomMenu location={location} />
        <MessengerCustomerChat
          pageId="566722000166680"
          appId="1678638095724206"
        />
      </>
    )
  }
}

export default Layout
