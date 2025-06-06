import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simulate fetching from an API
    const fetchedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    setProjects(fetchedProjects);
  }, []);

  const deleteProject = (id) => {
    const filteredProjects = projects.filter((project) => project.id !== id);
    setProjects(filteredProjects);
    localStorage.setItem('projects', JSON.stringify(filteredProjects));
  };

  return (
    <div className="container mt-4">
      <h2>Project List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Client</th>
            <th>Deadline</th>
            <th>Payment Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>{project.client}</td>
              <td>{project.deadline}</td>
              <td>{project.paymentStatus}</td>
              <td>
                <Link to={`/edit/${project.id}`} className="btn btn-warning btn-sm">
                  Edit
                </Link>
                <button onClick={() => deleteProject(project.id)} className="btn btn-danger btn-sm ms-2">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectList;
