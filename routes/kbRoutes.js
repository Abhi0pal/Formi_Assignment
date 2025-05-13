const express = require('express');
const router = express.Router();
const controller = require('../controllers/kbController');

router.post('/', controller.getChunk);

module.exports = router;

