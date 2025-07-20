

import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;


    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }


    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }


    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_SECRET || 'JWT_SECRET',
      { expiresIn: '1h' }
    );


    res
      .cookie('token', token, { httpOnly: true })
      .status(200)
      .json({
        token,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role
        }
      });
  } catch (err) {
    console.error('Signin error:', err);
    res.status(500).json({ error: 'Signin failed' });
  }
};

export const signOut = (req, res) => {
  res.clearCookie('token').json({ message: 'Signed out successfully' });
};

export const requireSignin = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) throw new Error('No token provided');
    const token = authHeader.split(' ')[1];
    req.auth = jwt.verify(token, process.env.JWT_SECRET || 'JWT_SECRET');
    next();
  } catch (err) {
    console.error('Auth error:', err);
    res.status(401).json({ error: 'Unauthorized' });
  }
};


