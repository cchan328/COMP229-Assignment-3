import Project from '../models/projects.js';

export const getAllProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};

export const getProjectById = async (req, res) => {
  const project = await Project.findById(req.params.id);
  res.json(project);
};

export const createProject = async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.json(project);
};

export const updateProject = async (req, res) => {
  const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteProjectById = async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: 'Project deleted' });
};

export const deleteAllProjects = async (req, res) => {
  await Project.deleteMany({});
  res.json({ message: 'All projects deleted' });
};
