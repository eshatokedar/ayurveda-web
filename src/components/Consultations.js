import React from "react";
import "./../styles/Consultations.css";
import consultations1 from "./../assets/consultations1.jpeg";
import consultations2 from "./../assets/consultations2.png";
import consultations3 from "./../assets/consultations3.jpeg";

const Consultations = () => {
  return (
    <section className="consultation">
        <h2 className="consultation-heading">What sets Ayurvedic consultations apart?</h2>
      <div className="consultation-container">
        {/* First Row */}
        <div className="row">
          <div className="consultation-card"><h3 style={{fontSize:"20px", paddingTop:"10px", marginLeft:"20px", marginRight:"20px", marginBottom:"-5px"}}>स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।</h3>
          <br/>
          <p style={{padding:"3px"}}>Meaning: The goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. </p></div>
          <div className="consultation-card image-card">
            <img alt="Center Image" src={consultations1} />
          </div>
          <div className="consultation-card"><h3>Precise Diagnosis</h3>
          <br/>
          <p>Ayurveda's core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment.</p></div>
        </div>

        {/* Second Row */}
        <div className="row">
          <div className="consultation-card"><h3>Zero side-effects</h3>
          <br/>
          <p>Ayurvedic treatments are devoid of chemicals, and are based completely on natural herbs.</p></div>
          <div className="consultation-card image-card">
            <img src={consultations2} alt="Second Image" />
          </div>
          <div className="consultation-card"><h3>Individual Treatment</h3>
          <br/>
          <p>All treatments are personalized based on a person's unique constitution and health concerns.</p></div>
          <div className="consultation-card image-card">
            <img src={consultations3} alt="Third Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultations;
