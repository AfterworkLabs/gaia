module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  User.associate = (models) => {
    // associations can be defined here with example
    // Todo.hasMany(models.TodoItem, {
    //   foreignKey: 'todoId',
    //   as: 'todoItems',
    // });
  };
  return User;
};