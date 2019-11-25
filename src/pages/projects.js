import React from "react"
import SEO from "../components/SEO"
import Emoji from "../components/Emoji"

import projects from "../../content/projects.json"

const ProjectsPage = props => (
  <>
    <SEO title="Projects" />

    <p>
      I most probably wrote a bunch but below's most probably the one's I didn't
      screwed up so much. <Emoji symbol="😅" label="grinning-face" />
    </p>

    <ul>
      {projects.data.map(project => (
        <li>
          <h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          </h3>
          <p>
            <em>{project.description}</em>
          </p>
        </li>
      ))}
    </ul>
  </>
)

export default ProjectsPage
