import React, { useState } from "react";
import "./../styles/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
        <div className="logo">AMRUTAM</div>
      </div>
    </header>
  );
};

export default Header;
