import React from "react";
import "./../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <p>Namaste, Welcome to Amrutam</p>
          <h1>Step into Holistic Healing with <u>Ayurveda</u></h1>
          <h1>Book Consultation with Certified Experts.</h1>
          <p>Dive into the world of ayurveda and experience personalized health solutions and holistic guidance from trusted ayurvedic doctors anytime, anywhere.</p>
          <button>BOOK AN APPOINTMENT</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
