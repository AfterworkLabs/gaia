'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      gender: {
        type: Sequelize.ENUM({
          values: ['male', 'female', 'other']
        })
      },
      birthdate: {
        type: Sequelize.DATEONLY
      },
      region: {
        type: Sequelize.STRING(45)
      },
      locality: {
        type: Sequelize.STRING(56)
      },
      postal_code: {
        type: Sequelize.STRING(12)
      },
      country: {
        type: Sequelize.STRING(2)
      },
      bio: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Profiles');
  }
};
