import "./About.css";

import aboutMeImg from "./aboutme.png";

const About = () => {
  return (
    <section className="container" id="about">
      <h2 className="title">About</h2>
      <div className="content">
        <img className="aboutImg" src={aboutMeImg} alt="placeholder" />
        <ul className="aboutItems">
          <li className="aboutItem">
            <img
              src={process.env.PUBLIC_URL + "/images/frontend.png"}
              alt="placeholder"
            />
            <div className="aboutItemText">
              <h3>Frontend</h3>
              <p>
                I've worked with HTML, CSS, and JavaScript. I've also worked
                with React and currently learning more about it.
              </p>
            </div>
          </li>
          <li className="aboutItem">
            <img
              src={process.env.PUBLIC_URL + "/images/backend.png"}
              alt="placeholder"
            />
            <div className="aboutItemText">
              <h3>Backend</h3>
              <p>
                I've experience with several programming languages, such as
                Java, Python, and JavaScript. I've also worked with C, Haskell
                and some C#. I've worked with SQL databases using PostgreSQL.
              </p>
            </div>
          </li>
          <li className="aboutItem">
            <img
              src={process.env.PUBLIC_URL + "/images/tools.png"}
              alt="placeholder"
            />
            <div className="aboutItemText">
              <h3>Other</h3>
              <p>
                I've worked with Git, Docker, and Linux. I've also some
                experience with Kubernetes and Google cloud platform.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
