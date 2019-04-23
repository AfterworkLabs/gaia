'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gender: {
      type: DataTypes.ENUM({
        values: ['male', 'female', 'other']
      })
    },
    birthdate: {
      type: DataTypes.DATEONLY
    },
    region: {
      type: DataTypes.STRING(45)
    },
    locality: {
      type: DataTypes.STRING(56)
    },
    postal_code: {
      type: DataTypes.STRING(12)
    },
    country: {
      type: DataTypes.STRING(2)
    },
    bio: {
      type: DataTypes.STRING
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
  }, {});
  Profile.associate = function(models) {
    // associations can be defined here
  };
  return Profile;
};
