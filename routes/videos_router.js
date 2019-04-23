const express = require('express');
const router = express.Router();
const videosController = require('../controllers').videos;

router.post('/', videosController.create);
router.get('/global_feed', videosController.get_global_feed);

module.exports = router;
