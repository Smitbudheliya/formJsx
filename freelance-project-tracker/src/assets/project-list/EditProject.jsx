import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    const currentProject = projects.find((project) => project.id === parseInt(id));
    if (currentProject) {
      setProject(currentProject);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    const updatedProjects = projects.map((projectItem) =>
      projectItem.id === parseInt(id)
        ? { ...projectItem, ...project } // Update the project
        : projectItem
    );

    localStorage.setItem('projects', JSON.stringify(updatedProjects));

    navigate('/');
  };

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <h2>Edit Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Project Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={project.name}
            onChange={(e) => setProject({ ...project, name: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="client" className="form-label">Client Name</label>
          <input
            type="text"
            className="form-control"
            id="client"
            value={project.client}
            onChange={(e) => setProject({ ...project, client: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="deadline" className="form-label">Deadline</label>
          <input
            type="date"
            className="form-control"
            id="deadline"
            value={project.deadline}
            onChange={(e) => setProject({ ...project, deadline: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="paymentStatus" className="form-label">Payment Status</label>
          <select
            className="form-select"
            id="paymentStatus"
            value={project.paymentStatus}
            onChange={(e) => setProject({ ...project, paymentStatus: e.target.value })}
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProject;
