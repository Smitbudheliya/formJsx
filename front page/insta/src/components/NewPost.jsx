import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewPost = ({ addPost }) => {
  const [form, setForm] = useState({ title: '', content: '', author: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date().toISOString().split('T')[0];
    addPost({ ...form, date });
    navigate('/');
  };

  return (
    <div>
      <h3>Add New Blog Post</h3>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" type="text" name="title" placeholder="Title" onChange={handleChange} required />
        <input className="form-control mb-2" type="text" name="author" placeholder="Author" onChange={handleChange} required />
        <textarea className="form-control mb-3" name="content" rows="5" placeholder="Content" onChange={handleChange} required />
        <button className="btn btn-primary">Post</button>
      </form>
    </div>
  );
};

export default NewPost;
