module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('products', {
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    urlImage: DataTypes.INTEGER
  },
    { timestamps: false, underscored: true});

  return Product;
};
