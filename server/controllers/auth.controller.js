import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = 'secertkey'; 

export const signIn = async (req, res) => {
  
  
    try {
    const { email, password } = req.body;
    console.log("SIGNIN HIT >>>", req.body);
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: 'User not found' });

    // Validate password
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: 'Invalid password' });

    // Create token
    const token = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: '2h' });

    res.json({ token, user: { name: user.name, email: user.email } });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const signOut = (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Signed out successfully' });
};
