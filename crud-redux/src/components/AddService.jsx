//5
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addService } from '../redux/action/serviceActions';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const AddService = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addService({ id: uuid(), name, description }));
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h2>Add Service</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
        <textarea className="form-control mb-2" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
        <button className="btn btn-success">Add</button>
      </form>
    </div>
  );
};

export default AddService;
