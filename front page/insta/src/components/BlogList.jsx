// BlogList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ posts, searchTerm, setSearchTerm }) => {
  return (
    <div>
      <h2>📱 Instagram Algorithm Blog</h2>
      <Link to="/new" className="btn btn-success mb-3">➕ Add New Post</Link>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        posts.map(post => (
          <div className="card mb-3" key={post.id}>
            <div className="card-body">
              <h4>{post.title}</h4>
              <p>By {post.author} on {post.date}</p>
              <Link to={`/post/${post.id}`} className="btn btn-primary">Read More</Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;