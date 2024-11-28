import React from "react";
import Button from "./Button";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h3>CREATED TO STAND OUT</h3>
        <h1>
          AMPLIFY YOUR SOCIAL MEDIA PRESENCE <span className="highlight">LIKE A BOSS</span>
        </h1>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.
        </p>
        <Button text="Book a Call" />
      </div>
      <div className="hero-image">
        <img src="https://img.freepik.com/premium-photo/excited-good-looking-girl-making-selfie-outdoor-shot-chilling-female-model-posing-city_926199-2240074.jpg" alt="Woman with Phone" />
      </div>
    </div>
  );
};

export default HeroSection;
