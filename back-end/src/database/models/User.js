module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  { 
    timestamps: false,
    tableName: 'user'
  });

  User.associate = (models) => {
    User.hasMany(models.sale, { as: 'user', foreignkey: 'user_id' });
    User.hasMany(models.sale, { as: 'saller', foreignkey: 'seller_id' });
  };
  return User;
};
