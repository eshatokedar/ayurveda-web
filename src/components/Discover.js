import React from "react";
import "./../styles/Discover.css";
import CentralImage from "./../assets/meditation-img.png"; // Central image
import Icon1 from "./../assets/icon1.png";
import Icon2 from "./../assets/icon2.png";
import Icon3 from "./../assets/icon3.png";
import Icon4 from "./../assets/icon4.png";
import Icon5 from "./../assets/icon5.png";
import Icon6 from "./../assets/icon6.png";

const discoverData = [
  { id: 1, icon: Icon1, title: "Personal Wellness",desc:"Treatments made just for you, based on your individual doshas." },
  { id: 2, icon: Icon2, title: "Holistic Healing",desc:"Fix the root problem for long lasting health."},
  { id: 3, icon: Icon3, title: "Focus on Prevention",desc:"Stop problems even before they start." },
  { id: 4, icon: Icon4, title: "Natural Remedies",desc:"Using herbs and natural therapies for healing."},
  { id: 5, icon: Icon5, title: "Mind-Body Connection",desc:"Keep your mind and body in sync for a happy life."},
  { id: 6, icon: Icon6, title: "Boosting Immunity",desc:"Stay strong and healthy for life, not just for today." }
];

const DiscoverComponent = () => {
  return (
    <section className="discover">
      <div className="discover-container">
        <h2 className="discover-heading">Discover Ayurveda's Magic With Us</h2>
        <p className="discover-description">Ayurvedic treatment aims to balance your body and mind, bringing harmony and vitality.</p>
        <div className="circular-layout">
          <img
            src={CentralImage}
            alt="Central"
            className="central-image"
          />
          {discoverData.map((item, index) => (
            <div key={item.id} className={`discover-card card-${index + 1}`}>
              <img src={item.icon} alt={item.title} className="card-icon" />
              <div className="discover-card-text">
              <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverComponent;
