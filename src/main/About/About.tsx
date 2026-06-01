import "./about.css";

const About = () => {
  return (
    <section className="about container" id="about">
      <div className="about-container">
        <img src="src/assets/about-me.png" alt="about me" />
        <h3 className="about-subtitle">About Me</h3>
        <p className="about-description">
          I am a passionate <strong>Full-Stack Web Developer</strong> with
          experience building personal projects and modern web applications. I
          specialize in
          <strong> MERN stack</strong> development (MongoDB, Express.js, React,
          and Node.js).
        </p>

        <h3 className="about-subtitle">Here is what I bring to the table:</h3>
        <ul>
          <li>
            <strong>Frontend:</strong> Crafting responsive, interactive, and
            accessible UIs using React.
          </li>
          <li>
            <strong>Backend:</strong> Designing secure APIs, managing databases,
            and handling server logic with Node.js, Express, and MongoDB.
          </li>
          <li>
            <strong>Mindset:</strong> Clean code enthusiast, continuous learner,
            and efficient problem solver.
          </li>
        </ul>

        <p>
          <em>Let's build something amazing together!</em>
        </p>
      </div>
    </section>
  );
};

export default About;
