import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ProjectsCarousel.css';

function ProjectsCarousel({ title, images }) {
  return (
    <section className="projects-carousel">
      <h2>{title}</h2>
      <Carousel showArrows={true} infiniteLoop={true} autoPlay={true}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Project ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default ProjectsCarousel;
