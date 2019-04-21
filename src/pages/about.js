import React from "react"
import Layout from "../components/Layout"
import BottomMenu from "../components/BottomMenu/About"

const AboutPage = props => (
  <>
    <Layout location={props.location} title="About Page">
      <p>About Page</p>
    </Layout>
    <BottomMenu />
  </>
)

export default AboutPage
