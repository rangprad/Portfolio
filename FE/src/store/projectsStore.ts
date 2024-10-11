import { create } from 'zustand';
import axios from 'axios';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface ProjectsState {
  projects: Project[];
  fetchProjects: () => Promise<void>;
  createProject: (project: Omit<Project, 'id'>) => Promise<void>;
}

export const useProjectsStore = create<ProjectsState>((set) => ({
  projects: [],
  
  fetchProjects: async () => {
    const response = await axios.get<Project[]>('http://localhost:5000/api/projects');
    set({ projects: response.data });
  },

  createProject: async (project: Omit<Project, 'id'>) => {
    const response = await axios.post<Project>('http://localhost:5000/api/projects', project);
    set((state) => ({ projects: [...state.projects, response.data] }));
  },
}));
