import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddService = ({ services, setServices }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newService = {
      id: services.length ? services[services.length - 1].id + 1 : 1,
      name,
      price: Number(price),
    };

    setServices([...services, newService]);
    navigate('/');
  };

  return (
    <div>
      <h2>Add New Service</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Service Name</label>
          <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Price (₹)</label>
          <input type="number" className="form-control" value={price} onChange={e => setPrice(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-success">Add Service</button>
      </form>
    </div>
  );
};

export default AddService;
