const express = require('express');
const router = express.Router();


// Index Route
router.get('/', (req, res) => {
    res.render('skills/index', {
        skills: Skill.getAll(),
    });
});

// Show Route
// router.get('/', (req, res) => {
//     res.render('', {
//         skills: Skill.getOne(),
//     });
// });

// Create Route

// Edit Route

// Delete Route

module.exports = router;