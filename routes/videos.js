const videos_controller = require('../controllers/videosController');

const express = require('express');
const router = express.Router();

// GET author page
router.get('/', videos_controller.videos);

module.exports = router;