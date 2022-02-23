const express = require('express');
const userController = require('../controllers/users.controller');

const router = express.Router();

router.post('/register', userController.create);
router.post('/login', userController.login);

module.exports = router;
