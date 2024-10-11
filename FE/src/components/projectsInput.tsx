import React, { useState } from 'react';
import { useProjectsStore } from '../store/projectsStore';

interface ProjectsInputProps {
  onClose: () => void;
}

const ProjectsInput: React.FC<ProjectsInputProps> = ({ onClose }) => {
  const { createProject } = useProjectsStore();
  const [newProject, setNewProject] = useState({ title: '', description: '', imageUrl: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createProject(newProject);
    setNewProject({ title: '', description: '', imageUrl: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <button className="absolute top-2 right-2 text-2xl text-gray-400 hover:text-white transition" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-white">Create Project</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-gray-400">Title</label>
            <input
              type="text"
              placeholder="Project Title"
              value={newProject.title}
              onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
              className="input input-bordered w-full bg-gray-700 text-white border-gray-600 placeholder-gray-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-400">Description</label>
            <textarea
              placeholder="Project Description"
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
              className="textarea textarea-bordered w-full bg-gray-700 text-white border-gray-600 placeholder-gray-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-400">Image URL</label>
            <input
              type="text"
              placeholder="https://example.com/image.jpg"
              value={newProject.imageUrl}
              onChange={(e) => setNewProject({ ...newProject, imageUrl: e.target.value })}
              className="input input-bordered w-full bg-gray-700 text-white border-gray-600 placeholder-gray-500"
            />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white">
              Add Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectsInput;
