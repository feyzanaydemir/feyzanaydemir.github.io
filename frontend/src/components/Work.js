import { projects } from '../projects';
import '../assets/styles/Work.css';

function Work() {
  return (
    <>
      <h1 className="Work-h1">Selected Work</h1>
      <div className="Work">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <div>
              <img src={project.image}></img>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
            <div className="buttons">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Work;
