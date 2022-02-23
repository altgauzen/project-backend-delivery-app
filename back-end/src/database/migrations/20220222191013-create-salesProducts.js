module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("SalesProducts", {
      saleId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: "sale_id",
        references: {
          model: "Sales",
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
          model: "Products",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      quantity: { allowNull: false, type: Sequelize.INTEGER },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable("SalesProducts");
  },
};
