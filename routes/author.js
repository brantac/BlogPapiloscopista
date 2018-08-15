const author_controller = require('../controllers/authorController');

const express = require('express');
const router = express.Router();

// GET author page
router.get('/', author_controller.author);

module.exports = router;