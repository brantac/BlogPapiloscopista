const express = require('express');
const index_controller = require('../controllers/indexController');
const router = express.Router();

// GET home page
router.get('/', index_controller.indexRender);

module.exports = router;