import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const move = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if(password === 'sollamaten'){
        localStorage.setItem('vanakamdamaapla','true');
        localStorage.setItem('user',email)
        move('/LandingPage');
    }else{
        alert('password venuma....athan passwordnu sollamaten ... "sollamaten" ithan password!');
    }
  };

  return (
    <>
    <h2 style={{ textAlign: 'center' }}>Sign in to have a smile :)</h2>
    <div className="login-form">
      <h2>Vidyutrenz</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </>
  );
};

export default LoginForm;
