import React from "react"
import { rhythm } from "../utils/typography"

import { Section, H1, P } from "../components/Animations"

const IndexPage = props => (
  <Section>
    <H1>
      <span style={{ display: `block` }}>Hi, I'm Dorell James!</span>
      <small style={{ fontSize: rhythm(0.5) }}>FULL STACK DEVELOPER</small>
      <small style={{ fontSize: rhythm(0.5) }}> &middot; </small>
      <small style={{ fontSize: rhythm(0.5) }}>CEBU, PHILIPPINES</small>
    </H1>
    <br />
    <P>
      I’m a web developer in Cebu City, PH passionately crafting valuable
      digital products.
    </P>
    <P>I am @dorelljames at </P>

    <h2>Talks & Workshops</h2>
    <P>I speak the truth</P>

    <h2>Play</h2>
    <P>I write useless things.</P>

    <h2>Get In Touch</h2>
    <P>
      Feel free to <a href="mailto:">ping me</a> or reach me through social
      media and let's make the Web more awesome!
    </P>
  </Section>
)

export default IndexPage
