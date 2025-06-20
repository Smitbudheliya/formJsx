// BlogPost.jsx
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const BlogPost = ({ posts, onDelete }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) return <h4>Post not found.</h4>;

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      onDelete(post.id);
      navigate('/');
    }
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <p><strong>By:</strong> {post.author} | <strong>Date:</strong> {post.date}</p>
      <p>{post.content}</p>
      <div className="d-flex gap-2">
        <Link to={`/edit/${post.id}`} className="btn btn-warning">Edit</Link>
        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
        <Link to="/" className="btn btn-secondary">← Back to Blog</Link>
      </div>
    </div>
  );
};

export default BlogPost;