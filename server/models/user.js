import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  created: Date,
  updated: Date
});

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.comparePassword = function (plainPassword) {
  return bcrypt.compare(plainPassword, this.password);
};

export default mongoose.model('User', userSchema);