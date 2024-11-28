import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./Button";
import "./FeaturesSection.css";

// Register the GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
  const leftRef = useRef(null);
  const centerRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    // Left Section Animation
    gsap.fromTo(
      leftRef.current,
      { x: "-100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    // Center Section Animation
    gsap.fromTo(
      centerRef.current,
      { opacity: 0 },
      {
        
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: centerRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    // Right Section Animation
    gsap.fromTo(
      rightRef.current,
      { x: "100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="features-section">
      {/* Left Section */}
      <div className="features-left" ref={leftRef}>
        <h3>STRATEGY DEVELOPMENT</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <h3>CONTENT CREATION</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <h3>ADS & CAMPAIGNS</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Center Image */}
      <div className="features-center" ref={centerRef}>
        <img
          src="https://images.pexels.com/photos/4065136/pexels-photo-4065136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Phone Display"
          className="phone-image"
        />
      </div>

      {/* Right Section */}
      <div className="features-right" ref={rightRef}>
        <h2>
          Harness <span className="highlight">The Power</span> of Social Media
        </h2>
        <p>
          By leveraging our comprehensive services, you can establish a strong online presence, 
          connect with your audience, and achieve tangible results from your social media marketing efforts. 
          We work collaboratively with you to develop and execute strategies that set your brand apart 
          and drive meaningful engagement.
        </p>
        <Button text="Learn More" />
      </div>
    </div>
  );
};

export default FeaturesSection;
