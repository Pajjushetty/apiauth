// models/User.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  photo: { type: String },
  bio: { type: String },
  phone: { type: String },
  role: { type: String, default: 'user', enum: ['user', 'admin'] },
  profileVisibility: { type: String, default: 'public', enum: ['public', 'private'] },
  provider: { type: String, enum: ['local', 'google', 'facebook', 'twitter', 'github'], default: 'local' }
});

const User = mongoose.model('User', UserSchema);
export default User;
