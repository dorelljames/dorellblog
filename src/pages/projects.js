import React from "react"
import BottomMenu from "../components/BottomMenu/Index"

const ProjectsPage = props => (
  <>
    <p>I write code and I write and write and write and write.</p>

    <h2>Recent Works</h2>
    <p>KAYU: Kitchen + Bar</p>

    <BottomMenu location={props.location} />
  </>
)

export default ProjectsPage
