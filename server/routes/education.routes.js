// server/routes/education.routes.js
import express from 'express';
import {
  getAllEducation,
  getEducationById,
  createEducation,
  updateEducation,
  deleteEducation
} from '../controllers/education.controller.js';

const router = express.Router();


router.get('/', getAllEducation);


router.get('/:id', getEducationById);


router.post('/', createEducation);


router.put('/:id', updateEducation);


router.delete('/:id', deleteEducation);

export default router;
