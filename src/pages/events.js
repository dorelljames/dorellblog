import React from "react"
import SEO from "../components/SEO"
import { graphql } from "gatsby"
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

      <h1>
        Awesome Events <Emoji label="celebrate" symbol="🙌" />
      </h1>

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
        , and participated / organised in other events.
      </p>

      <p>
        Be really happy if you'd invite me in one of your events, please feel
        free to <a href="mailto: galangdj+events@gmail.com">reach out</a>.
      </p>

      <section style={{ marginTop: rhythm(3) }}>
        <h5
          style={{
            borderBottom: `2px solid #f0f0f0`,
            paddingBottom: `5px`,
            display: `inline-block`,
            color: `var(--textInteractive)`,
          }}
        >
          UPCOMING EVENTS
        </h5>
        <EventsList events={upcomingEvents} />
      </section>

      <section style={{ marginTop: rhythm(3) }}>
        <h5
          style={{
            borderBottom: `2px solid #f0f0f0`,
            paddingBottom: `5px`,
            display: `inline-block`,
            color: `var(--textInteractive)`,
          }}
        >
          PAST EVENTS
        </h5>
        <EventsList events={previousEvents} />
      </section>
    </>
  )
}

function EventsList({ events }) {
  return events.length > 0 ? (
    <ul style={{ listStyle: "none", marginTop: -40 }}>
      {events.map((event) => (
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
          <BlockContent
            blocks={event._rawDescription || []}
            serializers={serializers}
          />
        </li>
      ))}
    </ul>
  ) : (
    <div>
      <em>No upcoming events at the moment... </em>
      <Emoji symbol="😊" label="happy-face" />
    </div>
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
