import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'

import './app.css'

const App = () => (
  <Router>
    <div className="container-fluid">
      <nav>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link exact to="/" className="nav-link active">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/work" className="nav-link">Work</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="row main-content">
        <div className="container">
          <Routes />
        </div>
      </div>
      <div className="row footer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-3 text-center">
              <p>COLUMN</p>
              <p>Content</p>
            </div>
            <div className="col-md-3 text-center">
              <p>COLUMN</p>
              <p>Content</p>
            </div>
            <div className="col-md-3 text-center">
              <p>COLUMN</p>
              <p>Content</p>
            </div>
          </div>
          <hr></hr>
          <div className="row justify-content-center">
            <p className="small">&copy; 2018 Owner of page</p>
          </div>
        </div>
      </div>
    </div>
  </Router>
)

export default hot(module)(App)
