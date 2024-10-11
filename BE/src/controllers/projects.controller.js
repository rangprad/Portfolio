const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getProjects = async (req, res) => {
  try {
    const projects = await prisma.project.findMany();
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);  // Log error for debugging
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
};

exports.createProject = async (req, res) => {
  const { title, description, imageUrl } = req.body;

  if (!title || !description || !imageUrl) {
    return res.status(400).json({ error: 'All fields (title, description, imageUrl) are required' });
  }

  try {
    const newProject = await prisma.project.create({
      data: { title, description, imageUrl },
    });
    res.status(201).json(newProject);  
  } catch (error) {
    console.error('Error creating project:', error);  
    res.status(500).json({ error: 'Failed to create project' });
  }
};
