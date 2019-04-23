module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    avatar_key: {
      type: DataTypes.STRING
    },
    signed_up_at: {
      type: DataTypes.DATE
    },
    geo: {
      type: DataTypes.STRING
    },
    time_zone: {
      type: DataTypes.STRING
    },
    locale: {
      type: DataTypes.STRING
    },
    user_type: {
      type: DataTypes.ENUM({
        values: ['user', 'guest', 'operator', 'system']
      })
    },
    level: {
      type: DataTypes.INTEGER
    },
    badge: {
      type: DataTypes.ENUM({
        values: ['official', 'verify', 'featured']
      })
    },
    followers_count: {
      type: DataTypes.INTEGER
    },
    deactivated_at: {
      type: DataTypes.DATE
    },
    metadata: {
      type: DataTypes.JSONB
    },
    createdAt: {
      type: DataTypes.DATE(5),
      allowNull: false,
      defaultValue: DataTypes.NOW,
      field: 'inserted_at'
    },
    updatedAt: {
      type: DataTypes.DATE(5),
      allowNull: false,
      defaultValue: DataTypes.NOW,
      onUpdate : DataTypes.NOW,
      field: 'updated_at'
    }
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
