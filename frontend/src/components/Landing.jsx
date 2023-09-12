import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './internsync.png';
import './Land.css';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const history = useNavigate();

  const handleOnClick=()=>{
    history('/userintern');
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
    <div className='wel-container'>
      <h1>Welcome to InternSync!</h1>
      <p>Empowering Your Summer Internship Experience.InternSync is your dedicated 
        hub for a seamless and enriching summer internship experience within our 
        organization.With carefully crafted features,InternSync simplifies 
        communication,scheduling,and collaboration to ensure you make the most of 
        your internship Together,we”ll make your internship journey not only productive but also 
        enjoyable and impactful.Begin Your internship.
      </p>
      <button type="button" className='button' onClick={handleOnClick}>Getting Started!</button>
    </div>
  </>
  );
}

export default Landing;
