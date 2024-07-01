


import React, { useState } from 'react';
import './LoginForm.css'; // Importing the CSS file

const LoginForm = ({ setShowLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLogin) {
      // Handle login logic here
      console.log('Logging in with:', email, password);
      // Add login validation logic if needed
    } else {
      // Handle signup logic here
      console.log('Signing up with:', name, email, password);
      localStorage.setItem('user', JSON.stringify({ name, email, password }));
      alert('You registered successfully!');
    }
    setShowLogin(false);
  };

  return (
    <div className="login-form-container">
      <div className="login-form">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <p onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Create an account' : 'Already have an account? Login here'}
        </p>
        <button onClick={() => setShowLogin(false)}>Close</button>
      </div>
    </div>
  );
};

export default LoginForm;
