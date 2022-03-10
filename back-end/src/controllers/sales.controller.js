const { getAllSalesService, createSaleService } = require('../services/sales.service');
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

const createSaleController = async (req, res, next) => {
  try {
    const { seller_id, total_price, delivery_address, delivery_number, status } = req.body;
    const user_id = req.user.id;
    const sales = await createSaleService(user_id, seller_id, total_price, delivery_address, delivery_number, status);
    return res.status(success).json({ sales, user });
  } catch (error) {
    console.log(`GET ALLSALES -> ${error.message}`);
    next(error);
  }
}

module.exports = { getAllSales, createSaleController };
