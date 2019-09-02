import React from "react"
import SEO from "../components/SEO"

const EventsPage = props => (
  <>
    <SEO title="Tech Events in Cebu" description="" />

    <p>
      Aside from organizing events, I also give talks and conduct workshops as a
      way to share back to the community. I've spoken at{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://2019.cebu.wordcamp.org/speakers/#wcorg-speaker-dorell-james-galang"
      >
        WordCamp Cebu
      </a>
      ,{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/events/270482970543471/"
      >
        Facebook Developer Circle goes to Cebu
      </a>
      , and many more. If you'd like to invite me to give a talk or conduct a
      workshop at your event, please feel free to{" "}
      <a href="mailto:">get in touch</a>.
    </p>

    <h6
      style={{
        borderBottom: `2px solid #f0f0f0`,
        paddingBottom: `5px`,
        display: `inline-block`,
      }}
    >
      UPCOMING EVENTS
    </h6>
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

    <h6
      style={{
        borderBottom: `2px solid #f0f0f0`,
        paddingBottom: `5px`,
        display: `inline-block`,
      }}
    >
      PREVIOUS EVENTS
    </h6>
    <p>No previous events yet...</p>
  </>
)

export default EventsPage
