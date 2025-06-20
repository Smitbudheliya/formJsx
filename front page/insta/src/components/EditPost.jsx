// EditPost.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditPost = ({ posts, onUpdate }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find(p => p.id === parseInt(id));

  const [form, setForm] = useState({ title: '', content: '', author: '' });

  useEffect(() => {
    if (post) {
      setForm({ title: post.title, content: post.content, author: post.author });
    }
  }, [post]);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      navigate('/login');
    }
  }, [navigate]);

  if (!post) return <h4>Post not found.</h4>;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = { ...post, ...form };
    onUpdate(updatedPost);
    navigate(`/post/${post.id}`);
  };

  return (
    <div>
      <h3>Edit Blog Post</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          className="form-control mb-2"
          type="text"
          name="author"
          placeholder="Author"
          value={form.author}
          onChange={handleChange}
          required
        />
        <textarea
          className="form-control mb-3"
          name="content"
          rows="5"
          placeholder="Content"
          value={form.content}
          onChange={handleChange}
          required
        />
        <button className="btn btn-primary">Update Post</button>
      </form>
    </div>
  );
};

export default EditPost;