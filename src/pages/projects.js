import React from "react"
import Layout from "../components/Layout"
import BottomMenu from "../components/BottomMenu/Index"

const ProjectsPage = props => (
  <>
    <Layout location={props.location} title="Project Page">
      <p>Projects Page</p>
    </Layout>
    <BottomMenu />
  </>
)

export default ProjectsPage
