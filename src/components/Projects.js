import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="project">
          <h3>Bus Pass System</h3>
          <p>
The Bus Pass System is a digital platform that simplifies the process of applying for, renewing, and validating bus passes. It allows users to apply and renew passes online, make secure payments, and access their passes digitally with QR code validation. The system also provides transportation authorities with a dashboard for managing applications and tracking usage.

   </p>
        </div>
        <div className="project">
          <h3>Skin Disease Detector Application</h3>
          <p>The Skin Disease Detector application is a digital tool designed to assist users in identifying potential skin diseases based on their symptoms or images of their skin condition. The application leverages AI and machine learning algorithms to analyze user input and provide an informed diagnosis. This project aims to offer an accessible, user-friendly platform for preliminary skin disease detection, helping users to seek appropriate medical advice if needed.</p>
        </div>
        <div className="project">
          <h3>Pet Adoption System</h3>
          <p>The Pet Adoption System is a digital platform designed to facilitate the adoption of pets from shelters and rescue organizations. This system connects potential pet adopters with animals in need of homes, streamlining the adoption process and enhancing the experience for both adopters and shelters.

</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
