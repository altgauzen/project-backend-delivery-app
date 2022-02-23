module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    "Sale",
    {
      userId: DataTypes.INTEGER,
      sellerId: DataTypes.INTEGER,
      totalPrice: DataTypes.FLOAT,
      deliverAddress: DataTypes.STRING,
      deliverNumber: DataTypes.STRING,
      saleDate: DataTypes.DATE,
      status: DataTypes.STRING,
    },
    { timestamps: false, underscored: true }
  );

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { as: "user", foreignkey: "user_id" });
    Sale.belongsTo(models.User, { as: "saller", foreignkey: "seller_id" });
  };
  return Sale;
};
