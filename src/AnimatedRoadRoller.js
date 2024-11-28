import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './AnimatedRoadRoller.css';

function AnimatedRoadRoller() {
  const rollerRef = useRef(null);

  useEffect(() => {
    gsap.to(rollerRef.current, {
      x: 300, 
      duration: 3, 
      scrollTrigger: {
        trigger: rollerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      }
    });
  }, []);

  return (
    <div className="road-roller" ref={rollerRef}>
      <img src="/path/to/road-roller.png" alt="Road Roller" />
    </div>
  );
}

export default AnimatedRoadRoller;
