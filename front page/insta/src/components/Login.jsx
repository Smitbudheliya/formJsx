// Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const usersJSON = localStorage.getItem('users');
    if (!usersJSON) {
      alert('No users found. Please sign up first.');
      return;
    }

    const users = JSON.parse(usersJSON);
    const matchedUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (matchedUser) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('currentUser', JSON.stringify(matchedUser));
      navigate('/');
    } else {
      alert('Invalid username or password.');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const usersJSON = localStorage.getItem('users');
    const users = usersJSON ? JSON.parse(usersJSON) : [];

    const userExists = users.some((user) => user.username === username);
    if (userExists) {
      alert('Username already exists. Please choose another one.');
      return;
    }

    const newUser = { username, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Signup successful! You can now log in.');
    setIsSignup(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h3 className="mb-3">{isSignup ? 'Sign Up' : 'Login'}</h3>
      <form onSubmit={isSignup ? handleSignup : handleLogin}>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btn btn-primary w-100">
          {isSignup ? 'Sign Up' : 'Login'}
        </button>
      </form>
      <button
        className="btn btn-link mt-3"
        onClick={() => setIsSignup(!isSignup)}
      >
        {isSignup
          ? 'Already have an account? Login'
          : "Don't have an account? Sign Up"}
      </button>
    </div>
  );
};

export default Login;
