// components/Profile.jsx
import React from 'react';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('currentUser'));

  return (
    <div>
      <h3>Your Profile</h3>
      <p><strong>Username:</strong> {user?.username}</p>
    </div>
  );
};

export default Profile;
