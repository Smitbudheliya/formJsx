import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Add() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    pass: '',
    courses: [],
    city: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setForm((prevForm) => {
        const updatedCourses = checked
          ? [...prevForm.courses, value]
          : prevForm.courses.filter((course) => course !== value);
        return { ...prevForm, courses: updatedCourses };
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem('bookings')) || [];
    const newBooking = {
      ...form,
      courses: form.courses.join(', '), // comma separated
      id: Date.now()
    };
    localStorage.setItem('bookings', JSON.stringify([...existing, newBooking]));
    navigate('/');
  };

  return (
    <div className="form-wrapper">
      <h3 className="mb-4 text-center text-white">Add Data</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            className="form-control"
            onChange={handleChange}
            required
            placeholder='Enter Name'
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            className="form-control"
            onChange={handleChange}
            required
            placeholder='Enter Email'
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="pass"
            value={form.pass}
            className="form-control"
            onChange={handleChange}
            required
            placeholder='Enter Password'
          />
        </div>

        <div className="mb-3">
          <label className="form-label d-block">Courses</label>
          <div className="form-check form-check-inline">
            <input
              type="checkbox"
              name="courses"
              value="C"
              onChange={handleChange}
              className="form-check-input"
              id="c"
            />
            <label htmlFor="c" className="form-check-label">C</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="checkbox"
              name="courses"
              value="C++"
              onChange={handleChange}
              className="form-check-input"
              id="cpp"
            />
            <label htmlFor="cpp" className="form-check-label">C++</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="checkbox"
              name="courses"
              value="Python"
              onChange={handleChange}
              className="form-check-input"
              id="python"
            />
            <label htmlFor="python" className="form-check-label">Python</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="checkbox"
              name="courses"
              value="JavaScript"
              onChange={handleChange}
              className="form-check-input"
              id="js"
            />
            <label htmlFor="js" className="form-check-label">JavaScript</label>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">City</label>
          <select
            name="city"
            value={form.city}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">--- Select City ---</option>
            <option value="Pune">Pune</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Surat">Surat</option>
            <option value="Bangalore">Bangalore</option>
          </select>
        </div>

        <button className="btn btn-primary w-100">Add Data</button>
      </form>
    </div>
  );
}

export default Add;
