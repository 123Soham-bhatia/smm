import React from "react";
import "./Services.css"; // Import CSS for styling

const services = [
  {
    icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", // Replace with actual icons
    title: "Social Media Management",
    description: "We help you grow your brand on social media by managing your accounts and creating impactful strategies."
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png", // Replace with actual icons
    title: "Content Creation",
    description: "Our creative team crafts engaging content tailored to your audience for maximum engagement."
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3aXuLwhZ3KVjCpZ9BXwdu0JGBn-10Mts_AA&s", // Replace with actual icons
    title: "Workshops & Training",
    description: "Learn from our experts through workshops designed to teach you the latest social media trends."
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Twitter_Logo.png", // Replace with actual icons
    title: "Brand Consulting",
    description: "We provide strategic consulting to help you establish a strong and consistent brand identity."
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnVG3LrnvxCchXpMAlLWSgqGxdG_ZNRrgKkQ&s", // Replace with actual icons
    title: "Advertising Campaigns",
    description: "From planning to execution, we create ad campaigns that deliver results for your business."
  }
];

const Services = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">
        Explore the wide range of services we offer to help you succeed in the digital space.
      </p>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.icon} alt={`${service.title} icon`} className="service-icon" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
