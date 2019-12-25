import React from "react"
import { Link } from "gatsby"
import Emoji from "../components/Emoji"
import SEO from "../components/SEO"
import SocialMedia from "../components/SocialMedia"

import events from "../../content/events.json"

const IndexPage = props => {
  const upcomingEvents = events.data.filter(
    event => new Date(event.date).getTime() > new Date().getTime()
  )

  return (
    <>
      <SEO
        title="Full Stack Developer in Cebu City, Philippines"
        description="Developer (Web & Software) in Cebu City, PH passionately crafting valuable digital products offering you the best that'll surely make you 100% satisfied."
      />
      <p>
        Your average guy that can do both frontend and backend!{" "}
        <Emoji
          symbol="😅"
          label="grinning-face-with-squinting-eyes-and-sweat-drop"
        />
      </p>
      <p>
        I also lead / co-lead different tech communities here in Cebu namely{" "}
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
        . I work together with these ever so passionate and amazing people who
        relentlessly share and dedicate their time in bringing these events -
        meetups, workshops and more for the benefit of the community. 💯
      </p>
      <p>
        If we ever get the chance to meet, please say hi!{" "}
        <Emoji symbol="😊" label="happy-face" />
      </p>

      <h2
        style={{
          borderBottom: `1px dotted var(--textInteractive)`,
          display: `inline-block`,
        }}
      >
        Talks, Workshops & Events
      </h2>
      <p>
        I also give talks and conduct workshops as a way to share back to the
        community. You can also <Link to="/events">see all the events </Link>{" "}
        I've been into here.
      </p>

      {upcomingEvents.length > 0 ? (
        <ul>
          {upcomingEvents.map(event => (
            <li>
              <h3 style={{ display: `inline-block`, marginRight: `10px` }}>
                <a href={event.link} target="_blank" rel="noopener noreferrer">
                  {event.name}
                </a>
              </h3>
              <small>{event.date}</small>
              <p>
                <em>{event.description}</em>
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginLeft: `2.375rem` }}>
          <em>No upcoming events at the moment...</em>

          <Emoji symbol="😊" label="happy-face" />
        </p>
      )}

      <h2
        style={{
          borderBottom: `1px dotted var(--textInteractive)`,
          display: `inline-block`,
        }}
      >
        Playground
      </h2>
      <p>
        Here are some useless things I've built. Who knows, it might be a
        treasure for you or anyone, right?
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
              Integrate Facebook messenger experience directly into your
              WordPress site.
            </em>
          </p>
        </li>
      </ul>

      <div id="contact">
        <h2
          style={{
            borderBottom: `1px dotted var(--textInteractive)`,
            display: `inline-block`,
          }}
        >
          Get In Touch
        </h2>
        <p>
          Plese feel free to{" "}
          <a href="mailto: galangdj+website@gmail.com">ping me</a> anytime or
          reach me through any channel below:
        </p>
        <SocialMedia />
      </div>
    </>
  )
}

export default IndexPage
