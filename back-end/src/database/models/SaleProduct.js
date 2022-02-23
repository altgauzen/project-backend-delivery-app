module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProduct', {
    saleId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,

    quantity: DataTypes.INTEGER },
    { timestamps: false, underscored: true });
  SalesProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: 'product',
      through: SalesProduct,
      foreignKey: 'sale_id',
      otherKey: 'product_id' });
    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      through: SalesProduct,
      foreignKey: 'product_id',
      otherKey: 'sale_id' });
  };
  return SalesProduct;
};
