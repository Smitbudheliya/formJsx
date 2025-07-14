// ReservationForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeReservation } from '../redux/action/hotelActions.js';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    roomId: '',
    name: '',
    checkIn: '',
    checkOut: ''
  });

  const dispatch = useDispatch();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(makeReservation(formData));
    setFormData({ roomId: '', name: '', checkIn: '', checkOut: '' });
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Make a Reservation</h3>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Room ID</label>
          <input
            type="text"
            name="roomId"
            className="form-control"
            value={formData.roomId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Your Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Check-in Date</label>
          <input
            type="date"
            name="checkIn"
            className="form-control"
            value={formData.checkIn}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Check-out Date</label>
          <input
            type="date"
            name="checkOut"
            className="form-control"
            value={formData.checkOut}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-success w-100">
            Submit Reservation
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;