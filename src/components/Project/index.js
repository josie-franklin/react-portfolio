import React, { useState } from "react";

function Project() {
  const [projects] = useState([
    {
      title: "Jokr",
      tech: "Handlebars.js, Sequelize, Heroku",
      description: "Sign up to search for jokes and save them for later.",
      link: "https://damp-bastion-89209.herokuapp.com/login",
      github: "https://github.com/josie-franklin/jokr",
      background: "jokr.png",
    },
    {
      title: "Site Seers",
      tech: "MongoDB, Express.js, React, Node.js",
      description: "Find campsites near you",
      link: "https://site-seers.herokuapp.com/",
      github: "https://github.com/jorge30fm/SiteSeers",
      background: "site-seers.png",
    },
    {
      title: "Weather Dashboard",
      tech: "HTML, CSS, OpenWeather API",
      description: "Check the weather by city.",
      link: "https://josie-franklin.github.io/weather-dashboard/",
      github: "https://github.com/josie-franklin/weather-dashboard",
      background: "weather-dashboard.png",
    },
    {
      title: "Coding Quiz",
      tech: "HTML, CSS, JavaScript",
      description: "Test your coding knowledge in this timed quiz!",
      link: "https://josie-franklin.github.io/coding-quiz/",
      github: "https://github.com/josie-franklin/coding-quiz",
      background: "coding-quiz.png",
    },
    {
      title: "E-Commerce Backend",
      tech: "Node.js, MySql, Sequelize",
      description: "The back-end API for an e-commerce site.",
      link: "https://github.com/josie-franklin/e-commerce-backend",
      github: "https://github.com/josie-franklin/e-commerce-backend",
      background: "e-commerce.png",
    },
    {
      title: "Social Network API",
      tech: "Node.js, MongoDB",
      description: "The back-end API for a social network app.",
      link: "https://github.com/josie-franklin/social-network-api",
      github: "https://github.com/josie-franklin/social-network-api",
      background: "social-media.png",
    },
  ]);
  return (
    <div>
      {projects.map((project) => (
        <a href={project.link} target="blank">
          <div
            className="project-card"
            style={{
              backgroundImage: `url(${require(`../../assets/images/${project.background}`)})`,
            }}
          >
            <div className="project-content frosted">
              <div className="project-text">
                <h3 className="moon-flower">{project.title}</h3>
                <h4 className="moon-flower">{project.tech}</h4>
                <p>{project.description}</p>
              </div>
              <a
                className="github-link moon-flower"
                href={project.github}
                target="blank"
              >
                <p>GitHub Repo</p>
              </a>
            </div>
            {/* </div> */}
          </div>
        </a>
      ))}
    </div>
  );
}

export default Project;
