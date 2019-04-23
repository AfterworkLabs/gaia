const express = require('express');
const router = express.Router();
const bookmarksController = require('../controllers').bookmarks;

router.post('/', bookmarksController.create);

module.exports = router;
