import React, { useEffect, useState } from 'react';

const GitHubLink = () => {
  const [stars, setStars] = useState(0);

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/Ajaybalajiprasad/Vidyutrenz-Login');
        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.error('Error fetching the repository data:', error);
      }
    };

    fetchRepoData();
  }, []);

  return (
    <a 
      href="https://github.com/Ajaybalajiprasad/Vidyutrenz-Login" 
      target="_blank" 
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
    >
      <div style={{ 
        position: 'absolute',
        top: '20px', 
        right: '20px', 
        display: 'flex', 
        alignItems: 'center', 
        backgroundColor: '#fff', 
        padding: '5px', 
        borderRadius: '5px', 
        boxShadow: '0 0 10px rgba(0,0,0,0.1)' 
      }}>
        <img 
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
          alt="GitHub Logo" 
          style={{ width: '40px', height: '40px', marginRight: '10px' }}
        />
        <p style={{ fontSize: '16px', color: '#586069', margin: 0, display: 'flex', alignItems: 'center' }}>⭐ {stars}</p>
      </div>
    </a>
  );
};

export default GitHubLink;