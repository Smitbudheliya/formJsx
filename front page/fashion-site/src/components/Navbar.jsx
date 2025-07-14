// components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4 py-2">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold fs-3" href="#">
          Fae<span className="text-danger">chion</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ProductSection">Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ProductInfo">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-link text-dark fs-5 p-0">
              🔍
            </button>
            <button className="btn btn-link text-dark fs-5 p-0">
              🛒
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
