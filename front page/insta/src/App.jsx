// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import NewPost from './components/NewPost';
import EditPost from './components/EditPost';
import Login from './components/Login';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import postsData from './data/posts';

function App() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const isAdmin = currentUser?.username === 'admin';

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || postsData;
    setPosts(storedPosts);
  }, []);

  useEffect(() => {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
  }, [posts]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    setIsLoggedIn(false);
    window.location.href = '/login';
  };

  const addNewPost = (post) => {
    const newPosts = [
      ...posts,
      {
        ...post,
        id: posts.length + 1,
        likes: 0,
        comments: [],
        category: post.category || 'General'
      }
    ];
    setPosts(newPosts);
  };

  const updatePost = (updatedPost) => {
    const updatedPosts = posts.map((p) =>
      p.id === updatedPost.id ? updatedPost : p
    );
    setPosts(updatedPosts);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const likePost = (id) => {
    const updated = posts.map((post) =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updated);
  };

  const addComment = (id, comment) => {
    const updated = posts.map((post) =>
      post.id === id
        ? { ...post, comments: [...post.comments, comment] }
        : post
    );
    setPosts(updated);
  };

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === 'All' || post.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <BrowserRouter>
      <div className="container mt-4">
        {isLoggedIn && <Navbar handleLogout={handleLogout} />}

        {isLoggedIn && currentUser && (
          <div className="mb-3 text-start">
            <h5>
              Welcome,{' '}
              <span className="text-primary">{currentUser.username}</span> 👋
            </h5>
          </div>
        )}

        <Routes>
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Navigate to="/" replace />
              ) : (
                <Login setIsLoggedIn={setIsLoggedIn} />
              )
            }
          />
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <BlogList
                  posts={filteredPosts}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  setCategoryFilter={setCategoryFilter}
                />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/post/:id"
            element={
              isLoggedIn ? (
                <BlogPost
                  posts={posts}
                  onDelete={deletePost}
                  onLike={likePost}
                  onComment={addComment}
                  isAdmin={isAdmin}
                />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/new"
            element={
              isLoggedIn && isAdmin ? (
                <NewPost addPost={addNewPost} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/edit/:id"
            element={
              isLoggedIn && isAdmin ? (
                <EditPost posts={posts} onUpdate={updatePost} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/profile"
            element={
              isLoggedIn ? <Profile /> : <Navigate to="/login" replace />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
