import React from "react"
import Bio from "../components/Bio"
import Emoji from "../components/Emoji"
import SEO from "../components/SEO"

const IndexPage = props => (
  <>
    <SEO
      title="Full Stack Developer"
      description="Developer (Web & Software) in Cebu City, PH passionately crafting valuable digital products offering you the best that'll surely make you 100% satisfied."
    />
    <h1>
      <span style={{ display: `block` }}>Hi, I'm Dorell James!</span>
    </h1>
    <Bio heading="Full Stack Developer" subHeading="Cebu City, Philippines" />
    <p>
      Your average guy that can do both frontend and backend!{" "}
      <Emoji
        symbol="😅"
        label="grinning-face-with-squinting-eyes-and-sweat-drop"
      />
    </p>
    <p>
      I am also a lead / co-lead of different tech communities here in Cebu
      namely{" "}
      <a
        href="https://www.facebook.com/laravelcebu"
        target="_blank"
        rel="noopener noreferrer"
      >
        Laravel Cebu
      </a>
      ,{" "}
      <a
        href="https://www.facebook.com/reactcebu"
        target="_blank"
        rel="noopener noreferrer"
      >
        React Cebu
      </a>{" "}
      and{" "}
      <a
        href="https://www.facebook.com/JavaScriptCebu"
        target="_blank"
        rel="noopener noreferrer"
      >
        JavaScript Cebu
      </a>
      . I work together with these amazing peeps who relentlessly share their
      time towards bringing these events - meetups, workshops and more to the
      benefit of the community. 💯
    </p>
    <p>
      If you ever see me, please say hi!{" "}
      <Emoji symbol="😊" label="happy-face" />
    </p>

    <h4
      style={{
        borderBottom: `1px dotted var(--textInteractive)`,
        display: `inline-block`,
      }}
    >
      TALKS, WORKSHOPS & EVENTS
    </h4>
    <p>
      I give talks and conduct workshops as a way to share back to the
      community. If you also need something get organized, I'll gladly help.
    </p>
    <p>Here's a list of my upcoming talks / workshops:</p>
    <ul>
      <li>
        <h3 style={{ display: `inline-block`, marginRight: `10px` }}>
          <a
            href="https://www.facebook.com/events/505464013360120/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby Workshop
          </a>
        </h3>
        <small>10/12/2019</small>
        <p>
          <em>Learn to build blazing fast websites and apps</em>
        </p>
      </li>
    </ul>

    <h4
      style={{
        borderBottom: `1px dotted var(--textInteractive)`,
        display: `inline-block`,
      }}
    >
      PLAYGROUND
    </h4>
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
          <em>
            Integrate Facebook messenger experience directly into your WordPress
            site.
          </em>
        </p>
      </li>
    </ul>

    <h4
      style={{
        borderBottom: `1px dotted var(--textInteractive)`,
        display: `inline-block`,
      }}
    >
      GET IN TOUCH
    </h4>
    <p>
      Feel free to <a href="mailto:">ping me</a> or reach me through any channel
      below:
    </p>
  </>
)

export default IndexPage
