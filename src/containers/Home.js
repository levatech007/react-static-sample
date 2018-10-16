import React from 'react'
import { withSiteData } from 'react-static'

export default withSiteData(() => (
  <div className="jumbotron">
  <div className="container">
    <h1 className="display-2">Hello World</h1>
    <hr></hr>
    <p className="lead">This is where introduction goes</p>
  </div>
</div>
))
