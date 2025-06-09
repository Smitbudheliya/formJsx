import './style.css';
import { Link } from 'react-router-dom';

const ServiceList = ({ services, setServices }) => {
  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this service?');
    if (confirmDelete) {
      const updated = services.filter((service) => service.id !== id);
      setServices(updated);
    }
  };

  return (
    <div>
      <h2 className="mb-4 text-center text-white">Service List</h2>
      <table border={0} className="table table-striped bg-dark">
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

                <Link to={`/edit/${service.id}`} className="btn btn-sm btn-primary me-2">
                  <i className="bi bi-pencil-square"></i>
                </Link>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(service.id)}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          ))}
          {services.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center text-muted">
                No services available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceList;
