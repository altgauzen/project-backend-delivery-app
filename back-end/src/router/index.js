const express = require('express');
const userController = require('../controllers/users.controller');
const encryption = require('../middlewares/encryptionMd5');

const router = express.Router();


router.post('/register', userController.create);
router.get('/getUsersAll', userController.getAllUsers);
router.post('/login', userController.login);


module.exports = router;
