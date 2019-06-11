import React from "react"
import BottomMenu from "../components/BottomMenu/Index"

const BlogPage = props => (
  <>
    <h1>Hi, I'm Dorell James</h1>
    <p>
      <span>Full Stack Developer</span>
    </p>

    <BottomMenu location={props.location} />
  </>
)

export default BlogPage
