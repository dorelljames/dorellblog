import React from "react"
import Emoji from "../components/Emoji"
import Seo from "../components/Seo"
import { StaticImage } from "gatsby-plugin-image"
import { rhythm } from "../utils/typography"

const IndexPage = (props) => {
  return (
    <>
      <Seo
        title="Full Stack Developer in Cebu City, Philippines"
        description="Developer (Web & Software) in Cebu City, PH passionately crafting valuable digital products offering you the best that'll surely make you 100% satisfied."
      />
      <div style={{ textAlign: "center" }}>
        <div style={{ marginTop: rhythm(-3) }}>
          <StaticImage src="../images/me.png" alt="Me" />
          <h1>
            <span style={{ display: `block` }}>
              Hi, I'm Dorell James! <Emoji symbol="👋" label="hand-wave" />
            </span>
          </h1>
        </div>
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
          relentlessly share and dedicate their time in bringing these awesome
          events (<em>meetups, workshops and more</em>) for the benefit of the
          community. 💯
        </p>
        <p>
          If we ever get the chance to meet, please say hi or{" "}
          <a href="mailto: galangdj+website@gmail.com">ping me laters!</a>
          <Emoji symbol="😊" label="happy-face" />
        </p>
      </div>
    </>
  )
}

export default IndexPage
