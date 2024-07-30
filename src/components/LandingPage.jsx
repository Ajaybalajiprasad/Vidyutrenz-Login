import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const move = useNavigate();
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [username, setUsername] = useState(
    typeof window !== 'undefined' ? localStorage.getItem('user') : null
  );
  const [showStarMessage, setShowStarMessage] = useState(false);

  useEffect(() => {
    if (!username) {
      move('/');
    }
  }, [username, move]);

  const handleSignOut = () => {
    setShowStarMessage(true);
  };

  const confirmSignOut = () => {
    localStorage.removeItem('vanakamdamaapla');
    localStorage.removeItem('user');
    setIsSubmitted(false);
    move('/');
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleNameSubmit();
    }
  };

  const handleNameSubmit = () => {
    if (name) {
      localStorage.setItem('user', name);
      setUsername(name);
      setIsSubmitted(true);
      setName('');
    }
  };

  if (!username) {
    return null;
  }

  return (
    <div className="landing-page">
      <h1>Hey {username} !! welcome to vidyutrenz.</h1>
      <div className="input">
        <h3>
          {isSubmitted ? 'Ipo crcta iruka 😉' : 'Sorry bhaaa! peru vanga maranthuten 😅... By the way unga peru enna ?'}
        </h3>
        {!isSubmitted && (
          <input 
            type="text" 
            value={name} 
            onChange={handleNameChange} 
            onKeyDown={handleKey}
            className="underline"
          />
        )}
      </div>
      {!isSubmitted && (
        <div className="button-group">
          <button onClick={handleNameSubmit}>Submit</button>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
      {isSubmitted && (
        <div className="button-group">
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
      {showStarMessage && (
        <div className="star-message">
          <p>If you enjoyed using our app, please consider giving us a star on GitHub!</p>
          <div className="arrow-up"></div>
          <button onClick={confirmSignOut}>Confirm Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default LandingPage;