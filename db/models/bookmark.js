module.exports = (sequelize, DataTypes) => {
  const Bookmark = sequelize.define('Bookmark', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    video_id: {
      type: DataTypes.INTEGER,
      allowNull: false
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
  Bookmark.associate = function(models) {
    // associations can be defined here
  };
  return Bookmark;
};
