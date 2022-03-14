// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.createTable('sales_products', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       saleId: {
//         allowNull: false,
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         field: "sale_id",
//         references: {
//           model: "sales",
//           key: "id",
//         },
//         onUpdate: "CASCADE",
//         onDelete: "CASCADE",
//       },
//       productId: {
//         allowNull: false,
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         field: "product_id",
//         references: {
//           model: "products",
//           key: "id",
//         },
//         onUpdate: "CASCADE",
//         onDelete: "CASCADE",
//       },
//       quantity: { allowNull: false, type: Sequelize.INTEGER },
//     });
//   },
//   down: async (queryInterface, _Sequelize) => {
//     await queryInterface.dropTable("sales_products");
//   },
// };
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("salesProducts", {
      saleId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: "sale_id",
        references: {
          model: "sales",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      productId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: "product_id",
        references: {
          model: "products",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      quantity: { allowNull: false, type: Sequelize.INTEGER },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable("salesProducts");
  },
};
