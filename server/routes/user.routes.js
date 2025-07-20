

import express from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUserById,
  deleteAllUsers
} from '../controllers/user.controller.js';

const router = express.Router();


router.get('/', getAllUsers);


router.get('/:id', getUserById);


router.post('/', createUser);


router.put('/:id', updateUser);


router.delete('/:id', deleteUserById);


router.delete('/', deleteAllUsers);

export default router;

