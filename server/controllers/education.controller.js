
import Education from '../models/education.js';

export const getAllEducation = async (req, res) => {
  const eds = await Education.find();
  res.json(eds);
};

export const getEducationById = async (req, res) => {
  const ed = await Education.findById(req.params.id);
  if (!ed) return res.status(404).json({ error: 'Not found' });
  res.json(ed);
};

export const createEducation = async (req, res) => {
  const ed = new Education(req.body);
  await ed.save();
  res.status(201).json(ed);
};

export const updateEducation = async (req, res) => {
  const ed = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!ed) return res.status(404).json({ error: 'Not found' });
  res.json(ed);
};

export const deleteEducation = async (req, res) => {
  await Education.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};
