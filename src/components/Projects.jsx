import Card from "./Card";
import projects from "../data/projects";

function Projects() {
  const mainProjects = projects.data.filter(
    (project) => project.type === "projects"
  );
  const sideProjects = projects.data.filter(
    (project) => project.type === "sideprojects"
  );

  return (
    <div className="p-4 lg:p-6">
      {/* Main Projects Section */}
      <section className="mb-6 lg:mb-10">
        <h2 className="text-4xl lg:text-4xl mb-6 font-thin  underline decoration-indigo-500/30">
        Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainProjects.map((project, index) => (
            <Card
              key={index}
              title={project.name}
              description={project.description}
              image={project.image}
              link={project.link}
              openInNewTab={true}
            />
          ))}
        </div>
      </section>

      {/* Side Projects Section */}
      <section className="mt-12">
        <h2 className="text-4xl lg:text-4xl mb-6 font-thin  underline decoration-indigo-500/30">
          Side Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sideProjects.map((project, index) => (
            <Card
              key={index}
              title={project.name}
              description={project.description}
              image={project.image}
              link={project.link}
              openInNewTab={true}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
