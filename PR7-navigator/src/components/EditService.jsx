import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditService = ({ services, setServices }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState({ name: '', price: '' });

  useEffect(() => {
    const existing = services.find(s => s.id === parseInt(id));
    if (existing) {
      setService({ name: existing.name, price: existing.price });
    }
  }, [id, services]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setService(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedServiceList = services.map(s =>
      s.id === parseInt(id) ? { ...s, name: service.name, price: Number(service.price) } : s
    );

    setServices(updatedServiceList);
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Service</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Service Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={service.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price (₹)</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={service.price}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-warning">Update</button>
      </form>
    </div>
  );
};

export default EditService;
