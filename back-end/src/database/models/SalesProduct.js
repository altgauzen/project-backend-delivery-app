module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define(
    'salesProducts', {
      saleId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER },
    {
      timestamps: false,
      tableName: 'salesProducts',
      underscored: true
    });
  SalesProduct.associate = (models) => {
    models.sales.belongsToMany(models.products, {
      as: 'products',
      through: SalesProduct,
      foreignKey: 'saleId',
      otherKey: 'productId'
    });
    models.products.belongsToMany(models.sales, {
      as: 'sales',
      through: SalesProduct,
      foreignKey: 'productId',
      otherKey: 'saleId'
    });
  };
  return SalesProduct;
};
