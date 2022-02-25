module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define(
    'salesProducts', {
      saleId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER },
    { 
      timestamps: false,
      underscored: true
    });
  SalesProduct.associate = (models) => {
    models.sales.belongsToMany(models.products, {
      as: 'product',
      through: SalesProduct,
      foreignKey: 'sale_id',
      otherKey: 'product_id' 
    });
    models.products.belongsToMany(models.sales, {
      as: 'sales',
      through: SalesProduct,
      foreignKey: 'product_id',
      otherKey: 'sale_id' 
    });
  };
  return SalesProduct;
};
