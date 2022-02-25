module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    "sale",
    {
      userId: DataTypes.INTEGER,
      sellerId: DataTypes.INTEGER,
      totalPrice: DataTypes.FLOAT,
      deliverAddress: DataTypes.STRING,
      deliverNumber: DataTypes.STRING,
      saleDate: DataTypes.DATE,
      status: DataTypes.STRING,
    },
    { timestamps: false, underscored: true, tableName: 'sale' }
  );

  Sale.associate = (models) => {
    Sale.belongsTo(models.user, { as: "user", foreignkey: "user_id" });
    Sale.belongsTo(models.user, { as: "saller", foreignkey: "seller_id" });
  };
  return Sale;
};
