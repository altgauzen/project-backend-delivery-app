const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Products', 
    {
      name: DataTypes.STRING,
      price: DataTypes.FLOAT,
      url_image: DataTypes.STRING,
    },
    { timestamps: false },
  );
  return Product;
};

module.exports = Product;
