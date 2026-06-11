function Hero() {
  return (
    <section className="hero" id="home">
      <h1>
        Hi, I'm <span>Manshi Rai</span> 👋
      </h1>

      <h2>Full Stack Developer & Graphic Designer</h2>

      <p>
        Passionate about building responsive websites, modern web
        applications, and creative digital experiences using React,
        Node.js, Express.js, and MongoDB.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="btn">
          View Projects
        </a>

        <a href="#contact" className="btn btn-outline">
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Hero;