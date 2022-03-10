const { getAllSalesService, createSaleService, getAllSeller } = require('../services/sales.service');
const { success } = require('../utils/dictionary/statusCode');

const getAllSales = async (req, res, next) => {
  try {
    const { user } = req;
    const { authorization } = req.headers;
    user.token = authorization;
    const orders = await getAllSalesService();
    return res.status(success).json({ orders, user });
  } catch (error) {
    console.log(`GET ALLSALES -> ${error.message}`);
    next(error);
  }
};

const getAllSellerController = async (req, res, next) => {
  try {
    const seller = await getAllSeller();
    return res.status(success).json(seller);
  } catch (error) {
    console.log(`GET ALLSELLER -> ${error.message}`);
    next(error);
  }
}
const createSaleController = async (req, res, next) => {
  try {
    const { sellerId, totalPrice, deliveryAddress, deliveryNumber, status } = req.body;
    const userId = req.user.id;
    const sales = await createSaleService(userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status, status);
    return res.status(success).json({ sales, user });
  } catch (error) {
    console.log(`GET CREATESALES -> ${error.message}`);
    next(error);
  }
}

module.exports = { getAllSales, createSaleController, getAllSellerController };
