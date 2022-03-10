module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    'sales',
    {
      userId: { type: DataTypes.INTEGER, foreignkey: true },
      sellerId: { type: DataTypes.INTEGER, foreignkey: true },
      totalPrice: DataTypes.FLOAT,
      deliveryAddress: DataTypes.STRING,
      deliveryNumber: DataTypes.STRING,
      // saleDate: DataTypes.DATE,
      status: DataTypes.STRING,
    },
    {
      timestamps: false,
      underscored: true,
      createdAt: 'sale_date',
    }
  );

  Sale.associate = (models) => {
    Sale.belongsTo(models.users, { as: "user", foreignkey: "user_id" });
    Sale.belongsTo(models.users, { as: "seller", foreignkey: "seller_id" });
  };
  return Sale;
};
