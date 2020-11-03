const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update 
}

function index(req, res) {
    res.render('skills/index', { 
        skills: Skill.getAll(),
        time: req.time
    });
}