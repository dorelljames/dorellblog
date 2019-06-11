import React from "react"
import BottomMenu from "../components/BottomMenu/About"

const EventsPage = props => (
  <>
    <p>
      I give talks and conduct workshops as a way to share back to the
      community. I've spoken at WordCamp, Facebook Dev Circles, and many more.
      If you'd like to invite me to give a talk or conduct a workshop at your
      event, please feel free to <a href="mailto:">get in touch</a>.
    </p>

    <h2>Upcoming Events</h2>
    <p>No upcoming events yet...</p>

    <h2>Previous Events</h2>
    <p>No previous events yet...</p>

    <BottomMenu location={props.location} />
  </>
)

export default EventsPage
