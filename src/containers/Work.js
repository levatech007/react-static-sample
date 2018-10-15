
import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ posts }) => (
  <div>
    <h1>Work</h1>
    <br />
    All Projects:
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Link to={`/work/project/${post.id}/`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  </div>
))
