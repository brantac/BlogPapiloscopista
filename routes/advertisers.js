const advertisers_controller = require('../controllers/advertisersController');

const express = require('express');
const router = express.Router();

// GET author page
router.get('/', advertisers_controller.advertisers);

module.exports = router;