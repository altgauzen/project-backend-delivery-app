module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    'sales',
    {
      user_id: { type: DataTypes.INTEGER, foreignkey: true },
      seller_id: { type: DataTypes.INTEGER, foreignkey: true },
      total_price: DataTypes.DECIMAL(9,2),
      delivery_address: DataTypes.STRING,
      delivery_number: DataTypes.STRING,
      sale_date: DataTypes.DATE,
      status: DataTypes.STRING,
    },
    {
      timestamps: false,
      underscored: true,
    }
  );

  Sale.associate = (models) => {
    Sale.belongsTo(models.users, { as: "user", foreignKey: "user_id" });
    Sale.belongsTo(models.users, { as: "seller", foreignkey: "seller_id" });
  };
  return Sale;
};
