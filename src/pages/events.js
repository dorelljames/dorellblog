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
        FB Dev Circles
      </a>
      , and many more. If you'd like to invite me to give a talk or conduct a
      workshop at your event, please feel free to{" "}
      <a href="mailto:">get in touch</a>.
    </p>

    <h2>Upcoming Events</h2>
    <p>No upcoming events yet...</p>

    <h2>Previous Events</h2>
    <p>No previous events yet...</p>

    <BottomMenu location={props.location} />
  </>
)

export default EventsPage
