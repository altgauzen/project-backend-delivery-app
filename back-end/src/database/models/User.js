module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  { 
    timestamps: false
  });

  User.associate = (models) => {
    User.hasMany(models.sale, { as: 'user', foreignkey: 'user_id' });
    User.hasMany(models.sale, { as: 'saller', foreignkey: 'seller_id' });
  };
  return User;
};
