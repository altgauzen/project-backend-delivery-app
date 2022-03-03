const { products } = require('../database/models');

const getAllProductsService = async () => {
  const response = await products.findAll({ raw: true });
  return response;
};

module.exports = { getAllProductsService };
