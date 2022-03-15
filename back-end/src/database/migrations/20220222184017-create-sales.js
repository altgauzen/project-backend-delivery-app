module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true, 
        type: Sequelize.INTEGER 
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'user_id',
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      seller_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'seller_id',
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      total_price: {
        allowNull: false,
        type: Sequelize.DECIMAL(9,2),
        field: 'total_price'
      },
      delivery_address: { allowNull: false, type: Sequelize.STRING, field: 'delivery_address' },
      delivery_number: { allowNull: false, type: Sequelize.STRING, field: 'delivery_number' },
      sale_date: { allowNull: false, type: Sequelize.DATE, field: 'sale_date' },
      status: { allowNull: false, type: Sequelize.STRING } 
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('sales');
  },
};
