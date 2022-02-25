module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('product', {
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    urlImage: DataTypes.INTEGER
  },
    { timestamps: false, underscored: true, tableName: 'product' });

  return Product;
};
