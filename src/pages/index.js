import React from "react"
import { rhythm } from "../utils/typography"

import { Section, H1, P } from "../components/Animations"

const IndexPage = props => (
  <>
    <h1>
      <span style={{ display: `block` }}>Hi, I'm Dorell James!</span>
      <small style={{ fontSize: rhythm(0.5) }}>FULL STACK DEVELOPER</small>
      <small style={{ fontSize: rhythm(0.5) }}> &middot; </small>
      <small style={{ fontSize: rhythm(0.5) }}>CEBU, PHILIPPINES</small>
    </h1>
    <br />
    <p>
      I’m a web developer in Cebu City, PH passionately crafting valuable
      digital products.
    </p>
    <p>I am @dorelljames at </p>

    <h2>Talks & Workshops</h2>
    <p>I speak the truth</p>

    <h2>Play</h2>
    <p>I write useless things.</p>

    <h2>Get In Touch</h2>
    <p>
      Feel free to <a href="mailto:">ping me</a> or reach me through social
      media and let's make the Web more awesome!
    </p>
  </>
)

export default IndexPage
