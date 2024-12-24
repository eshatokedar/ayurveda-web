import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../styles/Experts.css";
import ExpertImg from "./../assets/expert.png";

const Arrow = ({ onClick, direction }) => (
  <div className={`custom-arrow ${direction}`} onClick={onClick}>
    {direction === "prev" ? "←" : "→"}
  </div>
);

const Experts = () => {
    const experts = [
      {
        id: 1,
        name: "Dr. Vaishali Sharma",
        avatar: ExpertImg,
        rating: 4.5,
        consultation: "🔗 Skin Specialist",
        qualification: "Ayurveda Practitioner (BAMS, MD)",
        experience: "🎓 25 years of experience",
        },
        {
        id: 2,
        name: "Dr. Vaishali Sharma",
        avatar: ExpertImg,
        rating: 4.7,
        consultation: "🔗 General Physician",
        qualification: "Ayurveda Practitioner (BAMS, MD)",
        experience: "🎓 20 years of experience",
        },
        {
        id: 3,
        name: "Dr. Vaishali Sharma",
        avatar: ExpertImg,
        rating: 4.8,
        consultation: "🔗 Diet Specialist",
        qualification: "Ayurveda Practitioner (BAMS, MD)",
        experience: "🎓 15 years of experience",
        },
    ];
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: <Arrow direction="prev" />,
      nextArrow: <Arrow direction="next" />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  
    return (
        <section className="experts">
          <div className="experts-container">
            <h2 className="experts-heading">Meet Our Ayurveda Experts</h2>
            <Slider {...settings}>
              {experts.map((expert) => (
                <div key={expert.id} className="experts-card">
                  <div className="avatar-wrapper">
                    <img
                      src={expert.avatar}
                      alt={`${expert.name}'s Avatar`}
                      className="experts-avatar"
                    />
                    <span className="rating-badge">{expert.rating} ★</span>
                  </div>
                  <div className="experts-info">
                    <h3 className="experts-name">{expert.name}</h3>
                    <p className="experts-qualification">{expert.qualification}</p>
                    <p className="experts-experience">{expert.experience}</p>
                    <p className="experts-consultation">{expert.consultation}</p>
                  </div>
                  <button className="book-session-btn">Book a session</button>
                </div>
              ))}
            </Slider>
            <button className="find-more-btn">Find more experts →</button>
          </div>
        </section>
      );
  };
 export default Experts;  