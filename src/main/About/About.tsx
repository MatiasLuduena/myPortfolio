import "./about.css";

const About = () => {
  return (
    <section className="container" id="about">
      {/* About container */}
      <div className="about">
        <div className="about-container">
          <h3 className="about-subtitle">About Me</h3>
          <p className="about-description">
            I am a passionate <strong>Full-Stack Web Developer</strong> with
            experience building personal projects and modern web applications. I
            specialize in
            <strong> MERN stack</strong> development (MongoDB, Express.js,
            React, and Node.js).
          </p>

          <h3 className="about-subtitle">What I can do:</h3>
          <ul>
            <li>
              <strong>Frontend:</strong> Building responsive, interactive, and
              accessible UIs using React.
            </li>
            <li>
              <strong>Backend:</strong> Designing secure APIs, managing
              databases, and handling server logic with Node.js, Express, and
              MongoDB.
            </li>
            <li>
              <strong>Mindset:</strong> I like clean code, I'm a continuous
              learner, and an efficient problem solver.
            </li>
          </ul>

          <p>
            <em>Let's build something amazing together!</em>
          </p>
        </div>
        <div className="about-img-container">
          <img
            src="src/assets/turtle-pet.png"
            alt="pet"
            className="about-pet-image"
          />
        </div>
      </div>

      {/* Skills content */}
      <h2 className="about-subtitle">Skills and Technologies</h2>
      <div className="about skills-container">
        <div className="skill-item card">
          <h3 className="skills-subtitle">Frontend:</h3>
          <ul>
            <li>
              <img src="src/assets/icons/js.png" alt="JavaScript" />{" "}
              <span>JavaScript / TypeScript</span>
            </li>
            <li>
              <img src="src/assets/icons/react.png" alt="React" />{" "}
              <span>React</span>
            </li>
            <li>
              <img src="src/assets/icons/css3.png" alt="CSS3" />{" "}
              <span>CSS3</span>
            </li>
            <li>
              <img
                src="src/assets/icons/responsive.png"
                alt="Responsive Design"
              />{" "}
              <span>Responsive Design</span>
            </li>
          </ul>
        </div>
        <div className="skill-item card">
          <h3 className="skills-subtitle">Backend:</h3>
          <ul>
            <li>
              <img src="src/assets/icons/node.png" alt="Node.js" />{" "}
              <span>Node.js</span>
            </li>
            <li>
              <img src="src/assets/icons/express.png" alt="Express.js" />{" "}
              <span>Express.js</span>
            </li>
            <li>
              <img src="src/assets/icons/rest-api.png" alt="REST APIs" />{" "}
              <span>REST APIs</span>
            </li>
            <li>
              <img src="src/assets/icons/jwt.png" alt="Authentication & JWT" />{" "}
              <span>Authentication & JWT</span>
            </li>
          </ul>
        </div>
        <div className="skill-item card">
          <h3 className="skills-subtitle">Database:</h3>
          <ul>
            <li>
              <img src="src/assets/icons/mongodb.png" alt="MongoDB" />{" "}
              <span>MongoDB</span>
            </li>
            <li>
              <img src="src/assets/icons/mongoose.png" alt="Mongoose" />{" "}
              <span>Mongoose</span>
            </li>
            <li>
              <img src="src/assets/icons/database.png" alt="Database Design" />{" "}
              <span>Database Design</span>
            </li>
            <li>
              <img src="src/assets/icons/crud.png" alt="CRUD Operations" />{" "}
              <span>CRUD Operations</span>
            </li>
          </ul>
        </div>
        <div className="skill-item card">
          <h3 className="skills-subtitle">Tools:</h3>
          <ul>
            <li>
              <img src="src/assets/icons/git.png" alt="Git / GitHub" />{" "}
              <span>Git / GitHub</span>
            </li>
            <li>
              <img src="src/assets/icons/vs-code.png" alt="VS Code" />{" "}
              <span>VS Code</span>
            </li>
            <li>
              <img src="src/assets/icons/postman.png" alt="Postman" />{" "}
              <span>Postman</span>
            </li>
            <li>
              <img
                src="src/assets/icons/mongodb-compass.png"
                alt="MongoDB Compass"
              />{" "}
              <span>MongoDB Compass</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
