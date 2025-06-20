import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import projects from "../../Data/projects";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 pt-0 max-w-7xl mx-auto mt-0 text-center cursor-auto"
    >
      <p className="text-gray-500 text-lg">Have a look at</p>
      <h2 className="text-4xl font-bold mb-12" data-aos="fade-left">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transform transition-transform duration-500 hover:scale-x-[1.03] hover:scale-y-[1.03]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-left flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="border border-gray-400 px-3 py-1 rounded-full text-sm hover:cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-6 mt-auto text-gray-800">
                <a
                  href={project.github}
                  className="flex items-center gap-1 hover:text-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.demo}
                  className="flex items-center gap-1 hover:text-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
