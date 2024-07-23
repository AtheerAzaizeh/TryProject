const express = require('express');
const router = express.Router();
const cvController = require('../controllers/cvController');

router.post('/', cvController.createCv);

module.exports = router;
