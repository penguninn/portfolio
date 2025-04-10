import { Link } from "react-router-dom";
import { FaCalendarAlt, FaGithub, FaGlobe } from "react-icons/fa";
import Pengunin from "../components/Pengunin";
import { useDocumentTitle } from "../lib/useDocumentTitle";

const Project = () => {
  useDocumentTitle("Projects | Macvuanh Dai");

  const projects = [
    {
      id: 1,
      title: "PenCraft Blog",
      description: "Get quick tips on coding and creative design. Explore practical programming insights and artistic inspiration all in one place.",
      period: "March 2025 - Present",
      website: "blog.penguninn.com",
      github: "https://github.com/penguninn/blog-fe.git",
      technologies: ["java", "springboot", "typescript", "react", "git", "docker"]
    }
  ];

  return (
    <div className="w-full max-w-2xl pt-12">
      {projects.map((project) => (
        <div key={project.id} className="w-full mb-16 flex flex-col">
          <div className="w-full p-6 rounded-lg shadow-lg shadow-gray-400 dark:shadow-gray-900">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-purple-500">
                  <span className="text-white text-lg font-bold"><Pengunin /></span>
                </div>
                <div>
                  <h2 className="text-xl font-bold">{project.title}</h2>
                  <div className="flex items-center text-sm text-gray-400 mt-1">
                    <FaCalendarAlt className="mr-2" size={14} />
                    <span>{project.period}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Link to={`https://${project.website}`} target="_blank" className="flex items-center text-blue-500 dark:text-blue-400 hover:underline">
                  <FaGlobe className="mr-2" size={14} />
                  {project.website}
                </Link>
                <Link to={project.github} target="_blank" className="flex items-center text-blue-500 dark:text-blue-400 hover:underline">
                  <FaGithub className="mr-2" size={14} />
                  {project.github.split("https://github.com/")[1]}
                </Link>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-600 dark:text-gray-300 ">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <button
                  key={index}
                  className="text-xs px-4 py-1 rounded-md bg-[#f5f0e8] dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700"
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
