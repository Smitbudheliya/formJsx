import React from 'react';
import './Structure.css';
import a from '../assets/download (1).jpg'
import b from '../assets/download (2).jpg'
import c from '../assets/download (3).jpg'
import d from '../assets/4b10d753992203499eb54519e91c4806.jpg'
import e from '../assets/executive_room.jpg'


const Structure = () => {
  return (
    <>
      <div className="rooms ">
        {/* Hero Section */}
        <div className="container-fluid m-0 p-0">
          <div className="banner position-relative text-white">
            <img
              src={d}
              alt="banne"
              className="img-fluid w-100"
              style={{ height: '100vh', objectFit: 'cover' }}
            />
            <div className="banner-text position-absolute top-50 start-50 translate-middle text-center px-3">
              <h1 className="display-4 fw-bold">Welcome to Smit's Hotel</h1>
              <p className="lead">Book your dream stay with us</p>
              <button className="btn btn-light mt-3">Explore Rooms</button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="container py-5" id="about">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>About Our Hotel</h2>
              <p>
                We offer luxury and comfort in the heart of the city. Our hotel is known for warm hospitality,
                elegant rooms, and world-class services.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={e}
                className="img-fluid rounded"
                alt="about"
              />
            </div>
          </div>
        </div>

        {/* Rooms Section */}
        <div className="container py-5 bg-light" id="rooms">
          <h2 className="text-center mb-4">Our Rooms</h2>
          <div className="row">
            {[a, b, c].map(i => (
              <div className="col-md-4 mb-4" key={i}>
                <div className="card h-100 shadow">
                  <img
                    src={[i]} height={"235"}
                    className="card-img-top"
                    alt="room"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Deluxe Room </h5>
                    <p className="card-text">Comfortable room with all modern amenities starting from ₹2999/night.</p>
                    <a href="/reserve" className="btn btn-primary w-100">Book Now</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="container py-5" id="services">
          <h2 className="text-center mb-4">Our Services</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <i className="bi bi-wifi fs-1 text-primary"></i>
              <h5 className="mt-3">Free WiFi</h5>
              <p>Enjoy unlimited high-speed internet in all areas.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="bi bi-cup-hot fs-1 text-success"></i>
              <h5 className="mt-3">Complimentary Breakfast</h5>
              <p>Start your day with a delicious buffet breakfast.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="bi bi-car-front fs-1 text-warning"></i>
              <h5 className="mt-3">Free Parking</h5>
              <p>Spacious, secure parking available for all guests.</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="container-fluid py-5 bg-light" id="contact">
          <h2 className="text-center mb-4">Contact Us</h2>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>
            <div className="col-12">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="3" placeholder="Write your message"></textarea>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-dark w-100">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Structure;
