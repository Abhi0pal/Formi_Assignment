const express = require('express');
const router = express.Router();
const controller = require('../controllers/postCallController');

router.post('/', controller.logConversation);

module.exports = router;
