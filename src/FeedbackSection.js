import React from 'react';
import './FeedbackSection.css';

function FeedbackSection() {
  return (
    <section className="feedback-section">
      <div className="feedback-form">
        <h3>Feedback</h3>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Feedback" rows="4" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="feedback-bg"></div>
    </section>
  );
}

export default FeedbackSection;
