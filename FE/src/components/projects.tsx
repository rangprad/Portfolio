import React, { useEffect, useState } from 'react';
import { useProjectsStore } from '../store/projectsStore';
import { FaPlusCircle } from "react-icons/fa";
import ProjectsInput from './projectsInput';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const Projects: React.FC = () => {
  const { projects, fetchProjects } = useProjectsStore();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isInputVisible, setIsInputVisible] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const handleProjectClick = (project: Project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);
  const toggleInputForm = () => setIsInputVisible(prev => !prev);

  return (
    <div className="p-4">
      <div className="flex items-center justify-center mb-6">
        <h2 className="text-2xl font-bold mr-2">Projects</h2>
        <FaPlusCircle 
          className="text-3xl cursor-pointer text-blue-500 hover:text-blue-700"
          onClick={toggleInputForm}
        />
      </div>

      {isInputVisible && <ProjectsInput onClose={toggleInputForm} />}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project: Project) => (
          <div
            key={project.id}
            className="card bg-gray-800 text-white shadow-md rounded-lg transition-transform duration-300 transform hover:scale-105 cursor-pointer"
            onClick={() => handleProjectClick(project)}
          >
            <figure>
              <img src={project.imageUrl} alt={project.title} className="w-full h-32 object-cover rounded-t-lg" />
            </figure>
            <div className="card-body p-4">
              <h3 className="font-bold text-lg">{project.title}</h3>
              <p className="mt-1">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg max-w-md w-full">
            <h3 className="text-xl font-bold">{selectedProject.title}</h3>
            <img
              src={selectedProject.imageUrl}
              alt={selectedProject.title}
              className="w-full h-48 object-cover rounded-lg my-4"
            />
            <p>{selectedProject.description}</p>
            <div className="mt-4">
              <button className="btn btn-secondary" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
