import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProject = () => {
  const [name, setName] = useState('');
  const [client, setClient] = useState('');
  const [deadline, setDeadline] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('Pending');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      id: Date.now(),
      name,
      client,
      deadline,
      paymentStatus,
    };

    const existingProjects = JSON.parse(localStorage.getItem('projects')) || [];
    existingProjects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(existingProjects));

    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h2>Add New Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Project Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="client" className="form-label">Client Name</label>
          <input
            type="text"
            className="form-control"
            id="client"
            value={client}
            onChange={(e) => setClient(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="deadline" className="form-label">Deadline</label>
          <input
            type="date"
            className="form-control"
            id="deadline"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="paymentStatus" className="form-label">Payment Status</label>
          <select
            className="form-select"
            id="paymentStatus"
            value={paymentStatus}
            onChange={(e) => setPaymentStatus(e.target.value)}
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Save Project</button>
      </form>
    </div>
  );
};

export default AddProject;
