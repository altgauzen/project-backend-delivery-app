const { Sale } = require('../database/models');

const updateSaleStatusOrder = async ({ saleId, status }) => {
  const response = await Sale.update({ status }, { where: { id: saleId } });
  return response;
};

module.exports = { updateSaleStatusOrder };
