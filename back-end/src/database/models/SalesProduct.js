// module.exports = (sequelize, DataTypes) => {
//   const sales_product = sequelize.define(
//     'sales_product', {
//       saleId: DataTypes.INTEGER,
//       productId: DataTypes.INTEGER,
//       quantity: DataTypes.INTEGER },
//     { 
//       timestamps: false,
//       tableName: 'sales_products',
//       underscored: true
//     });
//   sales_product.associate = (models) => {
//     models.Sale.belongsToMany(models.Product, {
//       as: 'products',
//       through: sales_product,
//       foreignKey: { name: 'saleId', field: 'sale_id' },
//       otherKey: { name: 'productId', field: 'product_id' },
//     });
//     models.Product.belongsToMany(models.Sale, {
//       as: 'sales',
//       through: sales_product,
//       foreignKey: { name: 'productId', field: 'product_id' },
//       otherKey: { name: 'saleId', field: 'sale_id' }, 
//     });
//   };
//   return sales_product;
// };
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
