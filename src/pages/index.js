import React from "react"
import BottomMenu from "../components/BottomMenu/Index"

const IndexPage = props => (
  <>
    <h1>
      <span style={{ display: `block` }}>Hi, I'm Dorell James!</span>
    </h1>
    <p>I teach you the basics and make sure you succeed.</p>

    <h6
      style={{
        borderBottom: `1px solid #eee`,
        paddingBottom: `5px`,
        display: `inline-block`,
      }}
    >
      ABOUT ME
    </h6>
    <p>
      I'm a full stack developer, erm, your average guy that can do both
      frontend and backend? Hell, yeah! 😄
    </p>
    <p>
      I am also a lead / co-lead of different tech communities here in Cebu
      namely <a href="https://www.facebook.com/laravelcebu">Laravel Cebu</a>,{" "}
      <a href="https://www.facebook.com/reactcebu">React Cebu</a> and{" "}
      <a href="https://www.facebook.com/JavaScriptCebu">JavaScript Cebu</a>. I
      work together with these amazing peeps who relentlessly share their time
      towards bringing these events - meetups, workshops and more to the benefit
      of the community a reality. 💯
    </p>
    <p>If you ever see me, please say hi! 😊</p>

    <h6
      style={{
        borderBottom: `1px solid #eee`,
        paddingBottom: `5px`,
        display: `inline-block`,
      }}
    >
      TALKS & WORKSHOPS
    </h6>
    <p>
      I give talks and conduct workshops as a way to share back to the
      community, usually everything modern about web 'coz I f*ckN love it.
    </p>
    <p>Here's a list of my upcoming talks and workshops:</p>
    <ul>
      <li>
        <h3>Gatsby Workshop</h3>
        <p>Learn to build blazing fast websites and apps</p>
      </li>
    </ul>

    <h6
      style={{
        borderBottom: `1px solid #eee`,
        paddingBottom: `5px`,
        display: `inline-block`,
      }}
    >
      PLAYGROUND
    </h6>
    <p>
      Here are some useless things I've built. Who knows, it might be a treasure
      for you or anyone, right?
    </p>
    <ul>
      <li>
        <h3>
          <a
            href="https://wordpress.org/plugins/wp-messenger-customer-chat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            WordPress Messenger Customer Chat Plugin (WPMCCP)
          </a>
        </h3>
        <p>
          Integrate Facebook messenger experience directly into your WordPress
          site.
        </p>
      </li>
    </ul>

    <h6
      style={{
        borderBottom: `1px solid #eee`,
        paddingBottom: `5px`,
        display: `inline-block`,
      }}
    >
      GET IN TOUCH
    </h6>
    <p>
      Feel free to <a href="mailto:">ping me</a> or reach me through any channel
      below:
    </p>

    <BottomMenu location={props.location} />
  </>
)

export default IndexPage
