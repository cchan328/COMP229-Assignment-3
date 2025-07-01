import express from 'express';
import {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContactById,
  deleteAllContacts
} from '../controllers/contact.controller.js';

const router = express.Router();

router.get('/api/contacts', getAllContacts);
router.get('/api/contacts/:id', getContactById);
router.post('/api/contacts', createContact);
router.put('/api/contacts/:id', updateContact);
router.delete('/api/contacts/:id', deleteContactById);
router.delete('/api/contacts', deleteAllContacts);

export default router;