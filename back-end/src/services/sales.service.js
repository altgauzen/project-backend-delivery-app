const { sales, users, salesProducts, products } = require('../database/models');

// const Joi = require('joi');
// const { badRequest } = require('../utils/dictionary/statusCode');
// const errorConstructor = require('../utils/functions/errorHandlers');

/*
const schemaSales = Joi.object({
  userId: Joi.number().required(),
  sellerId: Joi.number().required(),
  totalPrice: Joi.number().required(),
  deliveryAddress: Joi.string().required(),
  deliveryNumber: Joi.number().required(),
  status: Joi.string().required(),
});
*/

const updateSaleStatusOrder = async ({ saleId, status }) => {
  const response = await sales.update({ status }, { where: { id: saleId } });
  return response;
};

const getAllSalesService = async () => {
  const response = await sales.findAll({ raw: true });
  return response;
};

const getSaleByIdService = async (id) => {
  const response = await sales.findOne({
    where: { id },
    });
  return response;
};

const getAllSeller = async () => {
  const response = await users.findAll({
    where: { role: 'seller' },
    attributes: { exclude: ['password', 'email'] },
  });
  console.log('NO SALES SERVICE, VEM ALL SELLERS???', response);
  return response;
};

const createSaleService = async (data) => {
  console.log('DATA -->', data);
  const { shoppingCart } = data;
  const newData = data;
  delete newData.shoppingCart;
  const response = await sales.create(newData);

  await Promise.all(
    shoppingCart.map((item) => {
      const resp = salesProducts.create({
        saleId: response.dataValues.id, productId: item.productId, quantity: item.quantity,
      });
      return resp;
    })
  )
  return response;
};

const getOrderProductsByIdService = async (id) => {
  const res = await sales.findOne({
    where: { id },
    attributes: ['id'],
    include: {
      model: products,
      as: 'products',
      through: { attributes: ['quantity'],
    } },
    // { model: salesProducts, as: 'salesProducts', attributes: ['quantity'] },
    // raw: true,
  });

  return res;
};

module.exports = {
  updateSaleStatusOrder,
  getSaleByIdService,
  getAllSalesService,
  createSaleService,
  getAllSeller,
  getOrderProductsByIdService,
};
