// "use strict";

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.bulkInsert(
//       "sales_products",
//       [
//         {
//           sale_id: 1,
//           product_id: 1,
//           quantity: 100,
//         },
//         {
//           sale_id: 2,
//           product_id: 2,
//           quantity: 100,
//         },
//         {
//           sale_id: 3,
//           product_id: 3,
//           quantity: 100,
//         },
//       ],
//       { timestamps: false }
//     );
//   },

//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.bulkDelete("sales_products", null, {});
//   },
// };
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "salesProducts",
      [
        {
          sale_id: 1,
          product_id: 1,
          quantity: 100,
        },
        {
          sale_id: 2,
          product_id: 2,
          quantity: 100,
        },
        {
          sale_id: 3,
          product_id: 3,
          quantity: 100,
        },
      ],
      { timestamps: false }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("salesProducts", null, {});
  },
};
