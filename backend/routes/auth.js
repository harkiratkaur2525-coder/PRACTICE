const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// In-Memory Database Simulation
let users = [];
let idCounter = 1;

// Register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role, enrollmentNo, department, semester } = req.body;
    
    if (users.find(u => u.email === email)) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = {
      _id: idCounter++,
      name, email, password, // Mock without bcrypt for simplicity
      role: role || 'student', enrollmentNo, department, semester
    };

    users.push(newUser);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Hardcoded Admin
    if (email === 'admin@agc.edu' && password === 'admin') {
      const token = jwt.sign({ id: 0, role: 'admin', name: 'Super Admin' }, process.env.JWT_SECRET || 'secret', { expiresIn: '1d' });
      return res.json({ token, user: { id: 0, name: 'Super Admin', role: 'admin', email } });
    }
    
    // Hardcoded Faculty
    if (email === 'faculty@agc.edu' && password === 'faculty') {
      const token = jwt.sign({ id: -1, role: 'faculty', name: 'Dr. Sharma' }, process.env.JWT_SECRET || 'secret', { expiresIn: '1d' });
      return res.json({ token, user: { id: -1, name: 'Dr. Sharma', role: 'faculty', email } });
    }

    const user = users.find(u => u.email === email && u.password === password);
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const payload = { id: user._id, role: user.role, name: user.name };
    const token = jwt.sign(payload, process.env.JWT_SECRET || 'secret', { expiresIn: '1d' });
    res.json({ token, user: { id: user._id, name: user.name, role: user.role, email: user.email } });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = { router, users };
