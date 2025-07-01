import express from 'express';
import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProjectById,
  deleteAllProjects
} from '../controllers/project.controller.js';

const router = express.Router();

router.get('/api/projects', getAllProjects);
router.get('/api/projects/:id', getProjectById);
router.post('/api/projects', createProject);
router.put('/api/projects/:id', updateProject);
router.delete('/api/projects/:id', deleteProjectById);
router.delete('/api/projects', deleteAllProjects);

export default router;
