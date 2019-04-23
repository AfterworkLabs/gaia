'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Videos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      key: {
        type: Sequelize.STRING(4096)
      },
      thumbnail_key: {
        type: Sequelize.STRING(4096)
      },
      original_key: {
        type: Sequelize.STRING(4096)
      },
      caption: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM({
          values: ['approved', 'denied', 'pending', 'suspended', 'processing', 'manual', 'reserved']
        })
      },
      access_level: {
        type: Sequelize.ENUM({
          values: ['public', 'followers', 'private', 'friends']
        })
      },
      format: {
        type: Sequelize.ENUM({
          values: ['mp4', 'avi', 'mov']
        })
      },
      duration: {
        type: Sequelize.INTEGER
      },
      height: {
        type: Sequelize.STRING(45)
      },
      width: {
        type: Sequelize.STRING(45)
      },
      creator_id: {
        type: Sequelize.INTEGER
      },
      copyright: {
        type: Sequelize.ENUM({
          values: ['user_generated', 'inhouse_produced', 'acquired', 'public', 'licensed']
        })
      },
      badge: {
        type: Sequelize.ENUM({
          values: ['featured', 'demo', 'ad']
        })
      },
      geo: {
        type: Sequelize.STRING
      },
      comments_count: {
        type: Sequelize.INTEGER
      },
      likes_count: {
        type: Sequelize.INTEGER
      },
      views_count: {
        type: Sequelize.INTEGER
      },
      deleted_at: {
        type: Sequelize.DATE(5)
      },
      inserted_at: {
        allowNull: false,
        type: Sequelize.DATE(5),
        defaultValue: Sequelize.NOW
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE(5),
        defaultValue: Sequelize.NOW,
        onUpdate : Sequelize.NOW
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Videos');
  }
};
