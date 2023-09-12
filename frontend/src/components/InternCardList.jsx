import React, { useState, useEffect } from 'react';
import './InternCard.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faBuilding,
  faGenderless,
  faPhone,
  faUser,
  faAddressCard,
  faIdBadge,
  faFingerprint,
} from '@fortawesome/free-solid-svg-icons';

function InternCardList() {
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
    <div className="intern-card-list-container">
    {loading ? (
      <p>Loading...</p>
    ) : internData.length > 0 ? (
      internData.map((intern) => (
        <div className="intern-card" key={intern.userId}>
           <p className='id'>
            <FontAwesomeIcon icon={faAddressCard} className="icon-userid" />ID: {intern.userId}
          </p>
          <img src={intern.profileImage} alt={intern.name[0] + intern.name[1]} className="profile-image" />
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
);
}

export default InternCardList;
