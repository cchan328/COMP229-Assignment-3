
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name:     { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  

  created:  { type: Date, required: true },
  updated:  { type: Date, required: true },
  

  role:     { type: String, enum: ['user','admin'], default: 'user' }
});


userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});


userSchema.methods.comparePassword = function(plain) {
  return bcrypt.compare(plain, this.password);
};

export default mongoose.model('User', userSchema);

