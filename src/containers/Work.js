
import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ projects }) => (
  <div className="row justify-content-center">
    <div className="col-sm-10">
      <h1>Work</h1>
      <br />
      All Projects:
      <ul>
        { projects.map(project => (
          <li key={project.id}>
            <Link to={`/work/project/${project.id}/`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
))
