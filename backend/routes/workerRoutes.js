const express = require('express');
const router = express.Router();
const { getAllWorkers } = require('../controllers/workerController');

router.get('/', getAllWorkers);

module.exports = router;