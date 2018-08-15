const contact_controller = require('../controllers/contactController');

const express = require('express');
const router = express.Router();

// GET author page
router.get('/', contact_controller.contact);

module.exports = router;