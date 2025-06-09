import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//componant css
import './style.css';

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
    <>
      <h2 className='text-center text-white'>Add New Service</h2>
      <div style={{ color: 'white' }} className="d-flex justify-content-center">

        <form onSubmit={handleSubmit} >
          <div className="m-3">
            <label className="form-label">Service Name</label>
            <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} required />
          </div>
          <div className="m-3">
            <label className="form-label">Price (₹)</label>
            <input type="number" className="form-control" value={price} onChange={e => setPrice(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-success m-3">Add Service</button>
        </form>
      </div>
    </>
  );
};

export default AddService;
