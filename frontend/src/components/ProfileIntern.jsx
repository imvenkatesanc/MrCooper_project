import React, { useState, useEffect } from 'react';
import './Navstyle.css'; // Import your stylesheet
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faImages, faPaintBrush, faCar, faBars} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Icon from './internsync.png';
import './Land.css';
import axios from 'axios';
import {
    faEnvelope,
    faBuilding,
    faGenderless,
    faPhone,
    faAddressCard,
    faHome,
    faFingerprint
  } from '@fortawesome/free-solid-svg-icons';

function ProfileIntern() {
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

    const [internData, setInternData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      axios
        .get('http://localhost:8080/api/v1/user')
        .then((response) => {
          if (response.status === 200) {
            setInternData(response.data);
          } else {
            console.error('HTTP error in the GET request:', response.status);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error in the GET request:', error);
          setLoading(false);
        });
    }, []);

  return (
    <div>
        <div className="navbar">
          <div className="navbar-left">
            <img src={Icon} alt="App Icon" className="navbar-logo" />
          </div>
          <div className="nav-center">INTERN Profile's</div>
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
                <Link to="/userintern" className="nav-link">
                  <FontAwesomeIcon icon={faHome} /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/userintern/profile" className="nav-link">
                  <FontAwesomeIcon icon={faUser} /> Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/userintern/sessions" className="nav-link">
                  <FontAwesomeIcon icon={faImages} /> Sessions
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/userintern/tasks" className="nav-link">
                  <FontAwesomeIcon icon={faPaintBrush} /> Tasks
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/userintern/feedback" className="nav-link">
                  <FontAwesomeIcon icon={faCar} /> Feedback
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="intern-card-list-container">
      {loading ? (
    <p>Loading...</p>
  ) : internData.length > 0 ? (
    internData
      .filter((intern) => intern.role === "INTERN") // Filter only interns
      .map((intern) => (
        <div className="intern-card" key={intern.userId}>
          <img src={intern.profileImage} alt={intern.name[0] + intern.name[1]} className="profile-image" />
          <p className='id'>
            <FontAwesomeIcon icon={faAddressCard} className="icon-id" /> ID: {intern.userId}
          </p>
          <h2>{intern.name}</h2>
          <hr />
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="icon-email" /> {intern.email}
          </p>
          <p>
            <FontAwesomeIcon icon={faBuilding} className="icon-department" /> {intern.department}
          </p>
          <p>
            <FontAwesomeIcon icon={faGenderless} className="icon-gender" /> Gender: {intern.gender}
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} className="icon-phone" /> {intern.phone}
          </p>
          <p>
          <FontAwesomeIcon icon={faFingerprint}  className="icon-id" /> {intern.role}: {intern.internId!=null?intern.internId:intern.orgId}
          </p>
          <p>
            <FontAwesomeIcon icon={faAddressCard} className="icon-address" /> {intern.address}
          </p>
        </div>
      ))
    ) : (
      <p>No data available.</p>
    )}
  </div>
    </div>
  );
}

export default ProfileIntern;
