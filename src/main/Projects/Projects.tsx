import "./projects.css";

const Projects = () => {
  return (
    <section className="projects container" id="projects">
      <h4 className="subtitle">My personal projects</h4>
      <h5 className="projects-description">These are some of my recent works:</h5>
      <div className="projects-list">
        <a href="#" className="project-card card">
          <img src="src/assets/projects/project1.png" alt="Project 1" />
          <h5>YouTube (test)</h5>
          <p>
            YouTube is a video-sharing platform that enables users to upload,
            stream, and interact with multimedia content online.
          </p>
        </a>
        <a href="#" className="project-card card">
          <img src="src/assets/projects/project1.png" alt="Project 1" />
          <h5>YouTube (test)</h5>
          <p>
            YouTube is a video-sharing platform that enables users to upload,
            stream, and interact with multimedia content online.
          </p>
        </a>
        <a href="#" className="project-card card">
          <img src="src/assets/projects/project1.png" alt="Project 1" />
          <h5>YouTube (test)</h5>
          <p>
            YouTube is a video-sharing platform that enables users to upload,
            stream, and interact with multimedia content online.
          </p>
        </a>
      </div>
    </section>
  );
};

export default Projects;
