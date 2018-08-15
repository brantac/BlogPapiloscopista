const about_controller = require('../controllers/aboutController');

const express = require('express');
const router = express.Router();

// GET author page
router.get('/', about_controller.about);

module.exports = router;