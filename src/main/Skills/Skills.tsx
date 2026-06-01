import "./skills.css";

const Skills = () => {
  return (
    <section className="skills container" id="skills">
      <h2 className="skills-title">Skills and Technologies</h2>
      <div className="skills-content">
        <div className="skills-container">
          <div className="skill-item">
            <h3 className="skill-description">Frontend:</h3>
            <ul>
              <li>JavaScript / TypeScript</li>
              <li>React</li>
              <li>CSS3</li>
            </ul>
          </div>
          <div className="skill-item">
            <h3 className="skill-description">Backend:</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
            </ul>
          </div>
          <div className="skill-item">
            <h3 className="skill-description">Database:</h3>
            <ul>
              <li>MongoDB</li>
              <li>Database Design</li>
              <li>Mongoose</li>
            </ul>
          </div>
          <div className="skill-item">
            <h3 className="skill-description">Tools:</h3>
            <ul>
              <li>Git / GitHub</li>
              <li>VS Code</li>
              <li>Postman</li>
              <li>MongoDB Compass</li>
            </ul>
          </div>
          <div className="skill-item">
            <h3 className="skill-description">Concepts:</h3>
            <ul>
              <li>REST APIs</li>
              <li>Responsive Design</li>
              <li>Authentication & JWT</li>
              <li>CRUD Operations</li>
              <li>Component-Based Architecture</li>
            </ul>
          </div>
          <div className="skill-item">
            <h3 className="skill-description">Languages:</h3>
            <ul>
              <li>Spanish — Native</li>
              <li>English — Intermediate (B1/B2)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
