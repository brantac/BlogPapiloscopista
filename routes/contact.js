const contact_controller = require('../controllers/contactController');

const express = require('express');
const router = express.Router();

// GET contact page
router.get('/', contact_controller.contact);

// POST contact form
router.post('/', contact_controller.sendMail);

module.exports = router;