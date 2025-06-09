import React from 'react';
import { Link } from 'react-router-dom';

const ServiceList = ({ services }) => {
  return (
    <div>
      <h2>Service List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Service Name</th>
            <th>Price (₹)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={service.id}>
              <td>{index + 1}</td>
              <td>{service.name}</td>
              <td>{service.price}</td>
              <td>
                <Link to={`/edit/${service.id}`} className="btn btn-sm btn-primary">Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceList;
