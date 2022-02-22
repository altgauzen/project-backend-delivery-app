const Sale = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    'Sales', 
    {
      total_price: DataTypes.FLOAT,
      delivery_address: DataTypes.STRING,
      delivery_number: DataTypes.STRING,
      sale_date: DataTypes.DATEONLY,
      status: DataTypes.STRING,
    },
    { timestamps: false },
  );
  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { foreignKey: 'user_id', as: 'Users' })
  }
  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { foreignKey: 'seller_id', as: 'Users' })
  }
  return Sale;
};

module.exports = Sale;
