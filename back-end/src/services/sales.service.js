// const Joi = require('joi');
const { sales, users } = require('../database/models');
// const { badRequest } = require('../utils/dictionary/statusCode');
// const errorConstructor = require('../utils/functions/errorHandlers');

// const schemaSales = Joi.object({
//   userId: Joi.number(),
//   sellerId: Joi.number(),
//   totalPrice: Joi.number(),
//   deliveryAddress: Joi.string(),
//   deliveryNumber: Joi.number(),
//   status: Joi.string(),
//   saleDate: Joi.date(),
// });

const updateSaleStatusOrder = async ({ saleId, status }) => {
  const response = await sales.update({ status }, { where: { id: saleId } });
  return response;
};

const getAllSalesService = async () => {
  const response = await sales.findAll({ raw: true });
  return response;
};

const getAllSeller = async () => {
  const response = await users.findAll({
    where: { role: 'seller' },
    attributes: { exclude: ['password', 'email'] },
  });
  return response;
};

const createSaleService = async (userId, saleData) => {
  // const { error } = schemaSales.validate({ status, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, userId });
  // if (error) throw errorConstructor(badRequest, error.message);
  const response = await sales.create(data);
  return response;
};

module.exports = {
  updateSaleStatusOrder,
  getAllSalesService,
  createSaleService,
  getAllSeller,
};
