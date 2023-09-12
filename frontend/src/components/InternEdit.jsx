import React, { useState, useEffect } from 'react';
import './InternEdit.css';
import axios from 'axios';
import './Navstyle.css'; // Import your stylesheet
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faImages, faPaintBrush, faCar, faBars, faArrowLeft,faHome } from '@fortawesome/free-solid-svg-icons';
import { Link,useNavigate } from 'react-router-dom';
import Icon from './internsync.png';
import './Land.css';
import InternAdd from './InternAdd';

function InternEdit() {
  const [internData, setInternData] = useState([]);
  const [editingIntern, setEditingIntern] = useState(null); // Store the intern being edited
  const [deletingIntern, setDeletingIntern] = useState(null); // Store the intern being deleted
  const [loading, setLoading] = useState(true);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  
    const history = useNavigate();

    const goBack=()=>{
      history('/admin');
    }

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

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/user');
      setInternData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch the intern data from your API
    // axios
    //   .get('http://localhost:8080/api/v1/user')
    //   .then((response) => {
    //     setInternData(response.data);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching data:', error);
    //     setLoading(false);
    //   });
      fetchData();
  }, []);

  const handleEditClick = (intern) => {
    history('/admin/profile/edit')
    setEditingIntern(intern);
  };

  const handleDeleteClick = (intern) => {
    setDeletingIntern(intern); // Set the intern to be deleted
  };

  const handleUpdate = (updatedIntern) => {
    // Update the intern data in the UI
    const updatedData = internData.map((intern) =>
      intern.userId === updatedIntern.userId ? updatedIntern : intern
    );
    setInternData(updatedData);
    setEditingIntern(null); // Clear the editing state

    // Update the intern data on the server
    axios
      .put(`http://localhost:8080/api/v1/user/update/${updatedIntern.userId}`, updatedIntern)
      .then((response) => {
        console.log('Intern updated successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error updating intern:', error);
      });
  };

  const handleDelete = () => {
    if (deletingIntern) {
      // Delete the intern data in the UI
      const updatedData = internData.filter(
        (intern) => intern.userId !== deletingIntern.userId
      );
      setInternData(updatedData);
      setDeletingIntern(null); // Clear the deleting state

      // Delete the intern on the server
      axios
        .delete(`http://localhost:8080/api/v1/user/delete/${deletingIntern.userId}`)
        .then((response) => {
          console.log('Intern deleted successfully:', response.data);
        })
        .catch((error) => {
          console.error('Error deleting intern:', error);
        });
    }
  };

  return (
    <>
      <div>
        <div className="navbar">
          <div className="navbar-left">
            <img src={Icon} alt="App Icon" className="navbar-logo" />
          </div>
          <div className="nav-center">Modify INTERN</div>
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
      <InternAdd/>
    </div>
      <div className="intern-edit-container">
      <div>
      <button onClick={() => goBack()} className="back-button">
        <FontAwesomeIcon icon={faArrowLeft} /> Go Back
      </button>
      </div>
        <h2 className='int-list-head'>Intern List</h2>
        {loading ? (
          <p>Loading...</p>
        ) : internData.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {internData.map((intern) => (
                <tr key={intern.userId}>
                  <td>{intern.name}</td>
                  <td>{intern.email}</td>
                  <td>{intern.department}</td>
                  <td>
                    <button onClick={() => handleEditClick(intern)}>
                      <i className="fas fa-edit"></i> Edit
                    </button>
                    <button onClick={() => handleDeleteClick(intern)}>
                      <i className="fas fa-trash"></i> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No data available.</p>
        )}

        {/* Edit Modal */}
        {editingIntern && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setEditingIntern(null)}>
                &times;
              </span>
              <h3>Edit Intern</h3>
              {/* Edit form can go here */}
              <button onClick={() => setEditingIntern(null)}>Cancel</button>
              <button onClick={() => handleUpdate(editingIntern)}>Save</button>
            </div>
          </div>
        )}

        {/* Delete Confirm Dialog */}
        {deletingIntern && (
          <div className="confirm-dialog">
            <div className="confirm-dialog-content">
              <p>Are you sure you want to delete {deletingIntern.name}?</p>
              <button onClick={handleDelete}>Yes</button>
              <button onClick={() => setDeletingIntern(null)}>No</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default InternEdit;
