import React, { useState } from 'react';
import './Navstyle.css'; // Import your stylesheet
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faImages, faPaintBrush, faCar, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Icon from './internsync.png';
import './Land.css';
import InternAdd from './InternAdd';

function Admin() {
  // State to toggle the sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to set the active navigation link (you can implement your logic here)
  const setActiveNav = () => {
    // Implement your logic to set the active navigation link here
  };

  // Scroll to target element
  const scrollToTarget = (target) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle navigation click event
  const handleNavClick = (event, target) => {
    event.preventDefault();
    scrollToTarget(target);
    setActiveNav(); // Call setActiveNav to set the active link (implement your logic)
  };

  return (
    <div>
        <div className="navbar">
          <div className="navbar-left">
            <img src={Icon} alt="App Icon" className="navbar-logo" />
          </div>
          <div className="nav-center">ADD INTERN</div>
          <div className="navbar-right">
            <Link to="/myprofile" className="navbar-link">My Profile</Link>
            <Link to="/userintern" className="navbar-link">Interns</Link>
            <Link to="/" className="navbar-link">Logout</Link>
          </div>
        </div>
      <nav>
        <div className="dashboard-container">
          <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <div className="sidebar-header">
              <div id="sidebar-toggle" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faBars} />
              </div>
            </div>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/admin/profile" className="nav-link">
                  <FontAwesomeIcon icon={faUser} /> Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sessions" className="nav-link">
                  <FontAwesomeIcon icon={faImages} /> Sessions
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tasks" className="nav-link">
                  <FontAwesomeIcon icon={faPaintBrush} /> Tasks
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/feedback" className="nav-link">
                  <FontAwesomeIcon icon={faCar} /> Feedback
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <InternAdd/>
    </div>
  );
}

export default Admin;
