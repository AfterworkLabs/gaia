const express = require('express');
const router = express.Router();
const viewsController = require('../controllers').views;

router.post('/', viewsController.create);

module.exports = router;
