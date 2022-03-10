const express = require('express');
const userController = require('../controllers/users.controller');
const productController = require('../controllers/products.controller');
const saleController = require('../controllers/sales.controller');
const encryption = require('../middlewares/encryptionMd5');
const { validateToken } = require('../middlewares/auth');

const router = express.Router();

router.post('/register', encryption, userController.create);
router.post('/login', encryption, userController.login);
router.get('/getUsersAll', validateToken, userController.getAllUsers);
router.get('/getProductsAll', validateToken, productController.getAllProducts);
router.get('/customer/orders', validateToken, saleController.getAllSales);
router.post('/createSale', validateToken, saleController.createSaleController);

module.exports = router;
