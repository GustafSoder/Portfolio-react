import React, { useState } from "react";
import "./NB.css";
import menuicon from "./menuIcon.png";
import closeicon from "./closeIcon.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="NavBar">
      <a className="nav-title" href="/">
        Portfolio
      </a>
      <div className="menu">
        <img
          className="hamburger-icon"
          src={isOpen ? closeicon : menuicon}
          alt="Menu-button"
          onClick={toggleMenu}
        />
        <ul
          className={`nav-items ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
