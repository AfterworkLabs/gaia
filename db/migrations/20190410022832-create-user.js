'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      avatar_key: {
        type: Sequelize.STRING
      },
      signed_up_at: {
        type: Sequelize.DATE
      },
      geo: {
        type: Sequelize.STRING
      },
      time_zone: {
        type: Sequelize.STRING
      },
      locale: {
        type: Sequelize.STRING
      },
      user_type: {
        type: Sequelize.ENUM({
          values: ['user', 'guest', 'operator', 'system']
        })
      },
      level: {
        type: Sequelize.INTEGER
      },
      badge: {
        type: Sequelize.ENUM({
          values: ['official', 'verify', 'featured']
        })
      },
      followers_count: {
        type: Sequelize.INTEGER
      },
      metadata: {
        type: Sequelize.JSONB
      },
      deactivated_at: {
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
    return queryInterface.dropTable('Users');
  }
};
