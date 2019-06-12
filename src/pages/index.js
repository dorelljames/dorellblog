import React from "react"
import BottomMenu from "../components/BottomMenu/Index"
import { rhythm } from "../utils/typography"

const BlogPage = props => (
  <>
    <h1>
      <span style={{ display: `block` }}>Hi, I'm Dorell James!</span>
      <small style={{ fontSize: rhythm(0.5) }}>FULL STACK DEVELOPER</small>
      <small style={{ fontSize: rhythm(0.5) }}> &middot; </small>
      <small style={{ fontSize: rhythm(0.5) }}>CEBU, PHILIPPINES</small>
    </h1>
    <p>
      I write code that makes the world sing. I write songs of love and special
      things. I write the code that makes the young girls cry. I write the code,
      I write the code.
    </p>

    <h2>Talks & Workshops</h2>
    <p>I speak the truth</p>

    <h2>Play</h2>
    <p>I write useless things.</p>

    <h2>Get In Touch</h2>
    <p>
      Feel free to <a href="mailto:">ping me</a> or reach me through social
      media and let's make the Web more awesome!
    </p>

    <BottomMenu location={props.location} />
  </>
)

export default BlogPage
