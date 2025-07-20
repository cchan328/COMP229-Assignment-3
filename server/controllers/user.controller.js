// server/controllers/user.controller.js

import User from '../models/user.js';
import bcrypt from 'bcryptjs';

// GET /api/users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.status(200).json(users);
  } catch (err) {
    console.error('Get all users error:', err);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

// GET /api/users/:id
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(200).json(user);
  } catch (err) {
    console.error('Get user error:', err);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};

// POST /api/users
export const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Prevent duplicates
    if (await User.findOne({ email })) {
      return res.status(409).json({ error: 'User already exists' });
    }

    // Create new User instance with the plain password
    // pre('save') hook in your model will hash it once
    const now = new Date();
    const user = new User({
      name,
      email,
      password,    // <-- plain-text here, hashed in pre('save')
      role,
      created: now,
      updated: now
    });

    await user.save();

    // Strip password from the returned object
    const safeUser = user.toObject();
    delete safeUser.password;

    res
      .status(201)
      .json({ message: 'User created successfully', user: safeUser });
  } catch (err) {
    console.error('Create user error:', err);
    res.status(500).json({ error: 'User creation failed' });
  }
};


export const updateUser = async (req, res) => {
  try {
    const updates = { ...req.body };


    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, 10);
    }


    updates.updated = new Date();

    const updated = await User.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true }
    ).select('-password');

    if (!updated) return res.status(404).json({ error: 'User not found' });

    res.status(200).json({ message: 'User updated', user: updated });
  } catch (err) {
    console.error('Update user error:', err);
    res.status(500).json({ error: 'Update failed' });
  }
};


export const deleteUserById = async (req, res) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'User not found' });
    res.status(200).json({ message: 'User deleted' });
  } catch (err) {
    console.error('Delete user error:', err);
    res.status(500).json({ error: 'Delete failed' });
  }
};


export const deleteAllUsers = async (req, res) => {
  try {
    await User.deleteMany({});
    res.status(200).json({ message: 'All users deleted' });
  } catch (err) {
    console.error('Delete all users error:', err);
    res.status(500).json({ error: 'Delete all failed' });
  }
};




