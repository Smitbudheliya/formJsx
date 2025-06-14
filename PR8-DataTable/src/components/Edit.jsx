import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    pass: '',
    courses: [],
    city: ''
  });

  useEffect(() => {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const booking = bookings.find(b => b.id === parseInt(id));
    if (booking) {
      setForm({
        ...booking,
        courses: booking.courses?.split(', ') || [] // Convert comma string to array
      });
    }
  }, [id]);

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
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const updatedBooking = { ...form, courses: form.courses.join(', ') };
    const updated = bookings.map(b => b.id === parseInt(id) ? updatedBooking : b);
    localStorage.setItem('bookings', JSON.stringify(updated));
    navigate('/');
  };

  return (
    <div className="form-wrapper">
      <h3 className="mb-4 text-center">Edit Data</h3>

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
          />
        </div>

        <div className="mb-3">
          <label className="form-label d-block">Courses</label>
          {['C', 'C++', 'Python', 'JavaScript'].map(course => (
            <div key={course} className="form-check form-check-inline">
              <input
                type="checkbox"
                name="courses"
                value={course}
                checked={form.courses.includes(course)}
                onChange={handleChange}
                className="form-check-input"
                id={course}
              />
              <label htmlFor={course} className="form-check-label">{course}</label>
            </div>
          ))}
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

        <button className="btn btn-primary w-100">
          Update Data
        </button>
      </form>
    </div>
  );
}

export default Edit;
