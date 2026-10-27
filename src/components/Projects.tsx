import Project from './partials/Project';
import projectData from '../assets/projects.json';

const headlineClass =
  "relative z-0 mt-5 mb-[55px] inline-block text-center text-[35px] font-black after:absolute after:-bottom-[5px] after:left-1/4 after:block after:h-1 after:w-1/2 after:bg-[#228b22] after:content-['']";

const Projects = () => (
  <section
    id="projects"
    className="mx-auto min-h-screen scroll-mt-12 bg-[#ccd8cc] px-7.5 py-7.5 text-center md:px-22.5 md:py-10"
  >
    <h2 className={headlineClass}>PROJECTS</h2>
    <div className="mt-3.75 grid justify-center gap-6.25 md:grid-cols-[repeat(auto-fit,minmax(270px,1fr))] md:gap-10">
      {projectData.map(({ imageSrc, imageAlt, technologies, websiteUrl, githubUrl, description }) => (
        <Project
          key={githubUrl}
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          technologies={technologies}
          websiteUrl={websiteUrl}
          githubUrl={githubUrl}
          description={description}
        />
      ))}
    </div>
  </section>
);

export default Projects;
