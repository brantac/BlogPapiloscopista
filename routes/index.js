const express = require('express');
const home_controller = require('../controllers/homeController');
const router = express.Router();

// GET home page
router.get('/', home_controller.index);

module.exports = router;