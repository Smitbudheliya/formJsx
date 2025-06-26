import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewPost = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;
    addPost({ title, content, category });
    navigate('/');
  };

  return (
    <div>
      <h3>Add New Post</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="form-control mb-2"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          className="form-control mb-2"
          placeholder="Category (optional)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button className="btn btn-success" type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default NewPost;
