const {
  getAllSalesService,
  createSaleService,
  getAllSeller,
  getSaleByIdService,
} = require('../services/sales.service');
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

const getSaleById = async (req, res, next) => {
  try {
    const { user } = req;
    const { authorization } = req.headers;
    user.token = authorization;
    const { id } = req.params;
    const order = await getSaleByIdService(id);
    return res.status(success).json({ order });
  } catch (error) {
    console.log(`GET SALE BY ID -> ${error.message}`);
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
    const saleId = req.user.id;
    const { sale } = req.body;
   const sales = await createSaleService({ ...sale, saleId });
    return res.status(success).json(sales);
  } catch (error) {
    console.log(`GET CREATESALES -> ${error.message}`);
    next(error);
  }
};

module.exports = { getAllSales, getSaleById, createSaleController, getAllSellerController };
