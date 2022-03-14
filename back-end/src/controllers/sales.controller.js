const {
  getAllSalesService,
  createSaleService,
  getAllSeller,
} = require('../services/sales.service');

const { success } = require('../utils/dictionary/statusCode');

const getAllSales = async (req, res, next) => {
  try {
    const { user } = req;
    const { authorization } = req.headers;
    user.token = authorization;
    const sales = await getAllSalesService();
    return res.status(success).json({ sales, user });
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
};
const createSaleController = async (req, res, next) => {
  try {
    const { sale } = req.body;
    const sales = await createSaleService(sale);
    return res.status(success).json(sales);
  } catch (error) {
    console.log(`GET CREATESALES -> ${error.message}`);
    next(error);
  }
};

module.exports = { getAllSales, createSaleController, getAllSellerController };
