import React from "react";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import "../styles/Approach.css";
import digitone from "../assets/number-1.png";
import digittwo from "../assets/number-2.png";
import digitthree from "../assets/number-3.png";
import digitfour from "../assets/number-4.png";

const Approach = () => {
  const approachData = [
    {
      id: 1,
      title: "Make an Appointment",
      description: "You must make an appointment in advance to choose the services and date.",
      icon: digitone,
    },
    {
      id: 2,
      title: "Consultations",
      description: "The next stage involves a thorough consultation with an Ayurvedic practitioner.",
      icon: digittwo,
    },
    {
      id: 3,
      title: "Treatment Planning",
      description: "The Ayurvedic practitioner creates a personalized treatment plan for you.",
      icon: digitthree,
    },
    {
      id: 4,
      title: "Maintenance",
      description: "These visits allow for assessment of progress and adjustments to the treatment.",
      icon: digitfour,
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
  };

  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1028px)" });

  return (
    <section className="approach">
      <div className="approach-container">
        <h2 className="approach-heading">Our Ayurvedic Approach</h2>
        <p className="approach-subheading">
          We follow a systematic approach to provide the best solutions for your health.
        </p>

        {isMobileOrTablet ? (
          // Render Carousel on Mobile and Tablet Screens
          <Slider {...sliderSettings}>
            {approachData.map((item) => (
              <div key={item.id} className="approach-card">
                <img className="approach-icon" src={item.icon} alt="Step" />
                <h3 className="approach-title">{item.title}</h3>
                <p className="approach-description">{item.description}</p>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="approach-grid">
            {approachData.map((item) => (
              <div key={item.id} className="approach-card">
                <img className="approach-icon" src={item.icon} alt="Step" />
                <h3 className="approach-title">{item.title}</h3>
                <p className="approach-description">{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Approach;
