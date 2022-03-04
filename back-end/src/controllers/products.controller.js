const { getAllProductsService } = require('../services/products.service');
const { success } = require('../utils/dictionary/statusCode');

const getAllProducts = async (req, res, next) => {
  try {
    const { user } = req;
    const products = await getAllProductsService();
    return res.status(success).json({ products, user });
  } catch (error) {
    console.log(`GET ALLPRODUCTS -> ${error.message}`);
    next(error);
  }
};

module.exports = { getAllProducts };
