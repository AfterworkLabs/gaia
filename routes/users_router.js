const express = require('express');
const router = express.Router();
const usersController = require('../controllers').users;

router.post('/', usersController.create);
router.get('/:id', usersController.get_user_by_id);


module.exports = router;
