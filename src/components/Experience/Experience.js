import React from "react";
import "./Experience.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

const Experience = () => {
  const getSkills = () => {
    return skills.map((skill, id) => {
      return (
        <div key={id} className="skill">
          <div className="skillImgContainer">
            <img src={process.env.PUBLIC_URL + skill.image} alt={skill.title} />
          </div>
          <p>{skill.title}</p>
        </div>
      );
    });
  };

  const getHistory = () => {
    return history.map((job, id) => {
      return (
        <li key={id} className="historyItem">
          <img src={process.env.PUBLIC_URL + job.image} alt={job.title} />
          <div className="historyItemDetails">
            <h3>{`${job.role}, ${job.company}`}</h3>
            <p>{`${job.startDate}, ${job.endDate}`}</p>
            <ul>
              {job.description.map((experience, id) => {
                return <li key={id}>{experience}</li>;
              })}
            </ul>
          </div>
        </li>
      );
    });
  };
  return (
    <section id="experience" className="container">
      <h2 className="title">Experience</h2>
      <div className="content">
        <div className="skills">{getSkills()}</div>

        <ul className="history">{getHistory()}</ul>
      </div>
    </section>
  );
};

export default Experience;
