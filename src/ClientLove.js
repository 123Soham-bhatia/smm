import React, { useState, useEffect } from "react";
import "./ClientLove.css";

const reviews = [
  {
    text: "Lexa Raye at NFLUENCE has truly transformed our social media marketing efforts. Their strategic approach, creative content, and expert guidance have helped us build a strong online presence and engage with our target audience effectively. The team at NFLUENCE is professional, responsive, and dedicated to our success. I highly recommend their services to any business looking to elevate their social media game.",
    author: "Sarah Hannah, Founder at Bloom Boutique",
  },
  {
    text: "The NFLUENCE team has been instrumental in driving our digital growth. Their ability to create engaging campaigns and provide actionable insights has had a tremendous impact on our brand. We couldn’t have asked for a better partner to work with.",
    author: "James Roberts, Marketing Head at FutureTech",
  },
  {
    text: "NFLUENCE provided us with exceptional service and support. Their strategic planning and innovative approach have helped us achieve our business goals. I would highly recommend them to any company aiming to thrive in the digital world.",
    author: "Emily Carter, CEO at GreenFields Ltd.",
  },
];

const ClientLove = () => {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Change review every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="client-love-container">
      {/* The big CLIENT LOVE text */}
      <div className="client-love-title">CLIENT LOVE</div>
      
      {/* Review content */}
      <div className="review-content">
        <p className="review-text">"{reviews[currentReview].text}"</p>
        <p className="review-author">~ {reviews[currentReview].author} ~</p>
        
        {/* Indicators */}
        <div className="review-indicators">
          {reviews.map((_, index) => (
            <span
              key={index}
              className={`indicator ${
                index === currentReview ? "active" : ""
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLove;
