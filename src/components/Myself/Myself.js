import "./myself.css";
import me from "./Subject.png";

export const Myself = () => {
  return (
    <section className="myself-section">
      <div className="myself-content">
        <h1 className="title">Hello, I'm Gustaf</h1>
        <p className="description">
          I'm 28 years old and I've recently graduated from Umeå University with
          a M.Sc degree in Computer Science. I'm currently looking for a job as
          a software developer. I have a passion for programming and I'm always
          eager to learn new things. I'm a team player and I enjoy working in a
          team. I'm also a quick learner and I'm not afraid to take on new
          challenges.
        </p>
        <p className="description">
          In this portfolio you can find some of the projects I've worked on
          during my studies and prior work experience. I hope you enjoy.
        </p>
        <a className="contactbtn" href="mailto:gustafsoderlund123@gmail.com">
          Contact Me
        </a>
      </div>
      <img className="myself-image" src={me} alt="meh" />
      <div className="topBlur"></div>
      <div className="botBlur"></div>
    </section>
  );
};

export default Myself;
