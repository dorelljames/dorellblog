import React from "react"
import { Link } from "gatsby"
import { isPathBlogPost } from "../utils/helpers"

const HomeLink = props => (
  <Link to="/">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={`var(--textInteractive)`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-home"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
    <span>Home</span>
  </Link>
)

const NavBottomMenu = props => {
  if (isPathBlogPost(props.location.pathname)) {
    const { previous, next } = props

    return (
      <ul className="bottomMenu" style={{ alignItems: "baseline" }}>
        <li>
          {(previous && (
            <Link to={"blog" + previous.fields.slug} rel="prev">
              <p style={{ marginBottom: `0` }}>← Prev</p>
              <small>{previous.frontmatter.title}</small>
            </Link>
          )) || <HomeLink />}
        </li>
        <li>
          {(next && (
            <Link to={"blog" + next.fields.slug} rel="next">
              <p style={{ marginBottom: `0` }}>Next →</p>
              <small>{next.frontmatter.title} </small>
            </Link>
          )) || <HomeLink />}
        </li>
      </ul>
    )
  } else {
    return (
      <ul className="bottomMenu">
        <li>
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke={
                props.location.pathname === "/"
                  ? `var(--textPrimary)`
                  : `var(--textInteractive)`
              }
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-home"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke={
                props.location.pathname === "/projects"
                  ? `var(--textPrimary)`
                  : `var(--textInteractive)`
              }
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-folder"
            >
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </svg>
            <span>Projects</span>
          </Link>
        </li>
        <li>
          <Link to="/events">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-calendar"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>Events</span>
          </Link>
        </li>
        <li>
          <Link to="/blog">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke={
                props.location.pathname === "/blog"
                  ? `var(--textPrimary)`
                  : `var(--textInteractive)`
              }
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-book-open"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            <span>Blog</span>
          </Link>
        </li>
      </ul>
    )
  }
}

export default NavBottomMenu
