import React from 'react';
import './Profile.css'
const Profile = ({isProfileOpen , toggleModal}) => {
  return (
    <div className="profile-modal">
      <img src="http://tachyons.io/img/logo.jpg" className="br-100 pa1 ba b--black-10 h3 w3" alt="avatar"/>
      <h1>User Name</h1>
      <h2>Submitted Images : Number</h2>
      <p>Joined : Date</p>
      <button onClick={toggleModal}>Click to Modal</button>
    </div>
  );
};

export default Profile;