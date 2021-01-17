import React from "react"

import SEO from "../components/SEO"

class NotFoundPage extends React.Component {
  render() {
    return (
      <div
        style={{
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          flexDirection: `column`,
          height: `100vh`,
        }}
      >
        <SEO title="404: Not Found" />
        <h1>Lost in cyberspace?</h1>
        <p>
          It looks like that page doesn't exist - please check the URL and try
          again.
        </p>
        <a href="/">Take Me Home</a>
      </div>
    )
  }
}

export default NotFoundPage
