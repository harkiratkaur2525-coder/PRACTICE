const mongoose = require('mongoose');

const NoticeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
  department: { type: String, default: 'All' }, // 'All' or specific department
}, { timestamps: true });

module.exports = mongoose.model('Notice', NoticeSchema);
