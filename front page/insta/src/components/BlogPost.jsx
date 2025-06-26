import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BlogPost = ({ posts, onDelete, onLike, onComment, isAdmin }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === parseInt(id));
  const [comment, setComment] = useState('');

  if (!post) return <p>Post not found.</p>;

  const handleComment = () => {
    if (comment.trim()) {
      onComment(post.id, comment.trim());
      setComment('');
    }
  };

  return (
    <div>
      <h3>{post.title}</h3>
      <p><strong>Author:</strong> {post.author || 'Unknown'}</p>
      <p>{post.content}</p>
      <p><strong>Category:</strong> {post.category}</p>
      <p>👍 {post.likes}</p>
      <button className="btn btn-outline-success me-2" onClick={() => onLike(post.id)}>Like</button>
      {isAdmin && (
        <>
          <button className="btn btn-outline-warning me-2" onClick={() => navigate(`/edit/${post.id}`)}>Edit</button>
          <button className="btn btn-outline-danger" onClick={() => {
            if (window.confirm('Delete this post?')) {
              onDelete(post.id);
              navigate('/');
            }
          }}>Delete</button>
        </>
      )}
      <hr />
      <h5>Comments</h5>
      <ul>
        {post.comments.map((c, i) => <li key={i}>{c}</li>)}
      </ul>
      <div className="d-flex mt-2">
        <input
          className="form-control me-2"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <button className="btn btn-primary" onClick={handleComment}>Post</button>
      </div>
    </div>
  );
};

export default BlogPost;
