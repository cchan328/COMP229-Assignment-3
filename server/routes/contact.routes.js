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


router.post('/', createContact);

router.get('/', getAllContacts);

router.get('/:id', getContactById);

router.put('/:id', updateContact);

router.delete('/:id', deleteContactById);

router.delete('/', deleteAllContacts);

export default router;
