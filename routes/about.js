import {about} from "../controllers/aboutController";

import express from "express";
const router = express.Router();

// GET author page
router.get('/sobre', about);

module.exports = router;