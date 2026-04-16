const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'admin'], default: 'student' },
  // Student specific details
  enrollmentNo: { type: String, sparse: true, unique: true },
  department: { type: String },
  semester: { type: Number },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
