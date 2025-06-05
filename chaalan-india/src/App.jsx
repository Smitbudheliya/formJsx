import React, { useState } from 'react';
import './App.css';
import ChallanForm from './assets/component/ChallanForm';
import ChallanResult from './assets/component/ChallanResult';
//bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  const [challans, setChallans] = useState([]); // use array instead of single challan

  const handleChallanSubmit = (data) => {
    setChallans((prevChallans) => [...prevChallans, data]); // append new challan
  };

  return (
    <>

      <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand fw-bold d-flex align-items-center fs-4" href="#">
            <span style={{ color: "#0d6efd" }}>J</span>
            <span style={{ color: "#fd7e14" }}>d</span>
            <span className="ms-1 text-dark">Omni</span>
          </a>

          {/* Toggle for small screens */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-4">
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">Themes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">Showcase</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">Support</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">Log In</a>
              </li>
            </ul>

            {/* Sign Up Button */}
            <button className="btn btn-primary rounded-pill px-4 fw-semibold">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
      <div className="form-bg" style={{ padding: '20px', width: '100%' }}>
        <div className="row d-flex justify-content-center">
          <div className="col-md-8">
            <ChallanForm onSubmit={handleChallanSubmit} />
          </div>
        </div>
      </div>


      {challans.length > 0 && (
        <div>
          {challans.map((challan, index) => (
            <ChallanResult
              key={index}
              vehicleNumber={challan.vehicleNumber}
              violationType={challan.violationType}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default App;
