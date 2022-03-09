const { getAllSalesService } = require('../services/sales.service');
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

module.exports = { getAllSales };
