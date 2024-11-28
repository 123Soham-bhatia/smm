import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import Services from "./Services";
import Footer from "./Footer";
import Projects from "./Projects";
import ClientLove from "./ClientLove";

// Add this in your main `index.js` or `App.js`


import "./App.css";

const App = () => {
 
  

  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <div style={{paddingTop:'100px'}} >
      <FeaturesSection/></div>
      <Services/>
      <div style={{ backgroundColor: "#f0f0f0"}}>
      <h1 style={{ textAlign: "center", color: "#d32f2f" }}>
        Our Social Media Projects
      </h1>
      <Projects Projects />
    </div>
    <ClientLove/>
      <div style={{paddingTop:'20px'}} >
      <Footer/>
      </div>
    </div>
  );
};

export default App;
