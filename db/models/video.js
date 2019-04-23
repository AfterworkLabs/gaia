module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define('Video', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    key: {
      type: DataTypes.STRING(4096)
    },
    thumbnail_key: {
      type: DataTypes.STRING(4096)
    },
    original_key: {
      type: DataTypes.STRING(4096)
    },
    caption: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.ENUM({
        values: ['approved', 'denied', 'pending', 'suspended', 'processing', 'manual', 'reserved']
      })
    },
    access_level: {
      type: DataTypes.ENUM({
        values: ['public', 'followers', 'private', 'friends']
      })
    },
    format: {
      type: DataTypes.ENUM({
        values: ['mp4', 'avi', 'mov']
      })
    },
    duration: {
      type: DataTypes.INTEGER
    },
    height: {
      type: DataTypes.STRING(45)
    },
    width: {
      type: DataTypes.STRING(45)
    },
    creator_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
        as: 'creator_id'
      }
    },
    copyright: {
      type: DataTypes.ENUM({
        values: ['user_generated', 'inhouse_produced', 'acquired', 'public', 'licensed']
      })
    },
    badge: {
      type: DataTypes.ENUM({
        values: ['featured', 'demo', 'ad']
      })
    },
    geo: {
      type: DataTypes.STRING
    },
    comments_count: {
      type: DataTypes.INTEGER
    },
    likes_count: {
      type: DataTypes.INTEGER
    },
    views_count: {
      type: DataTypes.INTEGER
    },
    deleted_at: {
      type: DataTypes.DATE(5)
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

  Video.associate = (models) => {
    // associations can be defined here with example
    // Todo.hasMany(models.TodoItem, {
    //   foreignKey: 'todoId',
    //   as: 'todoItems',
    // });
  };
  return Video;
};
