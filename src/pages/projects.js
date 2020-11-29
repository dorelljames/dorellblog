import React from "react"
import SEO from "../components/SEO"
import Emoji from "../components/Emoji"
import { graphql } from "gatsby"

const BlockContent = require("@sanity/block-content-to-react")
const { blockContentSerializers: serializers } = require("../utils/helpers.js")

const ProjectsPage = props => {
  console.log("props", props)
  const projects = props.data.allSanityProject.nodes
  console.log("projects", projects)

  // return null

  return (
    <>
      <SEO title="Projects" />

      <p>
        I most probably wrote a bunch but below's most probably the one's I
        didn't screwed up so much. <Emoji symbol="😅" label="grinning-face" />
      </p>

      <ul>
        {projects.map(project => (
          <li>
            <h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </h3>
            <p>
              <BlockContent
                blocks={project.body || []}
                serializers={serializers}
              />
            </p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ProjectsPage

export const query = graphql`
  query ProjectsQuery {
    allSanityProject {
      nodes {
        title
        link
      }
    }
  }
`
