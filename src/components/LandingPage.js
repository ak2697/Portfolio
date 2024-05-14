// src/components/LandingPage.js
import React from 'react';
import './LandingPage.css'; // Import your CSS file for styling
import profileImage from '../assets/profile.jpeg'; // Import your profile image

import UserDetails from './UserDetails';
import SocialButtons from './SocialButtons';



const LandingPage = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
    
  };

  
  return (   
    <div>
    <div className="landing-page">
      <div className="landing-page-content">
        <div className="profile-image-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <h1>Hi, I am <span style={{display: 'inline-block'}} class="rainbow">Ashish</span>.</h1>
        <h2>Software Engineer | AI/ML Enthusiast</h2>
        
        <UserDetails/>
        <SocialButtons/>
        
      </div>

    </div>
    </div>
    
  );
}

export default LandingPage;
