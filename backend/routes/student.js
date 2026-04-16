const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Get student results/attendance (Mock implementation with Video Embeds)
router.get('/dashboard', auth('student'), async (req, res) => {
    res.json({
        attendance: { total: 100, attended: 65, percentage: 65 }, // Less than 75% maybe they missed
        results: [
            { subject: 'Advanced Data Structures', marks: 88, grade: 'A' },
            { subject: 'Operating Systems', marks: 75, grade: 'B' },
            { subject: 'Artificial Intelligence', marks: 92, grade: 'S' }
        ],
        missedLectures: [
            { title: "AI - Neural Networks Intro", url: "https://www.youtube.com/embed/aircAruvnKk" },
            { title: "OS - Memory Management", url: "https://www.youtube.com/embed/qcBIvnHpnB8" }
        ]
    });
});

module.exports = router;
