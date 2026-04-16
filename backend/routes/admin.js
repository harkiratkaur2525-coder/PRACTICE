const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// We use hardcoded users array from auth if needed, but for simplicity
// let's return a static list of students for demo
router.use(auth('admin'));

router.get('/students', async (req, res) => {
  res.json([
      { _id: 1, name: 'Rahul Kumar', email: 'rahul@agc.edu', createdAt: new Date() },
      { _id: 2, name: 'Priya Singh', email: 'priya@agc.edu', createdAt: new Date() }
  ]);
});

module.exports = router;
