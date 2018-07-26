const express = require('express');
const index_controller = require('../controllers/indexController');
const router = express.Router();

// Handle GET to index
router.get('/', index_controller.index);

// GET page
router.get('/p/:page', index_controller.page);

module.exports = router;