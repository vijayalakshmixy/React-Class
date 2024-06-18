import React, { useState } from 'react';

function LoginModal({ setShowLogin, isSignUp, setIsSignUp }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login or sign-up logic here
    if (isSignUp) {
      // Sign-up logic
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      alert('Sign-up successful!');
    } else {
      // Login logic
      const storedUsername = localStorage.getItem('username');
      const storedPassword = localStorage.getItem('password');
      if (username === storedUsername && password === storedPassword) {
        alert('Login successful!');
      } else {
        alert('Invalid credentials!');
      }
    }
    setShowLogin(false);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => setShowLogin(false)}>&times;</span>
        <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            name:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
        </form>
        <button onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'Already have an account? Login' : 'Don\'t have an account? Sign Up'}
        </button>
      </div>
    </div>
  );
}

export default LoginModal;
