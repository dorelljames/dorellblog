import React from "react"
import BottomMenu from "../components/BottomMenu/About"

const EventsPage = props => (
  <>
    <p>
      I give talks and conduct workshops as a way to share back to the
      community. I've spoken at{" "}
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
        Facebook Developer Circle
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
    <p>No upcoming events yet...</p>

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

    <BottomMenu location={props.location} />
  </>
)

export default EventsPage
