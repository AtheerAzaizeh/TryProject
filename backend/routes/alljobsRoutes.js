const express = require('express');
const router = express.Router();
const { getAllJobs } = require('../controllers/alljobsController');

router.get('/', getAllJobs);

module.exports = router;
