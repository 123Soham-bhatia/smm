import React, { useState } from "react";
import "./Projects.css";

const projectsData = [
  { id: 1, title: "Social Media Marketing Tips and Tricks", date: "June 13, 2023", image: "https://www.bibs.co.in/blog-image/1718798505.jpg" },
  { id: 2, title: "How to Boost Your Business with Effective Marketing", date: "June 13, 2023", image: "https://blr1.digitaloceanspaces.com/brandstory/2024/dubai/engage.png" },
  { id: 3, title: "The Ultimate Guide to Social Media Marketing", date: "June 13, 2023", image: "https://ifocusmarketing.com/wp-content/uploads/2024/01/women-meeting-around-computer-jpg.webp" },
  { id: 4, title: "SEO Strategies for 2024", date: "June 14, 2023", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmQGq6r6gyixev8V_WkW9I8JwOiet2iZ9U5cKCKZJIllWtGUy584aNcbO9wOIvHGMTi9Y&usqp=CAU" },
  { id: 5, title: "Content Marketing Essentials", date: "June 15, 2023", image: "https://auspicioussoft.com/wp-content/uploads/2024/04/App-dev.png" },
  { id: 6, title: "Building a Brand on Social Media", date: "June 16, 2023", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf9pBLnvsV1vNUG0ahuLEsi9xVtqY129c6rgQw1Rtda6-1N0m_NO0LzoawLA2vXqdqAs0&usqp=CAU" },
  { id: 7, title: "Email Marketing Best Practices", date: "June 17, 2023", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqVu21p6YhGxddJx50ocnTTWk-D5X380arpRg0EzXzz3akjJMZeDpvzdeyJHHI-RmbhbU&usqp=CAU" },
  { id: 8, title: "Analyzing Your Marketing ROI", date: "June 18, 2023", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSFbSSx-sDpYbJ3QuFokRGa7CjY6I0lclPrhFL_QrgsbudCWc14Pwy3gk2UYQ0IEYzJck&usqp=CAU" },
  { id: 9, title: "Understanding Consumer Behavior", date: "June 19, 2023", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-IZRJbyV_yxyaOjoJ-hW_F-lbFf7Bhp9_pE7wrS7tnLQd_2Uw_Be5w5Be-JSgb85DZ0I&usqp=CAU" },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < projectsData.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="projects-container">
      <button className="prev-button" onClick={handlePrev} disabled={currentIndex === 0}>
        Prev
      </button>
      <div className="projects">
        {projectsData.slice(currentIndex, currentIndex + 3).map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <p className="project-date">{project.date}</p>
              <h3 className="project-title">{project.title}</h3>
              <button className="read-more-button">Read More</button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="next-button"
        onClick={handleNext}
        disabled={currentIndex === projectsData.length - 3}
      >
        Next
      </button>
    </div>
  );
};

export default Projects;
