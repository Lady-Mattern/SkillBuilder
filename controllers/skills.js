const Skill = require('../models/skill');

module.exports = {
    index,

}

// Index
function index(req, res) {
    res.render('skills/index', { 
        skills: Skill.getAll(),
    });
}

// New


// Create

// Show

// Edit

// Update

// Delete