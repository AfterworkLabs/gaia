const express = require('express');
const router = express.Router();
const profilesController = require('../controllers').profiles;

router.post('/', profilesController.create);

module.exports = router;
