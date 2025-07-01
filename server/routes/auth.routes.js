import express from 'express';
import { signIn, signOut } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/auth/signin', signIn);
router.get('/auth/signout', signOut);

export default router;
