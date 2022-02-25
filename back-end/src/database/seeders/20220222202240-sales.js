"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "sales",
      [
        {
          user_id: 3,
          seller_id: 4,
          total_price: 99.99,
          delivery_address: "Rua Platina",
          delivery_number: "555, Casa D",
          sale_date: new Date(),
          status: "PAGO",
        },
        {
          user_id: 2,
          seller_id: 4,
          total_price: 41.62,
          delivery_address: "Rua DEV",
          delivery_number: "661, Apto 101",
          sale_date: new Date(),
          status: "EM TRANSPORTE",
        },
        {
          user_id: 3,
          seller_id: 4,
          total_price: 41.62,
          delivery_address: "Rua da cachaça",
          delivery_number: "170, Apto 601",
          sale_date: new Date(),
          status: "AGUARDANDO PAGAMENTO",
        },
      ],
      { 
        timestamps: false,
        tableName: 'sales'
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("sales", null, {});
  },
};
