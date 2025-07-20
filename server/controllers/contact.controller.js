import Contact from '../models/contact.js';

export const getAllContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
};

export const getContactById = async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.json(contact);
};

export const createContact = async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.json(contact);
};

export const updateContact = async (req, res) => {
  const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteContactById = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: 'Contact deleted' });
};

export const deleteAllContacts = async (req, res) => {
  await Contact.deleteMany({});
  res.json({ message: 'All contacts deleted' });
};

