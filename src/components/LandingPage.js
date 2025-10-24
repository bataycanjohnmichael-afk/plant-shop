import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="content">
        <h1>GreenThumb Nursery</h1>
        <p>Welcome to GreenThumb Nursery, your go-to source for beautiful houseplants. We offer a wide variety of plants to brighten your home and improve your air quality.</p>
        <Link to="/products">
          <button className="get-started-btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;