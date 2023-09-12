import React, { useState, useEffect } from 'react';
import './InternAdd.css';
import axios from 'axios';

function InternAdd() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    department: '',
    address: '',
    profileImage:'',
    orgId: '',
    internId: '', 
    role: '',
  });
  const [loading, setLoading] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the form is submitted

    axios
      .post('http://localhost:8080/api/v1/user/add', formData)
      .then((response) => {
        if (response.status === 201) {
          setFormData({ // Clear the form after successful submission
            name: '',
            email: '',
            phone: '',
            gender: '',
            department: '',
            address: '',
            profileImage:'',
            orgId: '',
            internId: '',
            role: '',
          });
          console.log('Data added successfully:', response.data);
        } else {
          console.error('HTTP error in the POST request:', response.status);
        }
        setLoading(false); // Set loading back to false after the request is complete
      })
      .catch((error) => {
        console.error('Error in the POST request:', error);
        setLoading(false); // Set loading back to false after the request is complete
      });
  };

  return (
    <div className="intern-add-form">
      <h2>ADD NEW INTERN</h2>
      <div className='add-icon'> <i className="fas fa-plus"></i></div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Intern ID:</label>
          <input type="text" name="internId" value={formData.internId} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>If You Organizer? ID:</label>
          <input type="text" name="orgId" value={formData.orgId} onChange={handleChange}  />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <input type="text" name="gender" value={formData.gender} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Department:</label>
          <input type="text" name="department" value={formData.department} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Profile URL:</label>
          <input type="text" name="profileImage" value={formData.profileImage} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Role:</label>
          <input type="text" name="role" value={formData.role} onChange={handleChange} required />
        </div>
     
        <button type="submit">Submit</button>
      </form>
      {loading && <p>Loading...</p>} {/* Show loading message when loading is true */}
    </div>
  );
}

export default InternAdd;
