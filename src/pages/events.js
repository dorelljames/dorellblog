import React from "react"
import SEO from "../components/SEO"
import { Link } from "gatsby"
import Emoji from "../components/Emoji"

import events from "../../content/events.json"

const EventsPage = props => {
  const upcomingEvents = events.data.filter(
    event => new Date(event.date).getTime() > new Date().getTime()
  )
  const previousEvents = events.data.filter(
    event => new Date(event.date).getTime() < new Date().getTime()
  )

  return (
    <>
      <SEO title="Tech Events in Cebu" description="" />

      <p>
        Aside from organizing events, I also give talks and conduct workshops as
        a way to share back to the community. I've spoken at{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://2019.cebu.wordcamp.org/speakers/#wcorg-speaker-dorell-james-galang"
        >
          WordCamp Cebu
        </a>
        , did a workshop at{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/events/270482970543471/"
        >
          Facebook Developer Circle event
        </a>
        , and participated / organised in other events. If you'd like to invite
        me to give a talk or conduct a workshop at your event, please feel free
        to <Link to="/#contact">get in touch</Link>.
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
        {upcomingEvents.length > 0 ? (
          upcomingEvents.map(event => (
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
          ))
        ) : (
          <React.Fragment>
            <em>No upcoming events at the moment... </em>
            <Emoji symbol="😊" label="happy-face" />
          </React.Fragment>
        )}
      </ul>

      <h6
        style={{
          borderBottom: `2px solid #f0f0f0`,
          paddingBottom: `5px`,
          display: `inline-block`,
        }}
      >
        PAST EVENTS
      </h6>
      <ul>
        {previousEvents.length > 0 ? (
          previousEvents.map(event => (
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
          ))
        ) : (
          <em>No previous events found...</em>
        )}
      </ul>
    </>
  )
}

export default EventsPage
