import React, { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import NewPost from './components/NewPost';
import postsData from './data/posts';
import Login from './components/Login';


function App() {
  const [posts, setPosts] = useState(postsData);

  const addNewPost = (post) => {
    setPosts([...posts, { ...post, id: posts.length + 1 }]);
  };

  return (
    <BrowserRouter>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<BlogList posts={posts} />} />
          <Route path="/post/:id" element={<BlogPost posts={posts} />} />
          <Route path="/new" element={<NewPost addPost={addNewPost} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
