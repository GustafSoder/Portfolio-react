import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <footer className="footContainer" id="contact">
      <div className="text">
        <h2>Contact</h2>
        <div className="textContent">
          <p>Feel free to contact me on my socials!</p>
          <img src={process.env.PUBLIC_URL + "/images/mepointing.png"} alt="" />
        </div>
      </div>
      <ul className="links">
        <li className="link">
          <img
            src={process.env.PUBLIC_URL + "/images/mail.png"}
            alt="Mail_icon"
          />
          <a href="mailto:gustafsoderlund123@gmail.com">
            gustafsoderlund123@gmail.com
          </a>
        </li>
        <li className="link">
          <img
            src={process.env.PUBLIC_URL + "/images/LinkedinIcon.png"}
            alt="LinkedIn_icon"
          />
          <a href="https://www.linkedin.com/in/gustaf-söderlund/">
            linkedin.com/in/gustaf-söderlund/
          </a>
        </li>
        <li className="link">
          <img
            src={process.env.PUBLIC_URL + "/images/github-mark-white.png"}
            alt="Github-icon"
          />
          <a href="https://github.com/Sudda-king">github.com/Sudda-king</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
