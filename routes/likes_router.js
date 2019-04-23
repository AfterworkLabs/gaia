const express = require('express');
const router = express.Router();
const likesController = require('../controllers').likes;

router.post('/', likesController.create);

module.exports = router;
