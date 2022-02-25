const express = require('express');
const userController = require('../controllers/users.controller');
const encryption = require('../middlewares/encryptionMd5');

const router = express.Router();

router.post('/register', encryption, userController.create);
router.post('/login', encryption, userController.login);
router.get('/getUsersAll', userController.getAllUsers);

module.exports = router;
