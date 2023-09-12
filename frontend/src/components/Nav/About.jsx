import React from 'react';
import '../Land.css';
import { Link } from 'react-router-dom';
import Icon from '../internsync.png';
function About() {
  const bg={
    backgroundColor:'grey',
    
  }
  return (
  <>
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <img src={Icon} alt="App Icon" className="navbar-logo" />
        </div>
        <div className="navbar-right">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/about" className="navbar-link">About</Link>
          <Link to="/login" className="navbar-link">Login</Link>
          <Link to="/signup" className="navbar-link">Signup</Link>
        </div>
      </nav>
    </div>
    <div className='wel-container' style={bg}>
      <h1 style={bg}>Welcome to InternSync!</h1>
      <p style={bg}>Empowering Your Summer Internship Experience.InternSync is your dedicated 
        hub for a seamless and enriching summer internship experience within our 
        organization.With carefully crafted features,InternSync simplifies 
        communication,scheduling,and collaboration to ensure you make the most of 
        your internship Together,we”ll make your internship journey not only productive but also 
        enjoyable and impactful.Begin Your internship.
      </p>
      <button type="button" className='button'>Getting Started!</button>
    </div>
  </>
  )
}

export default About;