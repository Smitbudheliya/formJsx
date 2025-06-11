//4
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteService } from '../redux/action/serviceActions';
import { Link } from 'react-router-dom';

const ServiceList = () => {
  const services = useSelector(state => state.services);
  const dispatch = useDispatch();

  return (
    <div className="container mt-4">
      <h2>Service List</h2>
      <Link to="/add" className="btn btn-primary mb-3">Add Service</Link>
      <table className="table table-bordered">
        <thead>
          <tr><th>Name</th><th>Description</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {services.map(service => (
            <tr key={service.id}>
              <td>{service.name}</td>
              <td>{service.description}</td>
              <td>
                <Link to={`/edit/${service.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                <button onClick={() => dispatch(deleteService(service.id))} className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceList;
