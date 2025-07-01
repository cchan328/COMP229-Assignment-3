import express from 'express';
import {
  getAllEducations,
  getEducationById,
  createEducation,
  updateEducation,
  deleteEducationById,
  deleteAllEducations
} from '../controllers/education.controller.js';

const router = express.Router();

router.get('/api/educations', getAllEducations);
router.get('/api/educations/:id', getEducationById);
router.post('/api/educations', createEducation);
router.put('/api/educations/:id', updateEducation);
router.delete('/api/educations/:id', deleteEducationById);
router.delete('/api/educations', deleteAllEducations);

export default router;