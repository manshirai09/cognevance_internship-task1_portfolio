function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "GitHub",
    "Canva",
    "Figma",
    "Graphic Design",
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <span className="skill-card" key={index}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;