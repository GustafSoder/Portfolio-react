import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const Projects = () => {
  const getProjects = () => {
    return projects.map((project, id) => {
      return <ProjectCard key={id} project={project} />;
    });
  };

  return (
    <section id="projects" className="container">
      <h2 className="title">Projects</h2>
      <div className="projects">{getProjects()}</div>
    </section>
  );
};

export default Projects;
