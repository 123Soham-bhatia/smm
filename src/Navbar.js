import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">NFLUENCE</div>
      <ul className="navbar-links">
        <li>Services</li>
        <li>Workshops</li>
        <li>Resources</li>
        <li>Blog</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="navbar-actions">
        <a href="#">Follow us on Instagram</a>
        <a href="#" className="schedule-call">Schedule a Call</a>
      </div>
    </nav>
  );
};

export default Navbar;
