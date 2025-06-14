import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// view css
import './view.css';

function View() {
  const [bookings, setBookings] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState('');
  const [filterCity, setFilterCity] = useState('');

  // Load data from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('bookings')) || [];
    console.log("Loaded bookings:", data); // Debug log
    setBookings(data);
    setFiltered(data);
  }, []);

  // Apply search, filter, and sort whenever any input changes
  useEffect(() => {
    let temp = [...bookings];

    // Search by name or email
    if (search) {
      temp = temp.filter(b =>
        b.name?.toLowerCase().includes(search.toLowerCase()) ||
        b.email?.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by city
    if (filterCity) {
      temp = temp.filter(b => b.city === filterCity);
    }

    // Sort by selected key
    if (sortKey) {
      temp.sort((a, b) =>
        (a[sortKey] || '').toString().localeCompare((b[sortKey] || '').toString())
      );
    }

    setFiltered(temp);
  }, [search, sortKey, filterCity, bookings]);

  // Delete handler (based on unique id)
  const handleDelete = (id) => {
    const updated = bookings.filter(b => b.id !== id);
    localStorage.setItem('bookings', JSON.stringify(updated));
    setBookings(updated);
  };

  // Get unique city names for dropdown
  const uniqueCities = [...new Set(bookings.map(b => b.city))];

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4 text-white">View Data</h3>

      <div className="mb-3 d-flex flex-wrap justify-content-between align-items-center">
        <input
          type="text"
          className="form-control mb-2 me-2 searchBar"
          placeholder="Search by name or email"
          style={{ maxWidth: '250px' , }}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <select
          className="form-select mb-2 me-2 searchBar"
          style={{ maxWidth: '200px' }}
          value={sortKey}
          onChange={e => setSortKey(e.target.value)}
        >
          <option value="">Sort by</option>
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="city">City</option>
        </select>

        <select
          className="form-select mb-2 searchBar"
          style={{ maxWidth: '200px' }}
          value={filterCity}
          onChange={e => setFilterCity(e.target.value)}
        >
          <option value="">Filter by City</option>
          {uniqueCities.map((city, i) => (
            <option key={i} value={city}>{city}</option>
          ))}
        </select>
      </div>

      <table className="table  table-hover">
        <thead className="table-dark ">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Courses</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length > 0 ? (
            filtered.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.city}</td>
                <td>
                  {item.courses.split(', ').map((course, index) => (
                    <span key={index} className="badge bg-success me-1">{course}</span>
                  ))}
                </td>
                <td>
                  <Link to={`/edit/${item.id}`} className="btn btn-sm btn-warning me-2">Edit</Link>
                  <button onClick={() => handleDelete(item.id)} className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">No data found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default View;
