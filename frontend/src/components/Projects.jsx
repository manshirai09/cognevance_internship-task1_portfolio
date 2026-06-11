function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio website built using React. It showcases my skills, projects, and contact information with a modern user interface.",
      tech: "React, CSS, JavaScript",
      github: "#",
      demo: "#",
    },
    {
      title: "MediQueue",
      description:
        "A Smart OPD Queue Management System that helps hospitals manage patient queues, token flow, and real-time updates efficiently.",
      tech: "React, Node.js, Express.js, MongoDB",
      github: "#",
      demo: "#",
    },
    {
      title: "Event Management Website",
      description:
        "A web application for managing events, registrations, schedules, and participant information.",
      tech: "HTML, CSS, JavaScript",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <p>
              <strong>Technologies:</strong> {project.tech}
            </p>

            <div className="project-links">
              <a href={project.github} target="_blank">
                GitHub
              </a>

              <a href={project.demo} target="_blank">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;