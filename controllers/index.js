const express = require('express');
const router = express.Router();

const skillsCtrl = require('../controllers/skills');
const skill = require('../models/skill');

// Index Route
router.get('/', skillsCtrl.index);

// Show New Route
router.post('/new', skillsCtrl.new);

// Create Route
router.post('/', skillsCtrl.create);

// Show Route
router.get('/:id', skillsCtrl.show);

// Edit Route
router.get('/:id/edit', skillsCtrl.edit);

// Update Route
router.put('/:id', skillsCtrl.update);

// Destroy Route
router.delete('/:id', skillsCtrl.delete);

module.exports = router;