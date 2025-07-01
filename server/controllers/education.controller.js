import Education from '../models/education.js'; 

export const getAllEducations = async (req, res) => {
  const educations = await Education.find();
  res.json(educations);
};

export const getEducationById = async (req, res) => {
  const education = await Education.findById(req.params.id);
  res.json(education);
};

export const createEducation = async (req, res) => {
  const education = new Education(req.body);
  await education.save();
  res.json(education);
};

export const updateEducation = async (req, res) => {
  const updated = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteEducationById = async (req, res) => {
  await Education.findByIdAndDelete(req.params.id);
  res.json({ message: 'education deleted' });
};

export const deleteAllEducations = async (req, res) => {
  await Education.deleteMany({});
  res.json({ message: 'All educations deleted' });
};