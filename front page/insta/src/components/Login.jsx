import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const existingUser = localStorage.getItem('user');
    if (existingUser) {
      setIsSignup(false);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const stored = JSON.parse(localStorage.getItem('user'));
    if (!stored || stored.username !== username || stored.password !== password) {
      alert('Invalid credentials.');
      return;
    }
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('currentUser', JSON.stringify({ username }));
    setIsLoggedIn(true);
    navigate('/');
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const existing = localStorage.getItem('user');
    if (existing) {
      alert('User already exists.');
      return;
    }
    localStorage.setItem('user', JSON.stringify({ username, password }));
    alert('Signup successful. You can log in now.');
    setIsSignup(false);
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h3>{isSignup ? 'Sign Up' : 'Login'}</h3>
      <form onSubmit={isSignup ? handleSignup : handleLogin}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          className="form-control mb-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btn btn-primary w-100" type="submit">
          {isSignup ? 'Sign Up' : 'Login'}
        </button>
      </form>
      {!localStorage.getItem('user') && (
        <button
          className="btn btn-link mt-2"
          onClick={() => setIsSignup(!isSignup)}
        >
          {isSignup ? 'Already have an account? Login' : 'New user? Sign up'}
        </button>
      )}
    </div>
  );
};

export default Login;
