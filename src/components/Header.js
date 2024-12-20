import React, { useState } from "react";
import "./../styles/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">Logo</div>
        <nav className={`nav-links ${isOpen ? "active" : ""}`}>
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Contact</a>
        </nav>
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
      </div>
    </header>
  );
};

export default Header;
