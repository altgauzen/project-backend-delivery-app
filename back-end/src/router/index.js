const express = require('express');
const userController = require('../controllers/users.controller');
const encryption = require('../middlewares/encryptionMd5');

const router = express.Router();

router.post('/register', encryption, userController.create);
router.post('/login', encryption, userController.login);

module.exports = router;
