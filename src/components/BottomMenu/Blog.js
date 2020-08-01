import React from "react"
import { Link } from "gatsby"

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

const BottomMenuBlog = props => {
  const { previous, next } = props

  return (
    <ul className="bottomMenu" style={{ alignItems: "baseline" }}>
      <li>
        {(previous && (
          <Link to={"/blog" + previous.fields.slug} rel="prev">
            <p>← Prev</p>
            <small>{previous.frontmatter.title}</small>
          </Link>
        )) || <HomeLink />}
      </li>
      <li>
        {(next && (
          <Link to={"/blog" + next.fields.slug} rel="next">
            <p>Next →</p>
            <small>{next.frontmatter.title} </small>
          </Link>
        )) || <HomeLink />}
      </li>
    </ul>
  )
}

export default BottomMenuBlog
