import React from "react"
import Seo from "../components/Seo"
import Emoji from "../components/Emoji"
import { graphql } from "gatsby"

const BlockContent = require("@sanity/block-content-to-react")
const { blockContentSerializers: serializers } = require("../utils/helpers.js")

const ProjectsPage = (props) => {
  const projects = props.data.allSanityProject.nodes

  return (
    <>
      <Seo title="Projects" />

      <p>
        I most probably wrote a bunch but below's most probably the one's I
        didn't screwed up so much. <Emoji symbol="😅" label="grinning-face" />
      </p>

      <ul style={{ listStyle: "none" }}>
        {projects.map((project) => (
          <li key={project._id}>
            <h2>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </h2>
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
        _id
        title
        link
      }
    }
  }
`
