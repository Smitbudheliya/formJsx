import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav style={{width:1680}} className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">Service Manager</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add">Add Service</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
