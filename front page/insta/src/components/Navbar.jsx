import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ handleLogout }) => {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  const isAdmin = user?.username === 'admin';

  return (
    <nav className="d-flex justify-content-between align-items-center mb-4">
      <div>
        <Link className="btn btn-outline-primary me-2" to="/">Home</Link>
        <Link className="btn btn-outline-secondary me-2" to="/profile">Profile</Link>
        {isAdmin && (
          <Link className="btn btn-outline-success" to="/new">Add Post</Link>
        )}
      </div>
      <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
