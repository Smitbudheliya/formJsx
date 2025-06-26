import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ posts, searchTerm, setSearchTerm, setCategoryFilter }) => {
  const categories = ['All', ...new Set(posts.map((post) => post.category))];

  return (
    <div>
      <div className="mb-3 d-flex gap-2">
        <input
          type="text"
          className="form-control"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="form-select"
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="card mb-3">
            <div className="card-body">
              <h4>{post.title}</h4>
              <p className="text-muted">by {post.author || 'Unknown'}</p>
              <p>{post.content.substring(0, 100)}...</p>
              <p>
                <strong>Category:</strong> {post.category || 'General'}
              </p>
              <Link className="btn btn-sm btn-outline-primary" to={`/post/${post.id}`}>
                Read More
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;
