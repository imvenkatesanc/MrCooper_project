import React, { useState } from 'react';
import axios from 'axios';
import './UpdateUserForm.css';
import './Navstyle.css'; // Import your stylesheet
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faImages, faPaintBrush, faCar, faBars,faArrowLeft,faHome } from '@fortawesome/free-solid-svg-icons';
import { Link,useNavigate } from 'react-router-dom';
import Icon from './internsync.png';

function UpdateUserForm() {
  const [userData, setUserData] = useState({
    userId: 2,
    name: 'Sivaram Shabari',
    email: 'sivaram@mrc.com',
    phone: 1234567890,
    gender: 'MALE',
    department: 'Software Engineer I',
    address: 'Chennai',
    profileImage: 'https://media.licdn.com/dms/image/C4D03AQG424SVHMeNXg/profile-displayphoto-shrink_800_800/0/1617816374547?e=2147483647&v=beta&t=kwXy5bPv5LPmRzJaciYI86aJR8kSSrICAIu7v7tMbfg',
    orgId: 1,
    internId: '',
    role: 'ORGANIZER',
  });
  const history = useNavigate();

  const goBack=()=>{
    history('/admin/profile');
  }
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
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  }

  const handleUpdateUser = () => {
    const { userId, ...dataToSend } = userData;

    const apiUrl = `http://localhost:8080/api/v1/user/update/${userId}`;

    axios.put(apiUrl, dataToSend, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response) => {
      // Handle the success response (you can add code here if needed)
      console.log("User updated successfully:", response.data);
      setSuccessMessage("User updated successfully!");
      setErrorMessage(null);
    })
    .catch((error) => {
      // Handle errors (you can add code here if needed)
      console.error("Error updating user:", error);
      setErrorMessage("Error updating user: " + error.message);
      setSuccessMessage(null);
    });
  }

  return (
    <div>
      <div className="navbar">
        <div className="navbar-left">
          <img src={Icon} alt="App Icon" className="navbar-logo" />
        </div>
        <div className="nav-center">Update User</div>
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
                <Link to="/admin" className="nav-link">
                  <FontAwesomeIcon icon={faHome} /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/profile" className="nav-link">
                  <FontAwesomeIcon icon={faUser} /> Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/sessions" className="nav-link">
                  <FontAwesomeIcon icon={faImages} /> Sessions
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/tasks" className="nav-link">
                  <FontAwesomeIcon icon={faPaintBrush} /> Tasks
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/feedback" className="nav-link">
                  <FontAwesomeIcon icon={faCar} /> Feedback
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='form-cont'>
      <div>
      <button onClick={() => goBack()} className="back-button">
        <FontAwesomeIcon icon={faArrowLeft} /> Go Back
      </button>
      </div>
        <h2>Update User</h2>
        {errorMessage && <div className="error" >{errorMessage}</div>}
        {successMessage && <div className="success">{successMessage}</div>}
        <form>
          <div>
            <label>User ID:</label>
            <input
              type="text"
              name="userId"
              value={userData.userId || ''}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={userData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Gender:</label>
            <input
              type="text"
              name="gender"
              value={userData.gender}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Department:</label>
            <input
              type="text"
              name="department"
              value={userData.department}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={userData.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Profile Image URL:</label>
            <input
              type="text"
              name="profileImage"
              value={userData.profileImage}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Organizer ID:</label>
            <input
              type="text"
              name="orgId"
              value={userData.orgId || ''}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Intern ID:</label>
            <input
              type="text"
              name="internId"
              value={userData.internId || ''}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Role:</label>
            <input
              type="text"
              name="role"
              value={userData.role || ''}
              onChange={handleInputChange}
            />
          </div>
          <button type="button" className='update-btn' onClick={handleUpdateUser}>
            Update User
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUserForm;
