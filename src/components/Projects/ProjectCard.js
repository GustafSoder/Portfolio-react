import "./ProjectCard.css";
const ProjectCard = ({
  project: { title, imageSrc, description, demo, source, skills },
}) => {
  return (
    <div className="projectcontainer">
      <img
        className="img"
        src={process.env.PUBLIC_URL + imageSrc}
        alt={title}
      />
      <h3 className="title">{title}</h3>
      <p className="desc">{description}</p>
      <ul className="skills">
        {skills.map((skill, id) => {
          return (
            <li className="skill" key={id}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className="links">
        {demo && (
          <a className="link" href={demo}>
            Demo
          </a>
        )}
        <a className="link" href={source}>
          Source
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
