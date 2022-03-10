const { sales, users } = require('../database/models');
const Joi = require('joi');
const { badRequest } = require('../utils/dictionary/statusCode');
const errorConstructor = require('../utils/functions/errorHandlers');

const schemaSales = Joi.object({
  userId: Joi.number().required(),
  sellerId: Joi.number().required(),
  totalPrice: Joi.number().required(),
  deliveryAddress: Joi.string().required(),
  deliveryNumber: Joi.number().required(),
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

const getAllSeller = async () => {
  const response = await users.findAll({
    where: { role: 'seller' },
    attributes: { exclude: ['password', 'email'] },
  });
  return response;
};

const createSaleService = async (user_id, seller_id, tota_price, delivery_address, delivery_number, status) => {
  // const { error } = schemaSales.validate({ seller_id, total_price, delivery_address, delivery_number, status });
  // if (error) throw errorConstructor(badRequest, error.message);
  const response = await sales.create({ user_id, seller_id, tota_price, delivery_address, delivery_number, status });
  return response;
}

module.exports = { updateSaleStatusOrder, getAllSalesService, createSaleService, getAllSeller };
