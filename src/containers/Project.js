import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ project }) => (
  <div className="row justify-content-center">
    <div className="col-sm-10">
      <Link to="/work/">{'<'} Back</Link>
      <br />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  </div>
))
