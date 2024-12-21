import React from "react";
import "./../styles/Footer.css";
import fb from "../assets/fb-logo.jpg";
import insta from "../assets/insta-logo.jpg";
import twitter from "../assets/twitter-logo.jpg";
import linkedin from "../assets/linkedin-logo.jpg";
import youtube from "../assets/yt-logo.jpg";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-header">
        <h3>Information</h3>
      </div>
      <div className="footer-content">
       <p>About Us</p>
        <p>Privacy Policy</p>
        <p>Privacy Policy for Mobile Apps</p>
        <p>Terms and Conditions</p>
        <p>For Businesses, Hotels & Resorts</p>
        <p>International Delivery</p>
        <p>Shipping and Returns Policy</p>
        </div>
        <div className="footer-contact">
        <h3>Get in touch</h3>
        <p>support@amrutam.co.in</p>
        <p>Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak, Lashkar, Gwalior - 474001</p>
        <p>+91 9713171999</p>
        <div className="footer-social">
        <img src={fb} alt="fb" />
        <img src={insta} alt="insta" />
        <img src={twitter} alt="twitter" />
        <img src={linkedin} alt="linkedin" />
        <img src={youtube} alt="youtube" />
        </div>
      </div>
      <div className="footer-subscribe">
        <h3>Subscribe to our Newsletter and join Amrutam Family today!</h3>
        <input type="email" placeholder="Your Email Address" />
        <button>Subscribe</button>
      </div>
    </footer>
  );
};

export default Footer;
