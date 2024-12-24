import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../styles/Reviews.css";

const Arrow = ({ onClick, direction }) => (
  <div className={`custom-arrow ${direction}`} onClick={onClick}>
    {direction === "prev" ? "←" : "→"}
  </div>
);

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      review: "This service is amazing! Highly recommended.",
      avatar: "https://via.placeholder.com/100",
      rating: 5,
      city: "New York",
      date: "2023-01-15",
      consultation: "General Health",
    },
    {
      id: 2,
      name: "Jane Smith",
      review: "Exceptional customer support and quality!",
      avatar: "https://via.placeholder.com/100",
      rating: 4,
      city: "Los Angeles",
      date: "2023-02-10",
      consultation: "Skin Care",
    },
    {
      id: 3,
      name: "Alice Johnson",
      review: "Exceeded my expectations in every way.",
      avatar: "https://via.placeholder.com/100",
      rating: 5,
      city: "Chicago",
      date: "2023-03-05",
      consultation: "Diet and Nutrition",
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
    <section className="customer-reviews">
        <div className="reviews-container">
            <h2 className="reviews-heading">What Our Customers Say</h2>
            <Slider {...settings}>
                {reviews.map((review) => (
                    <div key={review.id} className="review-card">
                        <p className="review-consultation">{review.consultation}</p>
                        <p className="review-date">{review.date}</p>
                        <div className="review-header">
                            <img
                                src={review.avatar}
                                alt={`${review.name}'s Avatar`}
                                className="review-avatar"
                            />
                            <div className="review-info">
                                <h3 className="review-name">{review.name}</h3>
                                <p className="review-city">{review.city}</p>
                                <p className="review-rating">
                                    {"★".repeat(review.rating)}
                                    {"☆".repeat(5 - review.rating)}
                                </p>
                            </div>
                        </div>
                        <p className="review-text">"{review.review}"</p>
                    </div>
                ))}
            </Slider>
        </div>
    </section>
);
};

export default CustomerReviews;
