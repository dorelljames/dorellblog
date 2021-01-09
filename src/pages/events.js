import React from "react"
import SEO from "../components/SEO"
import { Link, graphql } from "gatsby"
import Emoji from "../components/Emoji"
import { format } from "date-fns"
import { rhythm } from "../utils/typography"

const BlockContent = require("@sanity/block-content-to-react")
const { blockContentSerializers: serializers } = require("../utils/helpers.js")

const EventsPage = (props) => {
  const events = props.data.allSanityEvent.nodes
    .map((event) => {
      return { ...event, date: new Date(event.date) }
    })
    .sort((a, b) => b.date - a.date)

  const upcomingEvents = events.filter(
    (event) => new Date(event.date).getTime() > new Date().getTime()
  )
  const previousEvents = events.filter(
    (event) => new Date(event.date).getTime() < new Date().getTime()
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
      <ul style={{ listStyle: "none" }}>
        {upcomingEvents.length > 0 ? (
          upcomingEvents.map((event) => (
            <li key={event.name}>
              <h2
                style={{
                  display: `inline-block`,
                  marginRight: `10px`,
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <a href={event.link} target="_blank" rel="noopener noreferrer">
                  {event.name}
                </a>
              </h2>
              <small>{format(event.date, "MM/dd/yyyy")}</small>
              <p>
                <BlockContent
                  blocks={event._rawDescription || []}
                  serializers={serializers}
                />
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
      <ul style={{ listStyle: "none" }}>
        {previousEvents.length > 0 ? (
          previousEvents.map((event) => (
            <li key={event.name}>
              <h2
                style={{
                  display: `inline-block`,
                  marginRight: `10px`,
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <a href={event.link} target="_blank" rel="noopener noreferrer">
                  {event.name}
                </a>
              </h2>
              <br />
              <small
                style={{
                  marginBottom: rhythm(1 / 4),
                  display: "inline-block",
                }}
              >
                {format(event.date, "MM/dd/yyyy")}
              </small>
              <p>
                <BlockContent
                  blocks={event._rawDescription || []}
                  serializers={serializers}
                />
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

export const query = graphql`
  query EventsPageEventQuery {
    allSanityEvent {
      nodes {
        name
        _rawDescription
        link
        location
        date
      }
    }
  }
`
