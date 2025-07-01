import User from '../models/user.js';

export const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

export const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};

export const createUser = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
};

export const updateUser = async (req, res) => {
  const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteUserById = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
};

export const deleteAllUsers = async (req, res) => {
  await User.deleteMany({});
  res.json({ message: 'All users deleted' });
};
