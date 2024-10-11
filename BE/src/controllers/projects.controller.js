const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Fetch all projects
exports.getProjects = async (req, res) => {
  try {
    const projects = await prisma.project.findMany();
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);  // Log error for debugging
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
};

// Create a new project
exports.createProject = async (req, res) => {
  const { title, description, imageUrl } = req.body;

  // Validate input
  if (!title || !description || !imageUrl) {
    return res.status(400).json({ error: 'All fields (title, description, imageUrl) are required' });
  }

  try {
    const newProject = await prisma.project.create({
      data: { title, description, imageUrl },
    });
    res.status(201).json(newProject);  // Return 201 for successful creation
  } catch (error) {
    console.error('Error creating project:', error);  // Log error for debugging
    res.status(500).json({ error: 'Failed to create project' });
  }
};
