const { sales } = require('../database/models');
const Joi = require('joi');
const { badRequest } = require('../utils/dictionary/statusCode');
const errorConstructor = require('../utils/functions/errorHandlers');

const schemaSales = Joi.object({
  user_id: Joi.number().required(),
  seller_id: Joi.number().required(),
  total_price: Joi.number().required(),
  delivery_address: Joi.string().required(),
  delivery_number: Joi.number().required(),
  status: Joi.string().required(),
});

const updateSaleStatusOrder = async ({ saleId, status }) => {
  const response = await sales.update({ status }, { where: { id: saleId } });
  return response;
};

const getAllSalesService = async () => {
  const response = await sales.findAll({ raw: true });
  return response;
};

const createSaleService = async (user_id, seller_id, total_price, delivery_address, delivery_number, status) => {
  const { error } = schemaSales.validate({ user_id, seller_id, total_price, delivery_address, delivery_number, status });
  if (error) throw errorConstructor(badRequest, error.message);
  const { saleId } = await sales.create({ user_id, seller_id, total_price, delivery_address, delivery_number, status });
  return saleId;
}

module.exports = { updateSaleStatusOrder, getAllSalesService, createSaleService };
