import React from "react";
import "./../styles/Features.css";

import IconConsultation from "./../assets/icon-consultation.png"; 
import IconSafeTreatment from "./../assets/icon-safe-treatment.png";
import IconPractitioners from "./../assets/icon-practitioners.png";
import IconPersonalized from "./../assets/icon-personalized.png";

const featuresData = [
  {
    id: 1,
    icon: IconConsultation,
    text: "Convenient Online & In-Clinic Consultations",
  },
  {
    id: 2,
    icon: IconSafeTreatment,
    text: "Safe and Effective Treatment",
  },
  {
    id: 3,
    icon: IconPractitioners,
    text: "Experienced Ayurvedic Practitioners",
  },
  {
    id: 4,
    icon: IconPersonalized,
    text: "Personalized Treatment Plans & Guidance",
  },
];

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="feature-grid">
          {featuresData.map((feature) => (
            <div key={feature.id} className="feature-card">
              <img
                src={feature.icon}
                alt={feature.text}
                className="feature-icon"
              />
              <p className="feature-text">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

