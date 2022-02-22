const SaleProduct = (sequelize, _DataTypes) => {
  const SaleProduct = sequelize.define(
    'SalesProducts', {
      url_image: _DataTypes.STRING,
    }, 
    {timestamps: false, tableName: 'SalesProducts'},
  );
  SaleProduct.associate = (models) => {
    models.Sale.belongsToMany(
      models.Product, { 
        as: 'Products', through: SaleProduct, foreignKey: 'sale_id', otherKey: 'product_id', 
      },
    );  
    models.Product.belongsToMany(
      models.Sale, { 
        as: 'Sales', through: SaleProduct, foreignKey: 'product_id', otherKey: 'sale_id', 
      },
    );
  };
  return SaleProduct;
}
