import React from 'react'
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className = "landing">
      <div className="dark-overlay">
        <div className = "landing-iner">
          <h1 className="x-large">Developer Connector
          </h1>
          <p className="lead">
            Create a developer profile/portfolio, share posts and get help from other developers  
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">Sign UP</Link>
            <Link to ="/login" className="btn btn-primary">login</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing