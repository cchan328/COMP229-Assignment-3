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

router.get('/api/users', getAllUsers);
router.get('/api/users/:id', getUserById);
router.post('/api/users', createUser);
router.put('/api/users/:id', updateUser);
router.delete('/api/users/:id', deleteUserById);
router.delete('/api/users', deleteAllUsers);

export default router;
