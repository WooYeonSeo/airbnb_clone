'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('lodgings', {
      lodging_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      pic_id: {
        type: Sequelize.STRING
      },
      adult_num: {
        type: Sequelize.STRING
      },
      kid_num: {
        type: Sequelize.STRING
      },
      infant_num: {
        type: Sequelize.INTEGER
      },
      lodging_type: {
        type: Sequelize.INTEGER
      },
      star_avg: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('lodgings');
  }
};
