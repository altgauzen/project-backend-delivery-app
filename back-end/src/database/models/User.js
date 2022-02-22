const User = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'Users', 
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    { timestamps: false },
  );
  User.associate = (models) => {
    User.hasMany(models.Sale, { foreignKey: 'user_id', as: 'Sales' });
  };    
  return User;
};

module.exports = User;
