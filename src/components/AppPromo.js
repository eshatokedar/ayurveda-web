import React from "react";
import "./../styles/AppPromo.css";
import PhoneImg from "../assets/app-promo-phone.png";
import GooglePlay from "../assets/google-play-button.webp";
import AppStore from "../assets/app-store-button.png";

const AppPromo = () => {
    return (
      <section className="app-promotion">
        <div className="app-promotion-container">
          <div className="promotion-content">
            <h1 className="promotion-title">Amrutam Home App</h1>
            <p className="promotion-description">
              The Amrutam Home App is your one-stop app for all things Ayurveda!
              Apart from mimicking the significant characteristics of our website,
              this app offers a wide range of additional features.
            </p>
            <p className="promotion-highlight">
              Get A Diet & Lifestyle Consultation With Ayurvedic Experts Across
              The Globe
            </p>
            <h3 className="promotion-cta">Get The App Now</h3>
            <div className="app-links">
              <img
                src={GooglePlay}
                alt="Google Play"
                className="app-badge"
              />
              <img
                src={AppStore}
                alt="App Store"
                className="app-badge"
              />
            </div>
          </div>
          <div className="promotion-image">
            <img
              src={PhoneImg}
              alt="Amrutam App Mockup"
              className="mockup-phone"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default AppPromo;
  